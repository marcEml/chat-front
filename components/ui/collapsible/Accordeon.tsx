import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from "react-native";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";

import { useResponsive } from "@/helpers/responsive/metrix";
import { Colors } from "react-native/Libraries/NewAppScreen";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";

function Accordion({ body, title }: any) {
  const [collapsed, setCollapsed] = React.useState(true);
  const [animation] = React.useState(new Animated.Value(0));

  const [heightInterpolate, setHeightInterpolate] = React.useState(
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, useResponsive.verticalScale(140)],
    })
  );

  const { theme } = useTheme();
  const styles = createAccordeonStyle(theme.colors);

  const ChevronDown = iconsMapping["dropdown"];
  const ChevronUp = iconsMapping["chevronUp"];

  const optimalHeight = (text: string) => {
    const containerWidth = Dimensions.get("window").width;
    const avgCharWidth = useResponsive.horizontalScale(10);

    const charsPerLine = containerWidth / avgCharWidth;
    const charCount = text.length;

    const numLines = Math.ceil(charCount / charsPerLine);
    const lineHeight = useResponsive.verticalScale(20);

    const containerHeight = numLines * lineHeight;

    setHeightInterpolate(
      animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, useResponsive.verticalScale(containerHeight)],
      })
    );
  };

  const toggleCollapse = (text: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    optimalHeight(text);

    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 50,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          toggleCollapse(body);
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {collapsed ? (
            <ChevronDown size={"md"} color={theme.colors.icon.primary} />
          ) : (
            <ChevronUp size={"md"} color={theme.colors.icon.primary} />
          )}
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.bodyContainer, { height: heightInterpolate }]}>
        <Text style={styles.bodyText}>{body}</Text>
      </Animated.View>
    </View>
  );
}

export default Accordion;

const createAccordeonStyle = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      width: "100%",
      gap: useResponsive.verticalScale(5),
    },

    titleContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
      backgroundColor: theme.background.secondary,
      borderRadius: useResponsive.moderateScale(14),
      paddingLeft: useResponsive.horizontalScale(16),
      paddingRight: useResponsive.horizontalScale(12),
      paddingVertical: useResponsive.verticalScale(10),
    },

    bodyContainer: {
      width: "100%",
      display: "flex",
      borderRadius: useResponsive.moderateScale(14),
      paddingLeft: useResponsive.horizontalScale(16),
      paddingVertical: useResponsive.verticalScale(4),
      paddingHorizontal: useResponsive.horizontalScale(16),
    },

    title: {
      maxWidth: useResponsive.horizontalScale(300),
      color: theme.text.primary,
      ...typography.labelMdRegular,
    },

    bodyText: {
      color: theme.text.primary,
      ...typography.labelMdRegular,
    },
  });
