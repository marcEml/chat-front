import React from "react";
import Colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { typography } from "@/constants/typography";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type IconProps = {
  dark?: boolean;
  focused: boolean;
  size?: "md" | "lg" | "xl";
};

const RechercheIcon = (props: IconProps) => {
  const { focused, size, dark } = props;

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
          <FontAwesomeIcon icon={faBook} size={20} color={Colors.light.text.brand} />
          <Text style={[typography.labelXsLight, { color: Colors.light.text.brand }]}>
            Cours
          </Text>
        </View>
      ) : (
        <View style={{ gap: 4, alignItems: "center" }}>
          <FontAwesomeIcon icon={faBook} size={20} color="#737373" />
          <Text style={[typography.labelXsLight, { color: "#737373" }]}>Cours</Text>
        </View>
      )}
    </View>
  );
};

export default RechercheIcon;
