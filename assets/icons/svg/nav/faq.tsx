import Colors from "@/constants/colors";
import { typography } from "@/constants/typography";
import { useResponsive } from "@/helpers/responsive/metrix";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";

type IconProps = {
  dark?: boolean;
  focused: boolean;
  size?: "md" | "lg" | "xl";
};

const FaqIcon = (props: IconProps) => {
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
          <FontAwesomeIcon icon={faBell} size={20} color={Colors.light.text.brand} />
          <Text style={[typography.labelXsLight, { color: Colors.light.text.brand }]}>
            Notifications
          </Text>
        </View>
      ) : (
        <View style={{ gap: 4, alignItems: "center" }}>
          <FontAwesomeIcon icon={faBell} size={20} color="#737373" />
          <Text style={[typography.labelXsLight, { color: "#737373" }]}>Notifications</Text>
        </View>
      )}
    </View>
  );
};

export default FaqIcon;
