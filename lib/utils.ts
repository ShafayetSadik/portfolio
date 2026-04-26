import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Theme } from "@/lib/types";
import { themeTokens } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  if (typeof document === "undefined") {
    return;
  }

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
}

export function formatThemeSnippet(theme: Theme) {
  const lines = themeTokens.map((token) => `  ${token}: "${theme[token]}",`);

  return `export const defaultTheme: Theme = {\n${lines.join("\n")}\n};`;
}
