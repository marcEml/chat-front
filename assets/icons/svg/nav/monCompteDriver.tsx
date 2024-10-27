import React from "react";
import Colors from "@/constants/colors";
import { typography } from "@/constants/typography";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

type IconProps = {
  dark?: boolean;
  focused: boolean;
  size?: "md" | "lg" | "xl";
};

const MonCompteDriverIcon = (props: IconProps) => {
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

export default MonCompteDriverIcon;
