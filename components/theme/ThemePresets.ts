import { defaultTheme } from "@/content/theme";
import type { ThemePreset } from "@/lib/types";

export const presets: ThemePreset[] = [
  { name: "Midnight Gold", theme: defaultTheme },
  {
    name: "Paper White",
    theme: {
      bg: "#FAFAF7",
      fg: "#1A1A1A",
      muted: "#6B6B66",
      accent: "#C2410C",
      surface: "#F2F0EB",
      border: "#E0DDD5",
    },
  },
  {
    name: "Forest Ink",
    theme: {
      bg: "#0F1512",
      fg: "#E8ECE9",
      muted: "#7A8783",
      accent: "#7FB069",
      surface: "#182320",
      border: "#2A3632",
    },
  },
  {
    name: "Royal Navy",
    theme: {
      bg: "#0A1128",
      fg: "#EDEFF7",
      muted: "#7882A0",
      accent: "#F4A261",
      surface: "#141D3A",
      border: "#26304F",
    },
  },
  {
    name: "Rose Dust",
    theme: {
      bg: "#1A0F14",
      fg: "#F5E6E8",
      muted: "#9A7F85",
      accent: "#E76F51",
      surface: "#241620",
      border: "#3A2530",
    },
  },
];
