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
  barColor?: string;
  arrivalTime: string;
  arrivalPlace: string;
  onPress?: () => void;
  departureTime: string;
  departurePlace: string;
  status: "completed" | "available" | "finished",
};

const DriverTripDetailsCard = (props: TripDetailsCardProps) => {
  const { theme } = useTheme();

  const styles = createTripDetailsCardStyle(
    theme.colors,
    theme.dark ? theme.colors.background.primary : "white"
  );

  const places = parseInt(props.seats) > 1 ? "Places" : "Place";

  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress} activeOpacity={0.8}>
      <TripDetailsRows
        arrivalTime={props.arrivalTime}
        arrivalPlace={props.arrivalPlace}
        departureTime={props.departureTime}
        departurePlace={props.departurePlace}
        barColor={props.barColor ?? theme.colors.background.tertiary}
      />

      <View style={styles.driverWrapper}>
        <DriverInfo
          seats={props.seats}
          status={props.status}
        />

        <View style={styles.tarrifPlaceWrapper}>
          <Text style={styles.tarrifPlaceTextStyle}>{props.tarif}F/Passager</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DriverTripDetailsCard;

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
