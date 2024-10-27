import { ViewStyle, StyleSheet, View, Text } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { typography } from "@/constants/typography";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { useResponsive } from "@/helpers/responsive/metrix";

type BookingStatusProps = {
  label: string;
  iconName: string;
  size: "sm" | "md";
  status: "confirmed" | "pending" | "rejected" | "neutral" | "black";
};

const BookingStatus = (props: BookingStatusProps) => {
  const { status, label, iconName, size } = props;
  const Icon = iconsMapping[iconName];
  const { theme } = useTheme();
  const style = createBookingStatusStyle();

  return (
    <View style={style.booking}>
      {Icon && (
        <Icon
          size={size}
          color={
            status === "confirmed"
              ? theme.colors.icon.success
              : status === "pending"
                ? theme.colors.icon.info
                : status === "rejected"
                  ? theme.colors.icon.critical
                  : status === "black"
                    ? theme.colors.icon.primary
                    : theme.colors.icon.tertiary
          }
        />
      )}
      <Text
        style={[
          size === "sm" ? typography.labelSmMedium : typography.labelSmMedium,
          {
            color:
              status === "confirmed"
                ? theme.colors.text.success
                : status === "pending"
                  ? theme.colors.text.info
                  : status === "rejected"
                    ? theme.colors.text.critical
                    : status === "black"
                      ? theme.colors.text.primary
                      : theme.colors.text.tertiary,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const createBookingStatusStyle = () => {
  return StyleSheet.create({
    booking: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: useResponsive.horizontalScale(8),
    } as ViewStyle,
  });
};

export default BookingStatus;
