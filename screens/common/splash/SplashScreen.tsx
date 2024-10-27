import * as React from "react";
import Colors from "@/constants/colors";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import LogoWhiteModeIllustration from "@/assets/images/requires/LogoWhiteMode";
import LogoBlackModeIllustration from "@/assets/images/requires/LogoBlackMode";
import GetMe from "@/helpers/api/authentication/getMe";
import { AuthResponseData, ResponseError } from "@/helpers/apiInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = createResearchScreenStyles(theme.colors);

  // -----------> use effect
  React.useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem("access_token");

      if (token) {
        try {
          const responseData: AuthResponseData | ResponseError = await GetMe();

          if (responseData.status && "user" in responseData.data) {
            await AsyncStorage.setItem("user", JSON.stringify(responseData.data.user));

            if (responseData.data.user.role == "STUDENT") {
              props.navigation.navigate("Students");
            } else {
              props.navigation.navigate("Teachers");
            }
          }

          if ("message" in responseData.data) {
            props.navigation.navigate("WelcomeScreen");
          }
        } catch (error) {
          throw error;
        }
      } else {
        props.navigation.navigate("WelcomeScreen");
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {theme.dark ? (
        <LogoBlackModeIllustration height={98} width={70} />
      ) : (
        <LogoWhiteModeIllustration height={98} width={70} />
      )}
    </View>
  );
};

export default SplashScreen;

const createResearchScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background.secondary,
    },
  });
