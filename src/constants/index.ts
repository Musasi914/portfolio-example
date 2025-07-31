import { NavItem } from "@/types";

// ナビゲーション項目
export const NAV_ITEMS: NavItem[] = [
  { href: "#hero", label: "TOP" },
  { href: "#marquee", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

// ホームセクションの引用文
export const HOME_QUOTES = [
  "久しぶりの模写な気がする",
  "パララックスパララックス",
  "Hello World!!",
  "これはどうだろう",
  "これを見ている人はいますか？",
  "7/27作成",
  "お疲れ様でした",
  "おはようございます",
  "こんなポートフォリオでございます",
  "だけど、これはあくまでもテストです",
];

// スキルリスト
export const SKILLS = ["Next.js", "React", "TypeScript", "Tailwind", "ShadcnUi"];

// 背景画像リスト
export const BACKGROUND_IMAGES = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
];

// アニメーション設定
export const ANIMATION_CONFIG = {
  parallax: {
    mountain2: { y: 50 },
    mountain3: { y: 100 },
    planets: { y: 120, duration: 1 },
    sky: { y: 150 },
  },
  entrance: {
    mountain3: { yPercent: 10, duration: 2, delay: 0.0, ease: "power2.out" },
    mountain2: { yPercent: 100, duration: 1.5, delay: 0.5, ease: "power2.out" },
    mountain1: { yPercent: 100, duration: 1, delay: 1, ease: "power2.out" },
    planets: { yPercent: 5, duration: 2, delay: 0.0, ease: "power2.inOut" },
  },
} as const;

// 3Dモデル設定
export const MODEL_CONFIG = {
  mobile: {
    position: { x: 0, y: -1, z: -3 },
    rotation: { y: (Math.PI / 180) * 140 },
  },
  desktop: {
    position: { x: 0.75, y: -0.7, z: -2.5 },
    rotation: { y: (Math.PI / 180) * 140 },
  },
  large: {
    position: { x: 0.5, y: -0.7, z: -2.2 },
    rotation: { y: (Math.PI / 180) * 140 },
  },
} as const;

// メール設定
export const EMAIL_CONFIG = {
  from: "onboarding@resend.dev",
  to: "sopmod120@gmail.com",
  subjectPrefix: "ポートフォリオからのお問い合わせ: ",
} as const;
