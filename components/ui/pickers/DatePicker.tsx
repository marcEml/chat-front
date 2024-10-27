import React, { useRef, useMemo, useEffect, forwardRef, useImperativeHandle } from "react";

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

type DatePickerProps = {
  label?: string;
  color?: string;
  dateText?: string;
  disabled: boolean;
  size: "md" | "lg";
  leftIcon?: string;
  rightIcon?: string;
  centerText?: boolean;
  placeholder?: string;
  forSmallSize?: boolean;
  errorMessage?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomDatePicker = forwardRef(
  (
    {
      size,
      label,
      color,
      onPress,
      disabled,
      dateText,
      rightIcon,
      leftIcon,
      centerText,
      placeholder,
      forSmallSize,
      errorMessage,
    }: DatePickerProps,
    ref
  ) => {
    const { theme } = useTheme();
    const [date, setDateText] = React.useState(dateText);
    const IconRightComponent = useMemo(() => iconsMapping[rightIcon || ""], [rightIcon]);
    const IconLeftComponent = useMemo(() => iconsMapping[leftIcon || ""], [leftIcon]);

    const InputStyles = useMemo(
      () => createDatePickerStyles(theme.colors, size, forSmallSize ?? false),
      [theme.colors, size, forSmallSize]
    );

    const borderColorAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(borderColorAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }, [borderColorAnim]);

    const borderColor = borderColorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.border.default, theme.colors.border.strong],
    });

    useImperativeHandle(ref, () => ({
      getValue: () => dateText,
      setValue: (newValue: string) => setDateText(newValue),
    }));

    return (
      <>
        <View style={InputStyles.container}>
          {label && (
            <Text
              style={[
                typography.labelSmRegular,
                {
                  marginLeft: useResponsive.verticalScale(10),
                  color: disabled ? theme.colors.text.disabled : theme.colors.text.secondary,
                },
              ]}
            >
              {label}
            </Text>
          )}

          <TouchableOpacity disabled={disabled} activeOpacity={0.6} onPress={onPress}>
            <Animated.View
              style={[
                InputStyles.containerInput,
                { borderColor },
                errorMessage !== undefined && InputStyles.errorFocus,
              ]}
            >
              {IconLeftComponent && (
                <IconLeftComponent
                  size={size}
                  color={disabled ? theme.colors.transparent.T50 : theme.colors.transparent.T400}
                />
              )}

              <TextInput
                value={date}
                editable={false}
                onPressIn={onPress}
                placeholder={placeholder ?? ""}
                style={[
                  typography.labelMdRegular,
                  {
                    flex: 1,
                    color: color ?? theme.colors.text.primary,
                    paddingBottom: useResponsive.verticalScale(6),
                    height:
                      size == "lg"
                        ? useResponsive.verticalScale(52)
                        : useResponsive.verticalScale(44),
                  },
                  centerText && { textAlign: "center" },
                ]}
                placeholderTextColor={theme.colors.text.disabled}
              />

              {IconRightComponent && (
                <View>
                  <IconRightComponent
                    size={"sm"}
                    color={disabled ? theme.colors.transparent.T50 : theme.colors.transparent.T400}
                  />
                </View>
              )}
            </Animated.View>
          </TouchableOpacity>

          {errorMessage && (
            <Text style={[typography.LabelSmRegular, { color: theme.colors.text.critical }]}>
              {errorMessage}
            </Text>
          )}
        </View>
      </>
    );
  }
);

const createDatePickerStyles = (
  theme: typeof Colors.light & typeof Colors.dark,
  inputSize: "md" | "lg",
  forSmallSize: boolean
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
      lineHeight: 0,
      height: useResponsive.verticalScale(20),
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
      paddingHorizontal: !forSmallSize ? useResponsive.horizontalScale(16) : 0,
      height: inputSize == "lg" ? useResponsive.verticalScale(52) : useResponsive.verticalScale(44),
    },
  });

export default CustomDatePicker;
