import { useResponsive } from "@/helpers/responsive/metrix";

export const iconSizeModel: any = {
  sm: {
    height: useResponsive.verticalScale(16),
    width: useResponsive.horizontalScale(16),
  },
  md: {
    height: useResponsive.verticalScale(20),
    width: useResponsive.horizontalScale(20),
  },
  lg: {
    height: useResponsive.verticalScale(24),
    width: useResponsive.horizontalScale(24),
  },
  xl: {
    height: useResponsive.verticalScale(28),
    width: useResponsive.horizontalScale(28),
  },
};

