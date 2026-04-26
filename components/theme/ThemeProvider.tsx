"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultTheme, THEME_STORAGE_KEY } from "@/content/theme";
import type { Theme, ThemeToken } from "@/lib/types";
import { themeTokens } from "@/lib/types";

interface ThemeContextValue {
  theme: Theme;
  setToken: (token: ThemeToken, value: string) => void;
  resetTheme: () => void;
  applyPreset: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isTheme(value: unknown): value is Theme {
  if (!value || typeof value !== "object") {
    return false;
  }

  return themeTokens.every(
    (token) => typeof (value as Record<string, unknown>)[token] === "string",
  );
}

function applyTheme(theme: Theme) {
  themeTokens.forEach((token) => {
    document.documentElement.style.setProperty(`--${token}`, theme[token]);
  });
}

function readStoredTheme() {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (!raw) {
      return defaultTheme;
    }

    const parsed = JSON.parse(raw);
    return isTheme(parsed) ? parsed : defaultTheme;
  } catch {
    return defaultTheme;
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => readStoredTheme());

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setToken: (token, value) =>
        setTheme((currentTheme) => ({ ...currentTheme, [token]: value })),
      resetTheme: () => setTheme(defaultTheme),
      applyPreset: (presetTheme) => setTheme(presetTheme),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
