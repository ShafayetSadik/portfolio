import { defaultTheme } from "@/content/theme";
import type { ThemePreset } from "@/lib/types";

export const presets: ThemePreset[] = [
  { name: "Midnight", theme: defaultTheme },
  {
    name: "Aurora",
    theme: {
      bg: "#030712",
      fg: "#F0F9FF",
      muted: "#4B7A8A",
      accent: "#06B6D4",
      surface: "#0A1628",
      border: "#0F2A44",
    },
  },
  {
    name: "Ember",
    theme: {
      bg: "#0C0A09",
      fg: "#FAFAF9",
      muted: "#78716C",
      accent: "#F97316",
      surface: "#1C1917",
      border: "#292524",
    },
  },
  {
    name: "Rose",
    theme: {
      bg: "#0D0609",
      fg: "#FFF1F5",
      muted: "#9D4A68",
      accent: "#F43F5E",
      surface: "#1A0C10",
      border: "#2E1520",
    },
  },
  {
    name: "Jade",
    theme: {
      bg: "#030C08",
      fg: "#F0FAF5",
      muted: "#4A7A62",
      accent: "#10B981",
      surface: "#071510",
      border: "#0E2B1E",
    },
  },
];
