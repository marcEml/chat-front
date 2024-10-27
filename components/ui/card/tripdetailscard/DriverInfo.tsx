import * as React from "react";
import Colors from "@/constants/colors";
import Avatar from "../../avatar/Avatar";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { View, Text, StyleSheet } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

type DriverInfoProps = {
  grade: string;
  fullname: string;
  initials: string;
  gradeColor?: string;
  picture?: string | undefined;
};

const DriverInfo = (props: DriverInfoProps) => {
  const { theme } = useTheme();

  const styles = createDriverInfoStyle(
    theme.colors,
    props.gradeColor ?? theme.colors.text.quaternary
  );

  return (
    <View style={styles.wrapper}>
      <Avatar
        size={"md"}
        url={props.picture}
        initial={props.initials}
        type={props.picture ? "photo" : "neutral"}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.fullname}>{props.fullname}</Text>

        <Text style={styles.grade}>{props.grade}</Text>
      </View>
    </View>
  );
};

export default DriverInfo;

const createDriverInfoStyle = (
  theme: typeof Colors.light & typeof Colors.dark,
  gradeColor: string
) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      gap: useResponsive.horizontalScale(12),
    },

    textWrapper: {
      justifyContent: "space-around",
    },

    fullname: {
      color: theme.text.secondary,
      ...typography.labelMdMedium,
    },

    grade: {
      color: gradeColor,
      ...typography.labelSmRegular,
    },
  });
