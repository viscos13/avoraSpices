import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSpiceParam(param: string | null): 'cardamom' | 'pepper' | 'clove' | null {
  if (!param) return null;
  const p = param.toLowerCase();
  if (p.includes('cardamom')) return 'cardamom';
  if (p.includes('pepper')) return 'pepper';
  if (p.includes('clove')) return 'clove';
  return null;
}
