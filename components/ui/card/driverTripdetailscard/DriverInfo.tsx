import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { View, Text, StyleSheet } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type DriverInfoProps = {
  seats?: string;
  status: "completed" | "available" | "finished";
};

const DriverInfo = (props: DriverInfoProps) => {
  const { theme } = useTheme();
  const styles = createDriverInfoStyle(theme.colors);
  const CheckIcon = iconsMapping["circleCheck"];

  return (
    <View style={styles.wrapper}>
      {CheckIcon !== undefined && props.status === "completed" ? <CheckIcon size={"md"} /> : ""}
      <Text
        style={[
          typography.labelMdBold,
          {
            color:
              props.status === "available"
                ? theme.colors.text.info
                : props.status === "completed"
                ? theme.colors.text.success
                : theme.colors.text.success,
          },
        ]}
      >
        {props.status === "available" ? `${props.seats} places disponibles` : "Complet"}
      </Text>
    </View>
  );
};

export default DriverInfo;

const createDriverInfoStyle = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: useResponsive.horizontalScale(8),
    },

    textWrapper: {
      justifyContent: "space-around",
    },

    fullname: {
      color: theme.text.secondary,
      ...typography.labelMdMedium,
    },
  });
