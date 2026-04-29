import { defaultTheme } from "@/content/theme";
import type { ThemePreset } from "@/lib/types";

export const presets: ThemePreset[] = [
  { name: "Broadsheet", theme: defaultTheme },
  {
    name: "Night Edition",
    theme: {
      bg: "#0A0A08",
      fg: "#F5F3EE",
      muted: "#8A8880",
      accent: "#E8B84B",
      surface: "#141412",
      border: "#F5F3EE",
    },
  },
  {
    name: "Telegraph",
    theme: {
      bg: "#F8F3E8",
      fg: "#1A2040",
      muted: "#6A7090",
      accent: "#C8001A",
      surface: "#F0EAD8",
      border: "#1A2040",
    },
  },
  {
    name: "Blueprint",
    theme: {
      bg: "#FFFFFF",
      fg: "#0A2540",
      muted: "#5A7090",
      accent: "#0066CC",
      surface: "#F5F8FF",
      border: "#0A2540",
    },
  },
  {
    name: "Dispatch",
    theme: {
      bg: "#F6F4EF",
      fg: "#1A2818",
      muted: "#5A6858",
      accent: "#2D5C2A",
      surface: "#EDE8DC",
      border: "#1A2818",
    },
  },
];
