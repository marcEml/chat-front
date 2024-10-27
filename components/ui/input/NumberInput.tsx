import React, { useState, useMemo, useEffect } from "react";
import { View, Text, ViewStyle, StyleSheet } from "react-native";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import IconButtonComponent from "../buttons/IconButton";
import { useResponsive } from "@/helpers/responsive/metrix";

type InputNumberProps = {
  max: number;
  min: number;
  step?: number;
  suffix?: string;
  initial?: number;
  transparent?: boolean;
  size: "sm" | "md" | "lg";
  iconsSize?: "sm" | "md" | "lg";
  onChange: (value: number) => void;
};

const InputNumber = ({
  max,
  min,
  size,
  onChange,
  step = 1,
  suffix = "",
  initial = min,
  iconsSize = "md",
  transparent = false,
}: InputNumberProps) => {
  const { theme } = useTheme();
  const InputStyles = useMemo(() => createInputNumberStyles(theme.colors), [theme.colors]);
  const [value, setValue] = useState(initial);

  const incrementValue = () => setValue((prev) => (prev < max ? prev + step : prev));
  const decrementValue = () => setValue((prev) => (prev > min ? prev - step : prev));

  const isDecrementDisabled = value === min;
  const isIncrementDisabled = value === max;

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <View
      style={[
        InputStyles.input,
        transparent ? {} : { backgroundColor: theme.colors.transparent.T50 },
      ]}
    >
      <IconButtonComponent
        size={iconsSize}
        disabled={isDecrementDisabled}
        iconColor={isDecrementDisabled ? theme.colors.transparent.T100 : theme.colors.text.primary}
        priority="secondary"
        icon="minus"
        onPress={decrementValue}
      />
      <Text
        style={[
          size === "sm"
            ? typography.h4
            : size === "md"
              ? typography.h3
              : typography.h1,
          { color: theme.colors.text.primary },
        ]}
      >
        {`${value}${suffix}`}
      </Text>
      <IconButtonComponent
        size={iconsSize}
        disabled={isIncrementDisabled}
        iconColor={isIncrementDisabled ? theme.colors.transparent.T100 : theme.colors.text.primary}
        priority="secondary"
        icon="plus"
        onPress={incrementValue}
      />
    </View>
  );
};

const createInputNumberStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    input: {
      width: "100%",
      display: "flex",
      borderRadius: 18,
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: useResponsive.verticalScale(12),
      paddingHorizontal: useResponsive.horizontalScale(12),
    } as ViewStyle,
  });

export default InputNumber;
