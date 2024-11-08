import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import Button from "@/components/ui/buttons/Button";
import { WelcomeScr } from "@/assets/images/requires/99";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const WelcomeScreen = (props: any) => {
  // THEME AND STYLE
  const { theme } = useTheme();
  const styles = createResearchScreenStyles(theme.colors);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <View style={{ height: SCREEN_HEIGHT * 0.02 }}></View>

        <Text style={[typography.h1, styles.title]}>ESchool</Text>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={WelcomeScr} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text
          style={[typography.appTitle, { color: theme.colors.text.primary, textAlign: "center" }]}
        >
          {"Et si on\nréinventait\n"}
          <Text
            style={[
              typography.appTitleItalic,
              {
                color: theme.colors.text.brand,
              },
            ]}
          >
            l'éducation?
          </Text>
        </Text>

        <Text
          style={[
            typography.labelMdLight,
            { textAlign: "center", color: theme.colors.text.secondary },
          ]}
        >
          Optimisez votre expérience académique,{"\n"}facilement prix avec ESchool
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          size="md"
          full
          priority="primary"
          label="Créer mon compte"
          onPress={() => props.navigation.navigate("ProfileScreen")}
        />
        <Button
          size="md"
          full
          label="Se connecter"
          priority="secondary"
          onPress={() => props.navigation.navigate("LoginMainLayout")}
        />
        <View style={{ height: SCREEN_HEIGHT * 0.01 }}></View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const createResearchScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    header: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },

    textContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: SCREEN_HEIGHT * 0.01,
    },

    slogan: {
      textAlign: "center",
      ...typography.appTitle,
      color: theme.text.primary,
    },

    sloganItalic: {
      textAlign: "center",
      color: theme.text.primary,
      ...typography.appTitleItalic,
    },

    backgroundImage: {
      resizeMode: "cover",
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },

    pageContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      paddingHorizontal: 10,
      justifyContent: "space-around",
      backgroundColor: theme.background.secondary,
    },

    title: {
      marginBottom: 15,
      fontWeight: "800",
      color: theme.text.primary,
    },

    imageContainer: {
      padding: 12,
      width: "95%",
      backgroundColor: theme.transparent.T50,
      height: useResponsive.verticalScale(285),
      borderRadius: useResponsive.moderateScale(50),
    },

    image: {
      width: "100%",
      objectFit: "cover",
      height: useResponsive.verticalScale(261),
      borderRadius: useResponsive.moderateScale(40),
    },

    SecondTitle: {
      paddingTop: 10,
      letterSpacing: -1,
      fontStyle: "normal",
      textAlign: "center",
      fontFamily: "TWKLausanne-600",
      fontSize: useResponsive.moderateScale(38),
      lineHeight: useResponsive.verticalScale(32),
    },

    SecondTitleEnsemble: {
      fontStyle: "italic",
      color: theme.text.brand,
    },

    buttonContainer: {
      width: "100%",
      paddingHorizontal: 10,
      gap: SCREEN_HEIGHT * 0.02,
    },
  });
