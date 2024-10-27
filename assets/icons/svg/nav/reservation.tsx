import Colors from "@/constants/colors";
import { typography } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text } from "react-native";

type IconProps = {
  dark?: boolean;
  focused: boolean;
  size?: "md" | "lg" | "xl";
};

const ReservationIcon = (props: IconProps) => {
  const { focused } = props;

  return (
    <View
      style={{
        width: 80,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {focused ? (
        <View style={{ gap: 4, alignItems: "center" }}>
          <FontAwesomeIcon icon={faClock} size={20} color={Colors.light.text.brand} />
          <Text style={[typography.labelXsLight, { color: Colors.light.text.brand }]}>
            Demandes
          </Text>
        </View>
      ) : (
        <View style={{ gap: 4, alignItems: "center" }}>
          <FontAwesomeIcon icon={faClock} size={20} color="#737373" />
          <Text style={[typography.labelXsLight, { color: "#737373" }]}>Demandes</Text>
        </View>
      )}
    </View>
  );
};

export default ReservationIcon;
