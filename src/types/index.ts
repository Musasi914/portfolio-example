// フォーム関連の型定義
export interface ContactFormData {
  email: string;
  title: string;
  message: string;
}

export interface ContactFormErrors {
  email?: string[];
  title?: string[];
  message?: string[];
  general?: string[];
}

export interface ContactFormState {
  error: ContactFormErrors | null;
  message: string | null;
}

// アニメーション関連の型定義
export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
}

export interface ParallaxConfig {
  y: number;
  duration: number;
  ease: string;
}

// 3Dモデル関連の型定義
export interface ModelConfig {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    y: number;
  };
  scale: number;
}

// マーキー関連の型定義
export interface MarqueeItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

// ナビゲーション関連の型定義
export interface NavItem {
  href: string;
  label: string;
}

// 環境変数の型定義
export interface EnvironmentVariables {
  RESEND_API_KEY: string;
}

// APIレスポンスの型定義
export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}
