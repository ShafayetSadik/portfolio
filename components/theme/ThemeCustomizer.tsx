"use client";

import { useState } from "react";
import { Copy, Palette, RefreshCcw, X } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import { presets } from "@/components/theme/ThemePresets";
import { useTheme } from "@/components/theme/ThemeProvider";
import type { ThemeToken } from "@/lib/types";
import { themeTokens } from "@/lib/types";
import { cn, formatThemeSnippet } from "@/lib/utils";

const tokenLabels: Record<ThemeToken, string> = {
  bg: "Background",
  fg: "Foreground",
  muted: "Muted",
  accent: "Accent",
  surface: "Surface",
  border: "Border",
};

export function ThemeCustomizer() {
  const { theme, setToken, resetTheme, applyPreset } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeToken, setActiveToken] = useState<ThemeToken>("accent");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatThemeSnippet(theme));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close theme customizer" : "Open theme customizer"}
        className="inline-flex h-10 w-10 items-center justify-center border border-border bg-bg text-muted transition-colors duration-200 hover:text-fg"
      >
        {open ? <X className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
      </button>

      <aside
        className={cn(
          "pointer-events-none absolute bottom-14 right-0 w-[min(20rem,calc(100vw-1.5rem))] translate-y-3 border border-border bg-bg p-5 opacity-0 transition-all duration-200 motion-reduce:transition-none",
          "max-sm:fixed max-sm:inset-x-3 max-sm:bottom-16 max-sm:w-auto",
          open && "pointer-events-auto translate-y-0 opacity-100",
        )}
      >
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Theme
          </p>
          <span className="font-mono text-xs text-muted">
            {copied ? "Copied" : "Live"}
          </span>
        </div>

        <div className="space-y-1">
          {themeTokens.map((token) => (
            <div key={token} className="border border-border">
              <button
                type="button"
                onClick={() => setActiveToken(token)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span>
                  <span className="block text-sm text-fg">
                    {tokenLabels[token]}
                  </span>
                  <span className="block font-mono text-[10px] text-muted">
                    {theme[token]}
                  </span>
                </span>
                <span
                  className="h-6 w-6 border border-border"
                  style={{ backgroundColor: theme[token] }}
                />
              </button>
              {activeToken === token ? (
                <div className="border-t border-border px-4 py-4">
                  <HexColorPicker
                    color={theme[token]}
                    onChange={(value) => setToken(token, value)}
                    className="!w-full"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Presets
          </p>
          <div className="space-y-1">
            {presets.map((preset) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => applyPreset(preset.theme)}
                className="flex w-full items-center justify-between border border-border px-4 py-3 text-sm text-fg transition-colors duration-200 hover:bg-surface"
              >
                <span>{preset.name}</span>
                <span className="flex gap-1">
                  {themeTokens.slice(0, 4).map((token) => (
                    <span
                      key={`${preset.name}-${token}`}
                      className="h-3 w-3 border border-border"
                      style={{ backgroundColor: preset.theme[token] }}
                    />
                  ))}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={resetTheme}
            className="inline-flex items-center justify-center border border-border px-4 py-2.5 text-sm text-muted transition-colors duration-200 hover:text-fg"
          >
            <RefreshCcw className="mr-2 h-3.5 w-3.5" />
            Reset
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center bg-fg px-4 py-2.5 text-sm text-bg transition-opacity duration-200 hover:opacity-70"
          >
            <Copy className="mr-2 h-3.5 w-3.5" />
            Copy
          </button>
        </div>
      </aside>
    </div>
  );
}
