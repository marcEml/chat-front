import React, { useMemo } from "react";
import Colors from "@/constants/colors/index";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { Text, View, Image, ViewStyle, StyleSheet, GestureResponderEvent } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

type AvatarProps = {
  url?: string;
  initial?: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  type: "photo" | "neutral" | "white" | "fallback";
  onPress?: (event: GestureResponderEvent) => void;
};

const sizeStyles = {
  sm: {
    height: useResponsive.verticalScale(32),
    width: useResponsive.horizontalScale(32),
    borderRadius: useResponsive.moderateScale(8),
  },
  md: {
    height: useResponsive.verticalScale(40),
    width: useResponsive.horizontalScale(40),
    borderRadius: useResponsive.moderateScale(10),
  },
  lg: {
    height: useResponsive.verticalScale(54),
    width: useResponsive.horizontalScale(54),
    borderRadius: useResponsive.moderateScale(14),
  },
  xl: {
    height: useResponsive.verticalScale(76),
    width: useResponsive.horizontalScale(76),
    borderRadius: useResponsive.moderateScale(18),
  },
  xxl: {
    height: useResponsive.verticalScale(150),
    width: useResponsive.horizontalScale(150),
    borderRadius: useResponsive.moderateScale(24),
  },
};

const Avatar = ({ initial, size, type, url, onPress }: AvatarProps) => {
  const { theme } = useTheme();
  const UserIconComponent = iconsMapping["user"];
  const imageSource = url ? { uri: url } : require("@/assets/images/avatar/avatar.jpg");

  const styles = useMemo(() => createAvatarStyles(theme.colors), [theme.colors]);

  const avatarStyles: ViewStyle = {
    ...styles.avatar,
    ...sizeStyles[size],
    ...(type === "photo" && styles.avatarPhoto),
    ...(type === "neutral" && styles.avatarNeutral),
    ...(type === "white" && styles.avatarWhite),
    ...(type === "fallback" && styles.avatarFallback),
  };

  const textStyle = [
    size === "sm"
      ? typography.labelSmMedium
      : size === "md"
        ? typography.labelMdMedium
        : size === "lg"
          ? typography.labelLgMedium
          : typography.h2,
    { color: type === "neutral" ? theme.colors.text.secondary : undefined },
  ];

  return (
    <View style={avatarStyles} onTouchEnd={onPress}>
      {type === "photo" ? (
        <Image
          source={imageSource}
          style={[sizeStyles[size], { backgroundColor: theme.colors.background.quaternary }]}
        />
      ) : type === "fallback" ? (
        <UserIconComponent
          color={theme.colors.icon.secondary}
          size={size === "xxl" ? "xl" : size}
        />
      ) : (
        <Text style={textStyle}>{initial}</Text>
      )}
    </View>
  );
};

const createAvatarStyles = (theme: typeof Colors.light & typeof Colors.dark) => {
  return StyleSheet.create({
    avatar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    } as ViewStyle,

    photo: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },

    avatarPhoto: {
      resizeMode: "cover",
    },

    avatarNeutral: {
      backgroundColor: theme.background.quaternary,
      color: theme.text.secondary,
    },

    avatarWhite: {
      backgroundColor: Colors.primitives.neutral[0],
      color: Colors.primitives.neutral[950],
    },

    avatarFallback: {
      backgroundColor: theme.background.quaternary,
    },
  });
};

export default Avatar;
