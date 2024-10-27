import React from "react";
import Colors from "@/constants/colors";
import Svg, { Path } from "react-native-svg";
import { useResponsive } from "@/helpers/responsive/metrix";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "@/constants/typography";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

type IconProps = {
  dark?: boolean;
  focused: boolean;
  size?: "md" | "lg" | "xl";
};

const MonComptePassengerIcon = (props: IconProps) => {
  const { focused, size, dark } = props;
  const sizeModel = {
    md: {
      height: useResponsive.verticalScale(37),
      width: useResponsive.horizontalScale(68),
    },

    lg: {
      height: useResponsive.verticalScale(41),
      width: useResponsive.horizontalScale(72),
    },

    xl: {
      height: useResponsive.verticalScale(49),
      width: useResponsive.horizontalScale(80),
    },
  };

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
          <FontAwesomeIcon icon={faUser} size={20} color={Colors.light.text.brand} />
          <Text style={[typography.labelXsLight, { color: Colors.light.text.brand }]}>
            Mon compte
          </Text>
        </View>
      ) : (
        <View style={{ gap: 4, alignItems: "center" }}>
          <FontAwesomeIcon icon={faUser} size={20} color="#737373" />
          <Text style={[typography.labelXsLight, { color: "#737373" }]}>Mon compte</Text>
        </View>
      )}
    </View>
  );
};

export default MonComptePassengerIcon;
