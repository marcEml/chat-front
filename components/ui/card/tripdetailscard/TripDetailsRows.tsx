import * as React from "react";
import DetailRow from "./DetailRow";
import { useTheme } from "@/context/ThemeContext";
import { View, StyleSheet } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

type TripDetailsRowsProps = {
  barColor?: string;
  arrivalTime: string;
  arrivalPlace: string;
  departureTime: string;
  departurePlace: string;
};

const TripDetailsRows = (props: TripDetailsRowsProps) => {
  const { theme } = useTheme();

  const styles = createTripDetailsRowsStyle(props.barColor ?? theme.colors.text.info);

  return (
    <View style={styles.wrapper}>
      <View style={styles.tripState}></View>

      <View style={styles.detailsWrapper}>
        <DetailRow
          icon={"CirclePlaceholderOnIcon"}
          leftText={props.departurePlace}
          rightText={props.departureTime}
        />

        <View style={[{ height: useResponsive.verticalScale(10) }]}></View>

        <DetailRow
          icon={"mapPin"}
          isArrival={true}
          leftText={props.arrivalPlace}
          rightText={props.arrivalTime}
        />
      </View>
    </View>
  );
};

export default TripDetailsRows;

const createTripDetailsRowsStyle = (barColor: string) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
    },

    detailsWrapper: {
      flex: 1,
      justifyContent: "space-around",
      marginHorizontal: useResponsive.horizontalScale(12),
    },

    tripState: {
      height: "100%",
      backgroundColor: barColor,
      width: useResponsive.horizontalScale(8),
      minHeight: useResponsive.verticalScale(52),
      borderRadius: useResponsive.moderateScale(52),
    },
  });
