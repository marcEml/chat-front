import { useResponsive } from "@/helpers/responsive/metrix";
import { TextStyle } from "react-native";

interface Typography {
  [key: string]: TextStyle;
}

const Lausanne200 = "TWKLausanne-200";
const Lausanne300 = "TWKLausanne-300";
const Lausanne400 = "TWKLausanne-400";
const Lausanne500 = "TWKLausanne-500";
const Lausanne600 = "TWKLausanne-600";
const Lausanne700 = "TWKLausanne-700";
const Lausanne700Italic = "TWKLausanne-700-italic";

export const typography: Typography = {
  // Headings
  appTitle: {
    fontSize: 40,
    paddingTop: 12,
    lineHeight: 32,
    letterSpacing: -0.5,
    fontFamily: Lausanne700,
  },

  appTitleItalic: {
    fontSize: 40,
    lineHeight: 32,
    fontFamily: Lausanne700Italic,
  },

  h1: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(28),
    lineHeight: useResponsive.verticalScale(32),
  },

  h1Light: {
    fontFamily: Lausanne400,
    fontSize: useResponsive.moderateScale(28),
    lineHeight: useResponsive.verticalScale(32),
  },

  h2: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(24),
    lineHeight: useResponsive.verticalScale(28),
  },

  h3: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(20),
    lineHeight: useResponsive.verticalScale(26),
  },

  h4: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(18),
    lineHeight: useResponsive.verticalScale(20),
  },

  // Label - Large
  labelLgLight: {
    fontFamily: Lausanne300,
    fontSize: useResponsive.moderateScale(16),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelLgRegular: {
    fontFamily: Lausanne400,
    fontSize: useResponsive.moderateScale(16),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelLgMedium: {
    fontFamily: Lausanne500,
    fontSize: useResponsive.moderateScale(16),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelLgBold: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(16),
    lineHeight: useResponsive.verticalScale(20),
  },

  // Label - Medium
  labelMdLight: {
    fontFamily: Lausanne300,
    fontSize: useResponsive.moderateScale(14),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelMdRegular: {
    fontFamily: Lausanne400,
    fontSize: useResponsive.moderateScale(14),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelMdMedium: {
    fontFamily: Lausanne500,
    fontSize: useResponsive.moderateScale(14),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelMdBold: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(14),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelMdLink: {
    fontFamily: Lausanne400,
    textDecorationLine: "underline",
    fontSize: useResponsive.moderateScale(14),
    lineHeight: useResponsive.verticalScale(28),
  },

  // Label - Small
  labelSmLight: {
    fontFamily: Lausanne300,
    fontSize: useResponsive.moderateScale(12),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelSmRegular: {
    fontFamily: Lausanne400,
    fontSize: useResponsive.moderateScale(12),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelSmMedium: {
    fontFamily: Lausanne500,
    fontSize: useResponsive.moderateScale(12),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelSmBold: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(12),
    lineHeight: useResponsive.verticalScale(20),
  },

  labelSmLink: {
    fontFamily: Lausanne400,
    textDecorationLine: "underline",
    fontSize: useResponsive.moderateScale(12),
    lineHeight: useResponsive.verticalScale(24),
  },

  // Label - ExtraSmall
  labelXsLight: {
    fontFamily: Lausanne300,
    fontSize: useResponsive.moderateScale(10),
    lineHeight: useResponsive.verticalScale(14),
  },

  labelXsRegular: {
    fontFamily: Lausanne400,
    fontSize: useResponsive.moderateScale(10),
    lineHeight: useResponsive.verticalScale(14),
  },

  labelXsMedium: {
    fontFamily: Lausanne500,
    fontSize: useResponsive.moderateScale(10),
    lineHeight: useResponsive.verticalScale(14),
  },

  labelXsBold: {
    fontFamily: Lausanne600,
    fontSize: useResponsive.moderateScale(10),
    lineHeight: useResponsive.verticalScale(14),
  },
};
