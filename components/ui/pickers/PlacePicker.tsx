import React, { useRef, useMemo, useEffect, forwardRef } from "react";

import {
  View,
  Text,
  Easing,
  Animated,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type PlacePickerProps = {
  label?: string;
  long?: boolean;
  text?: string;
  disabled: boolean;
  leftIcon?: string;
  placeholder?: string;
  centerText?: boolean;
  errorMessage?: string;
  size: "sm" | "md" | "lg";
  onPress?: (event: GestureResponderEvent) => void;
};

const PlacePicker = forwardRef(
  (
    {
      size,
      text,
      label,
      onPress,
      leftIcon,
      disabled,
      centerText,
      placeholder,
      errorMessage,
    }: PlacePickerProps,
    ref
  ) => {
    // VARIABLES
    const { theme } = useTheme();
    const borderColorAnim = useRef(new Animated.Value(0)).current;

    // MEMO

    const IconLeftComponent = useMemo(() => iconsMapping[leftIcon || ""], [leftIcon]);

    const InputStyles = useMemo(
      () => createPlacePickerStyles(theme.colors, size),
      [theme.colors, size]
    );

    const borderColor = borderColorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.border.default, theme.colors.border.strong],
    });

    // USEEFFECT

    useEffect(() => {
      Animated.timing(borderColorAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }, [borderColorAnim]);

    return (
      <TouchableOpacity activeOpacity={1} onPressIn={onPress} style={InputStyles.container}>
        {label && (
          <Text
            style={[
              typography.labelSmRegular,
              {
                marginLeft: useResponsive.horizontalScale(10),
                color: theme.colors.text.secondary,
              },
            ]}
          >
            {label}
          </Text>
        )}

        <Animated.View
          style={[
            InputStyles.containerInput,
            { borderColor },
            errorMessage !== undefined && InputStyles.errorFocus,
          ]}
        >
          {IconLeftComponent && (
            <IconLeftComponent size={size} color={theme.colors.transparent.T400} />
          )}

          <TextInput
            value={text}
            editable={false}
            onPressIn={onPress}
            placeholder={placeholder ?? ""}
            style={[
              typography.labelMdRegular,
              { color: theme.colors.text.brand },
              centerText && { textAlign: "center" },
              InputStyles.input,
            ]}
            placeholderTextColor={theme.colors.text.disabled}
          />
        </Animated.View>

        {errorMessage && (
          <Text style={[typography.LabelSmRegular, { color: theme.colors.text.critical }]}>
            {errorMessage}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);

const createPlacePickerStyles = (
  theme: typeof Colors.light & typeof Colors.dark,
  inputSize: "sm" | "md" | "lg"
) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: useResponsive.verticalScale(6),
    },

    input: {
      flex: 1,
      color: theme.text.primary,
      height: useResponsive.verticalScale(40),
      paddingBottom: useResponsive.verticalScale(5),
    },

    errorFocus: {
      borderColor: theme.border.error,
    },

    containerInput: {
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      flexDirection: "row",
      borderColor: "transparent",
      justifyContent: "space-between",
      gap: useResponsive.horizontalScale(8),
      backgroundColor: theme.background.secondary,
      borderRadius: useResponsive.moderateScale(16),
      borderWidth: useResponsive.horizontalScale(1.5),
      paddingVertical: useResponsive.verticalScale(14),
      paddingHorizontal: useResponsive.horizontalScale(16),
      height: inputSize == "lg" ? useResponsive.verticalScale(52) : useResponsive.verticalScale(44),
    },
  });

export default PlacePicker;
