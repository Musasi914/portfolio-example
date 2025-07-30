"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  title: z.string().min(1, "タイトルは必須です"),
  message: z.string().min(1, "メッセージは必須です"),
});

export async function postAction(prev: any, formData: FormData) {
  try {
    const validatedFields = schema.safeParse({
      email: formData.get("email"),
      title: formData.get("title"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      console.log("バリデーションエラー:", validatedFields.error.flatten().fieldErrors);
      return {
        error: validatedFields.error.flatten().fieldErrors,
        message: null,
      };
    }

    const { email, title, message } = validatedFields.data;
    console.log("メール送信開始:", { email, title, message });

    // Resend APIキーが設定されているかチェック
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEYが設定されていません");
      return {
        error: { general: ["メール送信の設定が不完全です"] },
        message: null,
      };
    }

    // メール送信
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Resendのデフォルト送信者
      to: "sopmod120@gmail.com",
      replyTo: email, // 返信先を送信者のメールアドレスに設定
      subject: `ポートフォリオからのお問い合わせ: ${title}`,
      html: `
        <h2>新しいお問い合わせ</h2>
        <p><strong>送信者:</strong> ${email}</p>
        <p><strong>タイトル:</strong> ${title}</p>
        <p><strong>メッセージ:</strong></p>
        <div style="white-space: pre-wrap;">${message}</div>
      `,
    });

    console.log("メール送信結果:", result);

    if (result.error) {
      console.error("メール送信エラー:", result.error);
      return {
        error: { general: ["メールの送信に失敗しました"] },
        message: null,
      };
    }

    return {
      error: null,
      message: "メールを送信しました",
    };
  } catch (error) {
    console.error("予期しないエラー:", error);
    return {
      error: { general: ["予期しないエラーが発生しました"] },
      message: null,
    };
  }
}
