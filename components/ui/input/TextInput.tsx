import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

import {
  View,
  Text,
  Easing,
  Animated,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Platform,
} from "react-native";

import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import OTPTextInput from "react-native-otp-textinput";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type InputTextProps = {
  label?: string;
  long?: boolean;
  prefix?: string;
  leftIcon?: string;
  bigText?: boolean;
  disabled?: boolean;
  password?: boolean;
  RightIcon?: string;
  pickedText?: string;
  placeholder?: string;
  centerText?: boolean;
  errorMessage?: string;
  size: "sm" | "md" | "lg";
  onChangeText?: (text: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  typeKeyboard?: "default" | "email-address" | "number-pad";
  inputType?: "default" | "otp" | "picker" | "phone" | "international-phone";
};

const InputText = forwardRef(
  (
    {
      size,
      long,
      label,
      prefix,
      onPress,
      leftIcon,
      password,
      RightIcon,
      pickedText,
      placeholder,
      errorMessage,
      onChangeText,
      bigText = false,
      disabled = false,
      inputType = "default",
      typeKeyboard = "default",
    }: InputTextProps,
    ref
  ) => {
    const { theme } = useTheme();
    const otpInput = useRef(null);
    const [text, setText] = useState("");
    const [focus, setFocus] = useState(false);
    const borderColorAnim = useRef(new Animated.Value(0)).current;

    const IconLeftComponent = useMemo(() => iconsMapping[leftIcon || ""], [leftIcon]);
    const IconRightComponent = useMemo(() => iconsMapping[RightIcon || ""], [RightIcon]);

    const InputStyles = useMemo(
      () =>
        createInputTextStyles({
          long,
          inputSize: size,
          bigText: bigText,
          disabled: disabled,
          theme: theme.colors,
        }),
      [theme.colors, size, long]
    );

    const handleTextChange = (newText: string) => {
      setText(newText);
      onChangeText?.(newText);
    };

    const handleOTPChange = (newOTP: string) => {
      setText(newOTP);
      onChangeText?.(newOTP);
    };

    useImperativeHandle(ref, () => ({
      getValue: () => text,
      setValue: (newValue: string) => {
        setText(newValue);
      },
      getPhoneNumber: () => inputValue.replace(/\s+/g, ""),
      setPhoneNumber: (phoneNumber: string) => {
        setInputValue(phoneNumber);
        setText(phoneNumber);
      },
    }));

    const borderColor = borderColorAnim.interpolate({
      inputRange: [0, 1],
      outputRange:
        inputType === "picker"
          ? ["transparent", "transparent"]
          : [theme.dark ? "#111" : "#fff", theme.colors.border.emphasize],
    });

    useEffect(() => {
      Animated.timing(borderColorAnim, {
        toValue: focus ? 1 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }, [focus, borderColorAnim]);

    // const inputManager = usePhoneNumberInput({
    //   darkMode: true,
    //   defaultCountry: "CI",
    // });

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [inputValue, setInputValue] = useState("");

    function handleInputValue(phoneNumber: any) {
      setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: any) {
      setSelectedCountry(country);
    }

    const handleDone = () => {
      // Dismiss the keyboard
      Keyboard.dismiss();
    };

    return (
      <View style={InputStyles.container}>
        {label && (
          <Text
            style={[
              typography.labelSmRegular,
              {
                color: disabled ? theme.colors.text.disabled : theme.colors.text.primary,
                marginLeft: useResponsive.horizontalScale(10),
              },
            ]}
          >
            {label}
          </Text>
        )}

        {inputType !== "phone" && (
          <Animated.View
            style={[
              { borderColor },
              inputType !== "otp" && InputStyles.containerInput,
              errorMessage ? InputStyles.errorFocus : null,
            ]}
          >
            {IconLeftComponent && (
              <View
                style={{
                  paddingTop: long ? 0 : useResponsive.verticalScale(6),
                }}
              >
                <IconLeftComponent
                  size={size}
                  color={disabled ? theme.colors.transparent.T50 : theme.colors.transparent.T400}
                />
              </View>
            )}

            {prefix && (
              <Text
                style={[
                  typography.labelMdRegular,
                  {
                    color: theme.colors.text.primary,
                    marginTop: Platform.OS == "ios" ? 5 : 5.5,
                  },
                ]}
              >
                {prefix}
              </Text>
            )}

            {inputType === "default" && (
              <TextInput
                value={text}
                autoCorrect={false}
                editable={!disabled}
                autoCapitalize="none"
                style={InputStyles.input}
                keyboardType={typeKeyboard}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={handleTextChange}
                placeholder={placeholder ?? ""}
                secureTextEntry={password ?? false}
                placeholderTextColor={theme.colors.text.disabled}
                // for multines
                multiline={bigText}
                blurOnSubmit={false}
                textAlignVertical={bigText ? "top" : "auto"}
                // down
                returnKeyType="done"
                onSubmitEditing={handleDone}
              />
            )}

            {inputType === "otp" && (
              <OTPTextInput
                autoFocus
                inputCount={6}
                ref={otpInput}
                keyboardType="number-pad"
                handleTextChange={handleOTPChange}
                textInputStyle={InputStyles.otpStyle}
                tintColor={theme.colors.brand.primary}
                containerStyle={{ height: useResponsive.verticalScale(60) }}
              />
            )}

            {inputType === "picker" &&
              (Platform.OS == "ios" ? (
                <TextInput
                  editable={false}
                  value={pickedText}
                  onPressIn={onPress}
                  style={InputStyles.input}
                  placeholder={placeholder ?? ""}
                  placeholderTextColor={theme.colors.text.disabled}
                />
              ) : (
                <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
                  <TextInput
                    editable={false}
                    value={pickedText}
                    // onPressIn={onPress}
                    style={InputStyles.input}
                    placeholder={placeholder ?? ""}
                    placeholderTextColor={theme.colors.text.disabled}
                  />
                </TouchableOpacity>
              ))}

            {IconRightComponent && (
              <TouchableOpacity disabled={disabled} activeOpacity={0.6} onPress={onPress}>
                <IconRightComponent
                  size={size}
                  color={disabled ? theme.colors.transparent.T50 : theme.colors.transparent.T400}
                />
              </TouchableOpacity>
            )}
          </Animated.View>
        )}

        {errorMessage && (
          <Text style={[typography.LabelSmRegular, { color: theme.colors.text.critical }]}>
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
);

const Lausanne400 = "TWKLausanne-400";

const createInputTextStyles = ({
  long,
  theme,
  bigText,
  disabled,
}: {
  long?: boolean;
  bigText?: boolean;
  disabled: boolean;
  inputSize: "sm" | "md" | "lg";
  theme: typeof Colors.light & typeof Colors.dark;
}) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: useResponsive.verticalScale(8),
    },

    input: {
      flex: 1,
      ...typography.labelMdRegular,
      color: disabled ? theme.text.disabled : theme.text.primary,
    },

    errorFocus: {
      borderColor: theme.border.error,
    },

    otpStyle: {
      borderRadius: 11,
      color: theme.text.primary,
      height: useResponsive.verticalScale(48),
      width: useResponsive.horizontalScale(47),
      fontSize: useResponsive.moderateScale(17),
      borderWidth: useResponsive.horizontalScale(2),
      borderBottomWidth: useResponsive.horizontalScale(4.5),
    },

    containerInput: {
      width: "100%",
      display: "flex",
      borderRadius: 16,
      flexDirection: "row",
      // alignItems: "center",
      height: bigText ? 100 : "auto",
      justifyContent: "space-between",
      gap: useResponsive.horizontalScale(6),
      backgroundColor: theme.background.primary,
      paddingBottom: useResponsive.verticalScale(12),
      borderWidth: useResponsive.horizontalScale(1.5),
      paddingHorizontal: useResponsive.horizontalScale(16),
      paddingTop: long ? 0 : useResponsive.verticalScale(8),
    },
  });

export default InputText;
