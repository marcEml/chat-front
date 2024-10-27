import * as React from "react";
import DriverInfo from "./DriverInfo";
import Colors from "@/constants/colors";
import TripDetailsRows from "./TripDetailsRows";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

type TripDetailsCardV2Props = {
  date: string;
  seats: string;
  tarif: string;
  barColor?: string;
  driverGrade: string;
  arrivalTime: string;
  arrivalPlace: string;
  onPress?: () => void;
  departureTime: string;
  driverFullName: string;
  driverInitials: string;
  departurePlace: string;
  driverGradeColor?: string;
};

const TripDetailsCardV2 = (props: TripDetailsCardV2Props) => {
  const { theme } = useTheme();

  const styles = createTripDetailsCardV2Style(
    theme.colors,
    theme.dark ? theme.colors.background.primary : "white"
  );

  const places = parseInt(props.seats) > 1 ? "Places disponibles" : "Place disponible";

  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress} activeOpacity={0.8}>

      <TripDetailsRows
        arrivalTime={props.arrivalTime}
        arrivalPlace={props.arrivalPlace}
        departureTime={props.departureTime}
        departurePlace={props.departurePlace}
        barColor={props.barColor ?? theme.colors.background.tertiary}
      />

      <View style={styles.tarrifPlaceWrapper}>
        <Text style={styles.placeTextStyle}>
          {`${props.seats}  ${places}`}
        </Text>

        <Text style={styles.tarrifTextStyle}>{props.tarif}F/Passager</Text>
      </View>

    </TouchableOpacity>
  );
};

export default TripDetailsCardV2;

const createTripDetailsCardV2Style = (
  theme: typeof Colors.light & typeof Colors.dark,
  cardColor: string
) =>
  StyleSheet.create({
    card: {
      width: '100%',
      borderColor: theme.border.default,
      gap: useResponsive.verticalScale(20),
      backgroundColor: theme.background.secondary,
      borderRadius: useResponsive.moderateScale(16),
      borderWidth: useResponsive.horizontalScale(0.5),
      paddingVertical: useResponsive.verticalScale(16),
      paddingHorizontal: useResponsive.horizontalScale(16),
    },

    tarrifTextStyle: {
      color: theme.text.primary,
      ...typography.labelMdMedium,
    },

    placeTextStyle: {
      color: theme.text.info,
      ...typography.labelMdMedium,
    },

    tarrifPlaceWrapper: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: 'space-between',
      gap:  useResponsive.horizontalScale(10),
    },

    tarrifPlaceSeparator: {
      width:  useResponsive.horizontalScale(1),
      height:  useResponsive.verticalScale(15),
      backgroundColor: theme.border.emphasize,
    },
  });
