import { defaultTheme } from "@/content/theme";
import type { ThemePreset } from "@/lib/types";

export const presets: ThemePreset[] = [
  { name: "Parchment", theme: defaultTheme },
  {
    name: "Sepia Film",
    theme: {
      bg: "#1A0F05",
      fg: "#F0E4CC",
      muted: "#7A6552",
      accent: "#C8902A",
      surface: "#241508",
      border: "#3D2810",
    },
  },
  {
    name: "Antique Ivory",
    theme: {
      bg: "#FAFAF0",
      fg: "#1A1208",
      muted: "#7A6A58",
      accent: "#4A3728",
      surface: "#F2EFE0",
      border: "#D8CEB8",
    },
  },
  {
    name: "Oxblood",
    theme: {
      bg: "#12080A",
      fg: "#F0E8E0",
      muted: "#8A7068",
      accent: "#C8453A",
      surface: "#1C1012",
      border: "#3A2028",
    },
  },
  {
    name: "Forest Journal",
    theme: {
      bg: "#0E1208",
      fg: "#E8ECE2",
      muted: "#7A8270",
      accent: "#A89A4A",
      surface: "#161C10",
      border: "#2A3222",
    },
  },
];
