"use client";

import { useActionState } from "react";
import { postAction } from "./serverAction/postAction";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Contact() {
  const initialState: any = { error: null, message: null };

  const [result, dispatch, pending] = useActionState(postAction, initialState);

  return (
    <section className="w-full min-h-screen relative pt-10 mt-20 grid place-items-center">
      <div className="max-w-md mx-auto bg-background rounded-lg shadow-accent shadow-2xl w-full">
        <CardSpotlight className="p-6">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-center">お問い合わせ</h2>

            {/* 成功メッセージ */}
            {result.message && <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">{result.message}</div>}

            {/* エラーメッセージ */}
            {result.error && Object.keys(result.error).length > 0 && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {Object.entries(result.error).map(([field, errors]) => (
                  <div key={field}>
                    {Array.isArray(errors) &&
                      errors.map((error: string, index: number) => (
                        <p key={index} className="text-sm">
                          {error}
                        </p>
                      ))}
                  </div>
                ))}
              </div>
            )}

            <form action={dispatch} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="タイトル"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="メッセージ"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={pending || result.message}
                className="w-full bg-accent text-accent-foreground py-3 px-6 rounded hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? "送信中..." : result.message ? "ありがとうございました" : "送信"}
              </button>
            </form>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}
