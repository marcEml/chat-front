import { View, Text, ViewStyle, StyleSheet } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { typography } from "@/constants/typography";
import React, { useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";
import Colors from "@/constants/colors";
import { useResponsive } from "@/helpers/responsive/metrix";

type RatingBadgeProps = {
  avis: number;
  rateValue: number;
  numberOnly: boolean;
  size: "sm" | "md" | "lg";
  rate: "good" | "average" | "bad";
};

const RatingBadge = ({
  rate,
  avis,
  size,
  rateValue,
  numberOnly,
}: RatingBadgeProps) => {
  const { theme } = useTheme();
  const IconComponent = iconsMapping["star"];

  const color = useMemo(() => getColor(rate, theme.colors), [rate, theme]);
  const badgeStyles = useMemo(
    () => createBadgeStyles(theme.colors),
    [theme.colors]
  );

  const textStyle = [
    size === "sm"
      ? typography.labelSmMedium
      : size === "md"
      ? typography.labelMdMedium
      : typography.labelLgMedium,
    { color },
  ];

  return (
    <View style={badgeStyles.badge}>
      <View style={badgeStyles.leftSide}>
        {IconComponent && <IconComponent color={color} size="md" />}
        <Text style={textStyle}>{rateValue}</Text>
      </View>

      {!numberOnly && <View style={badgeStyles.divider}></View>}

      {!numberOnly && (
        <View style={badgeStyles.leftSide}>
          <Text
            style={[
              size === "sm"
                ? typography.labelSmMedium
                : size === "md"
                ? typography.labelMdMedium
                : typography.labelLgMedium,
              { color: theme.colors.text.tertiary },
            ]}
          >
            {avis} Avis
          </Text>
        </View>
      )}
    </View>
  );
};

const getColor = (
  rate: string,
  theme: typeof Colors.light & typeof Colors.dark
): string => {
  switch (rate) {
    case "average":
      return theme.icon.tertiary;
    case "good":
      return theme.icon.success;
    case "bad":
      return theme.icon.critical;
    default:
      return theme.icon.tertiary;
  }
};

const createBadgeStyles = (theme: typeof Colors.light & typeof Colors.dark) => {
  return StyleSheet.create({
    badge: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: useResponsive.horizontalScale(8),
      backgroundColor: theme.background.secondary,
      borderRadius: useResponsive.moderateScale(10),
      paddingVertical: useResponsive.verticalScale(6),
      paddingHorizontal: useResponsive.horizontalScale(10),
    } as ViewStyle,

    leftSide: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      gap: useResponsive.horizontalScale(4),
    } as ViewStyle,

    divider: {
      height: "60%",
      backgroundColor: theme.border.emphasize,
      width: useResponsive.horizontalScale(1.5),
      borderRadius: useResponsive.moderateScale(10),
    } as ViewStyle,
  });
};

export default RatingBadge;
