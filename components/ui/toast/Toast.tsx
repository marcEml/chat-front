import Colors from "@/constants/colors/index";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { Text, Easing, Animated, ViewStyle, StyleSheet, View } from "react-native";

type ToastProps = {
  message: string;
  duration?: number;
  showIcon: boolean;
  onDismiss?: () => void;
  type: "default" | "success" | "critical";
};

const ToastComponent = (props: ToastProps) => {
  const { type, message, showIcon, duration = 3000, onDismiss } = props;

  // VARIABLES

  const { theme } = useTheme();
  const ToastStyles = createToastStyles();
  const ToastDefaultIcon = iconsMapping["toastDefault"];
  const ToastSuccessIcon = iconsMapping["toastSuccess"];
  const ToastCriticalIcon = iconsMapping["toastCritical"];

  // STYLES

  const toastStyles: ViewStyle[] = [
    ToastStyles.toast,
    type === "default" && ToastStyles.toastDefault,
    type === "critical" && ToastStyles.toastCritical,
    type === "success" && ToastStyles.toastSuccess,
  ].filter(Boolean) as ViewStyle[];

  const textToastStyles: ViewStyle[] = [
    type === "default" && { color: Colors.primitives.blue[900] },
    type === "critical" && { color: Colors.primitives.red[900] },
    type === "success" && { color: Colors.primitives.green[900] },
  ].filter(Boolean) as ViewStyle[];

  const slideAnim = useRef(new Animated.Value(100)).current;

  // USEEFFECT FUNCTION

  useEffect(() => {
    // Slide in the toast
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    // Set a timer to slide out and dismiss the toast after the specified duration
    const timer = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        if (onDismiss) {
          onDismiss();
        }
      });
    }, duration);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [slideAnim, duration, onDismiss]);

  return (
    <Animated.View style={[toastStyles, { transform: [{ translateY: slideAnim }] }]}>
      {showIcon && type === "default" ? (
        <ToastDefaultIcon color={Colors.primitives.blue[900]} size={"md"} />
      ) : showIcon && type === "critical" ? (
        <ToastCriticalIcon color={Colors.primitives.red[900]} size={"md"} />
      ) : showIcon ? (
        <ToastSuccessIcon color={Colors.primitives.green[900]} size={"md"} />
      ) : null}
      <Text style={[typography.labelSmBold, textToastStyles]}>{message}</Text>
    </Animated.View>
  );
};

const createToastStyles = () => {
  return StyleSheet.create({
    toast: {
      gap: 8,
      bottom: 50,
      maxWidth: 370,
      paddingLeft: 14,
      paddingRight: 16,
      borderRadius: 52,
      paddingVertical: 12,
      alignSelf: "center",
      alignItems: "center",
      flexDirection: "row",
      position: "absolute",
      justifyContent: "center",
    } as ViewStyle,

    toastDefault: {
      backgroundColor: Colors.primitives.blue[200],
    } as ViewStyle,

    toastCritical: {
      backgroundColor: Colors.primitives.red[200],
    } as ViewStyle,

    toastSuccess: {
      backgroundColor: Colors.primitives.green[200],
    } as ViewStyle,
  });
};

export default ToastComponent;
