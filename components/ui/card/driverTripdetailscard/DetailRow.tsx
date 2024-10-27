import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { View, Text, StyleSheet } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

type DetailRowProps = {
  leftText: string;
  rightText: string;
  isArrival?: boolean;
};

const DetailRow = (props: DetailRowProps) => {
  const { theme } = useTheme();

  const style = createDetailRowStyle(theme.colors);

  return (
    <View style={style.detailRow}>
      <View style={style.detailRowTextWrapper}>
        <Text style={style.detailRowTextLeft}>{props.leftText}</Text>

        <Text style={style.detailRowTextRight}>
          {props.isArrival ? "est. à " + props.rightText : "à " + props.rightText}
        </Text>
      </View>
    </View>
  );
};

export default DetailRow;

const createDetailRowStyle = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    detailRow: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: useResponsive.horizontalScale(10),
    },

    detailRowTextWrapper: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    detailRowTextLeft: {
      color: theme.text.primary,
      ...typography.labelMdMedium,
      maxWidth: useResponsive.horizontalScale(210),
    },

    detailRowTextRight: {
      color: theme.text.quaternary,
      ...typography.labelMdRegular,
    },

    detailRowTextSeat: {
      color: "#1EACFF",
      ...typography.labelMdRegular,
    },

    seat: {
      flexDirection: "row",
      gap: useResponsive.horizontalScale(5),
    },
  });
