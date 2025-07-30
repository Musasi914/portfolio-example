# Portfolio Example

勉強用のポートフォリオサイトテストです。
サイト：https://portfolio-example-rouge.vercel.app/

## 感想

パララックス実装って素材探すのが大変だ。AIとかで生成ツール探したらあるのかな。<br>

uiコンポーネントを使わせてもらったが、便利。だが、いままで勉強してたのが馬鹿らしくなるクオリティ。<br>
https://ui.aceternity.com/

## 概要

このプロジェクトは、Next.js、TypeScript、Tailwind CSSを使用して作成されたポートフォリオサイトです。3Dアニメーションやインタラクティブな要素を含むモダンなWebサイトの実装例として学習用に作成されました。

## 技術スタック

- **フレームワーク**: Next.js 15.4.4
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: GSAP, Motion
- **3D**: Three.js
- **UIコンポーネント**: Radix UI
- **アイコン**: Lucide React, Tabler Icons

## 主な機能

- 🎨 モダンなUI/UXデザイン
- 🌟 3Dアニメーションとインタラクティブ要素
- 📧 お問い合わせフォーム（Resend連携）
- 📱 レスポンシブデザイン
- ⚡ 高速なパフォーマンス

## セットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd portfolio-example

# 依存関係をインストール
npm install
```

### 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
# Resend API Key (メール送信機能用)
RESEND_API_KEY=your_resend_api_key_here
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## プロジェクト構造

```
portfolio-example/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # 再利用可能なコンポーネント
│   ├── features/           # 機能別のコンポーネント
│   │   ├── contact/       # お問い合わせ機能
│   │   ├── home/          # ホームページ機能
│   │   └── marquee/       # マーキー機能
│   └── lib/               # ユーティリティ関数
├── public/                # 静的ファイル
└── package.json
```

## 学習ポイント

### 1. Next.js App Router

- Server Actionsの実装
- ルーティングとレイアウト

### 2. アニメーション

- GSAPを使用した
- パララックスの実装のコツ(素材の探し方)
- Three.jsによる3D要素

### 3. フォーム処理

- Server Actionsを使用したフォーム送信
- バリデーション（Zod）
- エラーハンドリング

### 4. メール送信

- Resend APIとの連携
- 環境変数の管理
- 非同期処理

## スクリプト

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start

# リント
npm run lint
```

## カスタマイズ

### スタイルの変更

- `src/app/globals.css`でグローバルスタイルを編集
- Tailwind CSSクラスを使用してコンポーネントをカスタマイズ

### コンテンツの変更

- `src/features/home/`でホームページのコンテンツを編集
- `src/features/contact/`でお問い合わせフォームをカスタマイズ

### アニメーションの調整

- `src/features/home/components/`でアニメーション設定を調整
- GSAPのタイムラインやイージングを変更

## トラブルシューティング

### メール送信が動作しない場合

1. `.env.local`ファイルに`RESEND_API_KEY`が正しく設定されているか確認
2. Resendアカウントが作成され、APIキーが有効か確認
3. 開発サーバーを再起動

### アニメーションが動作しない場合

1. ブラウザのコンソールでエラーを確認
2. GSAPやThree.jsの依存関係が正しくインストールされているか確認

## ライセンス

このプロジェクトは学習目的で作成されています。

## 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Resend Documentation](https://resend.com/docs)

---

**注意**: このプロジェクトは学習用です。本番環境での使用は自己責任で行ってください。
