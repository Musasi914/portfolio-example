import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合するユーティリティ関数
 * @param inputs - 結合するクラス名の配列
 * @returns 結合されたクラス名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * デバイスタイプを判定する関数
 * @returns デバイスタイプ
 */
export function getDeviceType(): "mobile" | "desktop" | "large" {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;
  if (width <= 768) return "mobile";
  if (width >= 1280) return "large";
  return "desktop";
}

/**
 * ランダムな位置を生成する関数
 * @param maxWidth - 最大幅
 * @param maxHeight - 最大高さ
 * @param padding - パディング
 * @returns ランダムな位置
 */
export function getRandomPosition(maxWidth: number = window.innerWidth, maxHeight: number = window.innerHeight, padding: number = 100) {
  const x = Math.random() * (maxWidth - padding);
  const y = Math.random() * (maxHeight - padding);
  return { x, y };
}

/**
 * メールアドレスのバリデーション
 * @param email - メールアドレス
 * @returns バリデーション結果
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 文字列の長さを制限する関数
 * @param str - 対象文字列
 * @param maxLength - 最大長
 * @returns 制限された文字列
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * 数値を範囲内に制限する関数
 * @param value - 対象の数値
 * @param min - 最小値
 * @param max - 最大値
 * @returns 制限された数値
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * 遅延を実行する関数
 * @param ms - 遅延時間（ミリ秒）
 * @returns Promise
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * オブジェクトから特定のプロパティを除外する関数
 * @param obj - 対象オブジェクト
 * @param keys - 除外するキーの配列
 * @returns 除外後のオブジェクト
 */
export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
}

/**
 * オブジェクトから特定のプロパティのみを取得する関数
 * @param obj - 対象オブジェクト
 * @param keys - 取得するキーの配列
 * @returns 取得したオブジェクト
 */
export function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
