import { primitives } from "./primitives";

export const lightColors = {
  background: {
    primary: primitives.neutral[50],
    secondary: primitives.neutral[0],
    tertiary: primitives.neutral[100],
    quaternary: primitives.neutral[200],
  },

  text: {
    primary: primitives.neutral[950],
    secondary: primitives.neutral[600],
    tertiary: primitives.neutral[500],
    quaternary: primitives.neutral[400],
    disabled: primitives.neutral[300],
    success: primitives.green[600],
    critical: primitives.red[500],
    warning: primitives.yellow[500],
    info: primitives.blue[700],
    brand: primitives.brand[600],
  },

  border: {
    default: primitives.neutral[100],
    error: primitives.red[400],
    emphasize: primitives.neutral[200],
    strong: primitives.neutral[950],
  },

  icon: {
    primary: primitives.neutral[950],
    secondary: primitives.neutral[600],
    tertiary: primitives.neutral[400],
    quaternary: primitives.neutral[300],
    disabled: primitives.neutral[100],
    success: primitives.green[600],
    critical: primitives.red[500],
    warning: primitives.yellow[500],
    info: primitives.blue[700],
    brand: primitives.brand[500],
  },

  brand: {
    primary: primitives.brand[500],
  },

  transparent: {
    T50: "rgba(15, 15, 15, 0.05)",
    T100: "rgba(15, 15, 15, 0.10)",
    T150: "rgba(15, 15, 15, 0.15)",
    T200: "rgba(15, 15, 15, 0.20)",
    T250: "rgba(15, 15, 15, 0.25)",
    T300: "rgba(15, 15, 15, 0.30)",
    T350: "rgba(15, 15, 15, 0.35)",
    T400: "rgba(15, 15, 15, 0.40)",
    T450: "rgba(15, 15, 15, 0.45)",
    T500: "rgba(15, 15, 15, 0.50)",
    T550: "rgba(15, 15, 15, 0.55)",
    T600: "rgba(15, 15, 15, 0.60)",
    T650: "rgba(15, 15, 15, 0.65)",
    T700: "rgba(15, 15, 15, 0.70)",
    T750: "rgba(15, 15, 15, 0.75)",
    T800: "rgba(15, 15, 15, 0.80)",
    T850: "rgba(15, 15, 15, 0.85)",
    T900: "rgba(15, 15, 15, 0.90)",
    T950: "rgba(15, 15, 15, 0.95)",
  },
};
