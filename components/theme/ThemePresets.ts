import { defaultTheme } from "@/content/theme";
import type { ThemePreset } from "@/lib/types";

export const presets: ThemePreset[] = [
  { name: "Clean", theme: defaultTheme },
  {
    name: "Warm",
    theme: {
      bg: "#FDFAF5",
      fg: "#1C1810",
      muted: "#A89880",
      accent: "#1C1810",
      surface: "#F7F3EC",
      border: "#E8E0D0",
    },
  },
  {
    name: "Slate",
    theme: {
      bg: "#F8FAFC",
      fg: "#0F172A",
      muted: "#94A3B8",
      accent: "#0F172A",
      surface: "#F1F5F9",
      border: "#CBD5E1",
    },
  },
  {
    name: "Night",
    theme: {
      bg: "#0A0A0A",
      fg: "#FAFAFA",
      muted: "#525252",
      accent: "#FAFAFA",
      surface: "#141414",
      border: "#262626",
    },
  },
  {
    name: "Sage",
    theme: {
      bg: "#F6F7F4",
      fg: "#1A1F18",
      muted: "#6B7668",
      accent: "#1A1F18",
      surface: "#EEF0EB",
      border: "#D4D9D0",
    },
  },
];
