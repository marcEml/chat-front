import React, { useMemo, useState, forwardRef, useImperativeHandle } from "react";

import {
  View,
  Text,
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import RNPickerSelect from "react-native-picker-select";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { CarBrand } from "@/constants/variables/carList";
import { useResponsive } from "@/helpers/responsive/metrix";

type InputTextProps = {
  label?: string;
  disabled: boolean;
  size: "md" | "lg";
  leftIcon?: string;
  RightIcon?: string;
  placeholder?: string;
  errorMessage?: string;
  list: Array<{ label: string; value: string }>;
  onPress?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string | CarBrand) => void;
};

const InputSelect = forwardRef(
  (
    {
      size,
      list,
      label,
      onPress,
      disabled,
      RightIcon,
      placeholder,
      errorMessage,
      onChangeText,
    }: InputTextProps,
    ref
  ) => {
    const { theme } = useTheme();
    const IconRightComponent = useMemo(() => iconsMapping[RightIcon || ""], [RightIcon]);

    const InputStyles = useMemo(
      () => createInputTextStyles(theme.colors, size),
      [theme.colors, size]
    );

    const [text, setText] = useState("");

    const handleTextChange = (newText: string) => {
      setText(newText);
      if (onChangeText) {
        onChangeText!(newText);
      }

    };

    useImperativeHandle(ref, () => ({
      getValue: () => text,
      setValue: (newValue: string) => setText(newValue),
    }));

    return (
      <View style={InputStyles.container}>
        {label && (
          <Text
            style={[
              typography.labelSmRegular,
              {
                color: disabled ? theme.colors.text.disabled : theme.colors.text.secondary,
                marginLeft: useResponsive.horizontalScale(10),
              },
            ]}
          >
            {label}
          </Text>
        )}

        <Animated.View
          style={[
            InputStyles.containerInput,
            { borderColor: theme.colors.border.default, borderWidth: useResponsive.horizontalScale(1.5) },
            errorMessage !== undefined && InputStyles.errorFocus,
          ]}
        >
          <View style={[{ flex: 1 }]}>
            <RNPickerSelect
              value={text}

              darkTheme={theme.dark}

              style={{
                inputIOSContainer: {
                  justifyContent: "center",
                  height: useResponsive.verticalScale(40),
                },
                inputIOS: {
                  color: theme.colors.text.primary,
                },
                placeholder: {
                  color: theme.colors.transparent.T200,
                },
              }}
              textInputProps={{
                placeholderTextColor: "red",
              }}
              placeholder={{
                label: placeholder,
                value: null,
              }}
              onValueChange={handleTextChange}
              items={list}
            />
          </View>

          {IconRightComponent && Platform.OS === "ios" && (
            <TouchableOpacity disabled={disabled} activeOpacity={0.6} onPress={onPress}>
              <IconRightComponent
                size={size}
                color={disabled ? theme.colors.transparent.T50 : theme.colors.transparent.T400}
              />
            </TouchableOpacity>
          )}
        </Animated.View>

        {errorMessage && (
          <Text style={[typography.LabelSmRegular, { color: theme.colors.text.critical }]}>
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
);

const createInputTextStyles = (
  theme: typeof Colors.light & typeof Colors.dark,
  inputSize: "md" | "lg"
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
      width: "100%",
      borderRadius: 16,
      alignItems: "center",
      flexDirection: "row",
      borderColor: "transparent",
      justifyContent: "space-between",
      height: inputSize == "lg"
      ? useResponsive.verticalScale(52)
      : useResponsive.verticalScale(44),
      backgroundColor: theme.background.secondary,
      paddingHorizontal: Platform.OS === "ios"
      ? useResponsive.horizontalScale(14)
      : 0,
      gap: useResponsive.horizontalScale(8),
      borderWidth: useResponsive.horizontalScale(1.5),
    },
  });

export default InputSelect;
