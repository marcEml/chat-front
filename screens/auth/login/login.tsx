import * as React from "react";
import Colors from "@/constants/colors";
import { useToast } from "@/context/ToastContext";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/ui/buttons/Button";
import { typography } from "@/constants/typography";
import InputText from "@/components/ui/input/TextInput";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";
import { AuthResponseData, LoginData, ResponseError } from "@/helpers/apiInterface";
import { PostData } from "@/helpers/api/authentication/login/login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props: any) => {
  const { theme } = useTheme();
  const { showToast } = useToast();
  const styles = createLoginScreenStyles(theme.colors);

  // CLASSIC VARIABLES

  const [token, setToken] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(true);

  const mode: { phone: string; email: string } = {
    phone: "phone",
    email: "email",
  };

  // REF VARIABLES

  const passwordRef: any = React.useRef(null);
  const phoneRef: any = React.useRef(null);

  // ---------------------------> STATE VARIABLE <------------------------------

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState<string | undefined>(
    undefined
  );
  const [phoneErrorMessage, setPhoneErrorMessage] = React.useState<string | undefined>(undefined);

  // FUNCTIONS

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const validateForm = () => {
    const phone = phoneRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    var validated = true;

    if (phone == "") {
      showToast("default", "Entrer votre numéro de téléphone");
      validated = false;
    }

    if (password == "") {
      showToast("default", "Entrer votre mot de passe");
      validated = false;
    }

    if (!validated) {
      setTimeout(() => {
        setPasswordErrorMessage(undefined);
        setPhoneErrorMessage(undefined);
      }, 3000);
    } else {
      login();
    }
  };

  // IMPLEMENTATION OF LOGIN

  const login = async () => {
    const data: LoginData = {
      phone: phoneRef.current?.getValue(),
      password: passwordRef.current?.getValue(),
    };

    try {
      setIsLoading(true);

      const result: AuthResponseData | ResponseError = await PostData(data);
      const responseData = result.data;

      if (result.status && "user" in responseData) {
        showToast("success", `Bienvenue sur ESchool, ${responseData.user.lastname} 👋🏽`);

        await AsyncStorage.setItem("access_token", JSON.stringify(responseData.token));
        await AsyncStorage.setItem("user", JSON.stringify(responseData.user));

        if (responseData.user.role == "STUDENT") {
          await props.navigation.navigate("Students");
        }

        if (responseData.user.role == "TEACHER") {
          await props.navigation.navigate("Teachers");
        }
      } else {
        showToast("critical", `Numéro ou mot de passe incorrect`);
      }

      if ("message" in responseData!) {
        showToast("critical", responseData.message);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollStyle} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Connectez-vous à ESchool</Text>

          <Text style={styles.subTitle}>"Entrez votre numéro de téléphone et mot de passe"</Text>

          <View style={styles.inputsWrapper}>
            <InputText
              size={"md"}
              prefix="+225"
              ref={phoneRef}
              disabled={false}
              typeKeyboard="number-pad"
              label={"Numéro de téléphone"}
              errorMessage={phoneErrorMessage}
              placeholder={"01 02 03 04 05"}
            />

            <InputText
              size={"md"}
              RightIcon="eye"
              disabled={false}
              ref={passwordRef}
              password={isVisible}
              label={"Mot de passe"}
              onPress={handleVisibility}
              placeholder={"************"}
              errorMessage={passwordErrorMessage}
            />

            <Button
              size={"md"}
              full={true}
              priority={"primary"}
              isLoading={isLoading}
              label={"Se connecter"}
              onPress={() => validateForm()}
            />

            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => props.navigation.navigate("ForgotPasswordScreen")}
            >
              <Text style={styles.passwordFogot}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const createLoginScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    scrollStyle: {
      flex: 1,
      backgroundColor: theme.background.secondary,
      paddingTop: useResponsive.verticalScale(12),
      paddingBottom: useResponsive.verticalScale(40),
      paddingHorizontal: useResponsive.horizontalScale(18),
    },

    scrollContent: {
      flex: 1,
      justifyContent: "space-between",
      minHeight: Dimensions.get("window").height - useResponsive.verticalScale(150),
    },

    topWrapper: {
      flex: 1,
    },

    title: {
      ...typography.h1,
      color: theme.text.primary,
      marginBottom: useResponsive.verticalScale(8),
    },

    subTitle: {
      ...typography.labelMdLight,
      color: theme.text.secondary,
    },

    passwordFogot: {
      textAlign: "center",
      color: theme.text.primary,
      ...typography.labelMdMedium,
    },

    inputsWrapper: {
      marginTop: 25,
      gap: useResponsive.verticalScale(16),
    },

    bottomWrapper: {
      gap: useResponsive.verticalScale(32),
    },

    separator: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      gap: useResponsive.horizontalScale(12),
    },

    borders: {
      height: useResponsive.verticalScale(1),
      backgroundColor: theme.border.emphasize,
      width: useResponsive.horizontalScale(107),
    },

    buttonsWrapper: {
      gap: useResponsive.verticalScale(8),
    },
  });
