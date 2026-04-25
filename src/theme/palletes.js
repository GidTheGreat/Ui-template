// theme/palettes.js
// theme/palettes.js
import { alpha } from '@mui/material/styles';

const commonAction = (base, isDark = true) => ({
  hover: alpha(base, isDark ? 0.08 : 0.04),
  selected: alpha(base, isDark ? 0.16 : 0.08),
  disabled: alpha(base, 0.3),
  disabledBackground: alpha(base, 0.12),
  focus: alpha(base, 0.2),
  active: alpha(base, 0.7),
});

export const palettes = {
  dark_blue: {
    mode: "dark",
    primary: { main: "#1E2A3A", contrastText: "#E2E8F0" },
    secondary: { main: "#3A6EA5", contrastText: "#E2E8F0" },
    background: {
      default: "#0F172A",
      paper: alpha("#1E293B", 0.85),
    },
    text: {
      primary: "#E2E8F0",
      secondary: alpha("#E2E8F0", 0.7),
      disabled: alpha("#E2E8F0", 0.5),
    },
    divider: alpha("#E2E8F0", 0.12),
    action: commonAction("#E2E8F0"),
  },

  dark_white: {
    mode: "dark",
    primary: { main: "#E5E7EB", contrastText: "#0B0F14" },
    secondary: { main: "#94A3B8", contrastText: "#0B0F14" },
    background: {
      default: "#0B0F14",
      paper: alpha("#111827", 0.85),
    },
    text: {
      primary: "#F9FAFB",
      secondary: alpha("#F9FAFB", 0.7),
      disabled: alpha("#F9FAFB", 0.5),
    },
    divider: alpha("#F9FAFB", 0.12),
    action: commonAction("#F9FAFB"),
  },

  dark_orange: {
    mode: "dark",
    primary: { main: "#F97316", contrastText: "#111111" },
    secondary: { main: "#FB923C", contrastText: "#111111" },
    background: {
      default: "#111111",
      paper: alpha("#1C1C1C", 0.85),
    },
    text: {
      primary: "#FFE4C2",
      secondary: alpha("#FFE4C2", 0.7),
      disabled: alpha("#FFE4C2", 0.5),
    },
    divider: alpha("#FFE4C2", 0.12),
    action: commonAction("#FFE4C2"),
  },

  dark_green: {
    mode: "dark",
    primary: { main: "#22C55E", contrastText: "#052e16" },
    secondary: { main: "#16A34A", contrastText: "#052e16" },
    background: {
      default: "#0B1A12",
      paper: alpha("#132A1C", 0.85),
    },
    text: {
      primary: "#DCFCE7",
      secondary: alpha("#DCFCE7", 0.7),
      disabled: alpha("#DCFCE7", 0.5),
    },
    divider: alpha("#DCFCE7", 0.12),
    action: commonAction("#DCFCE7"),
  },

  light_dark: {
    mode: "light",
    primary: { main: "#334155", contrastText: "#FFFFFF" },
    secondary: { main: "#64748B", contrastText: "#FFFFFF" },
    background: {
      default: "#F1F5F9",
      paper: alpha("#FFFFFF", 0.9),
    },
    text: {
      primary: "#0F172A",
      secondary: alpha("#0F172A", 0.7),
      disabled: alpha("#0F172A", 0.5),
    },
    divider: alpha("#0F172A", 0.12),
    action: commonAction("#0F172A", false),
  },

  light_blue: {
    mode: "light",
    primary: { main: "#3B82F6", contrastText: "#FFFFFF" },
    secondary: { main: "#60A5FA", contrastText: "#FFFFFF" },
    background: {
      default: "#EFF6FF",
      paper: alpha("#FFFFFF", 0.9),
    },
    text: {
      primary: "#0F172A",
      secondary: alpha("#0F172A", 0.7),
      disabled: alpha("#0F172A", 0.5),
    },
    divider: alpha("#0F172A", 0.12),
    action: commonAction("#0F172A", false),
  },

  purple_blue: {
    mode: "dark",
    primary: { main: "#6366F1", contrastText: "#E0E7FF" },
    secondary: { main: "#8B5CF6", contrastText: "#E0E7FF" },
    background: {
      default: "#0B1020",
      paper: alpha("#111827", 0.85),
    },
    text: {
      primary: "#E0E7FF",
      secondary: alpha("#E0E7FF", 0.7),
      disabled: alpha("#E0E7FF", 0.5),
    },
    divider: alpha("#E0E7FF", 0.12),
    action: commonAction("#E0E7FF"),
  },
};