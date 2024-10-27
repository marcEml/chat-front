import * as React from "react";
import DriverInfo from "./DriverInfo";
import Colors from "@/constants/colors";
import TripDetailsRows from "./TripDetailsRows";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

type TripDetailsCardProps = {
  date: string;
  seats: string;
  tarif: string;
  driverGrade: string;
  arrivalTime: string;
  arrivalPlace: string;
  onPress?: () => void;
  departureTime: string;
  driverFullName: string;
  driverInitials: string;
  departurePlace: string;
  driverGradeColor?: string;
  status: "pending" | "confirmed" | "rejected" | "available" | undefined;
};

const TripDetailsCard = (props: TripDetailsCardProps) => {
  const { theme } = useTheme();

  const styles = createTripDetailsCardStyle(
    theme.colors,
    theme.dark ? theme.colors.background.primary : "white"
  );

  const places = parseInt(props.seats) > 1 ? "Places" : "Place";

  const barColor = props.status === "pending"
    ? theme.colors.text.info
    : props.status === "confirmed"
      ? theme.colors.text.success
      : props.status === "rejected"
        ? theme.colors.text.critical
        : props.status === "available"
          ? theme.colors.text.success
          : theme.colors.text.tertiary


  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress} activeOpacity={0.8}>

      <TripDetailsRows
        barColor={barColor}
        arrivalTime={props.arrivalTime}
        arrivalPlace={props.arrivalPlace}
        departureTime={props.departureTime}
        departurePlace={props.departurePlace}
      />

      <View style={styles.driverWrapper}>

        <DriverInfo
          grade={props.driverGrade}
          initials={props.driverInitials}
          fullname={props.driverFullName}
          gradeColor={props.driverGradeColor}
        />

        <View style={styles.tarrifPlaceWrapper}>
          <Text style={styles.tarrifPlaceTextStyle}>
            {`${props.seats}  ${places}`}
          </Text>

          <View style={styles.tarrifPlaceSeparator}></View>

          <Text style={styles.tarrifPlaceTextStyle}>{props.tarif}F</Text>
        </View>

      </View>

    </TouchableOpacity>
  );
};

export default TripDetailsCard;

const createTripDetailsCardStyle = (
  theme: typeof Colors.light & typeof Colors.dark,
  cardColor: string
) =>
  StyleSheet.create({
    card: {
      borderColor: theme.border.default,
      gap: useResponsive.verticalScale(20),
      backgroundColor: theme.background.secondary,
      borderRadius: useResponsive.moderateScale(16),
      borderWidth: useResponsive.horizontalScale(0.5),
      paddingVertical: useResponsive.verticalScale(16),
      paddingHorizontal: useResponsive.horizontalScale(16),
    },

    driverWrapper: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },

    tarrifPlaceTextStyle: {
      color: theme.text.primary,
      ...typography.labelMdMedium,
    },

    tarrifPlaceWrapper: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      gap: useResponsive.horizontalScale(10),
    },

    tarrifPlaceSeparator: {
      width: useResponsive.horizontalScale(1),
      height: useResponsive.verticalScale(15),
      backgroundColor: theme.border.emphasize,
    },
  });
