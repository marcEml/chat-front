import { ViewStyle, StyleSheet, View, Text } from "react-native";
import { typography } from "@/constants/typography";
import { useTheme } from "@/context/ThemeContext";
import Colors from "@/constants/colors";
import React from "react";
import { useResponsive } from "@/helpers/responsive/metrix";

type RatingProps = {
  heading: string;
  rate: number;
  feedback: string;
  username: string;
  date: string;
};

const RatingCard = (props: RatingProps) => {
  const { heading, rate, feedback, username, date } = props;

  const { theme } = useTheme();
  const style = createRatingCardStyle(theme.colors);

  return (
    <View style={style.card}>
      <View style={style.row}>
        <Text
          style={[
            typography.labelMdMedium,
            { color: theme.colors.text.primary },
          ]}
        >
          {heading}
        </Text>

        <Text
          style={[
            typography.labelMdBold,
            { color: theme.colors.text.success },
          ]}
        >
          {rate}
        </Text>
      </View>

      <View style={style.secondary}>
        <View style={style.row}>
          <Text
            style={[
              typography.labelMdMedium,
              { color: theme.colors.text.tertiary },
            ]}
          >
            {feedback}
          </Text>
        </View>

        <View style={style.row}>
          <Text
            style={[
              typography.labelMdMedium,
              { color: theme.colors.text.tertiary },
            ]}
          >
            {username + ", " + date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const createRatingCardStyle = (
  theme: typeof Colors.light & typeof Colors.dark
) => {
  return StyleSheet.create({
    card: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "column",
      gap: useResponsive.verticalScale(12),
      backgroundColor: theme.background.secondary,
      borderRadius: useResponsive.moderateScale(16),
      paddingVertical: useResponsive.verticalScale(16),
      paddingHorizontal: useResponsive.horizontalScale(16),
    } as ViewStyle,

    secondary: {
      display: "flex",
      flexDirection: "column",
      gap: useResponsive.verticalScale(6),
    } as ViewStyle,

    row: {
      width: "100%",
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    } as ViewStyle,
  });
};

export default RatingCard;
