import Colors from "@/constants/colors";
import React, { useRef, useState } from "react";
import { useToast } from "@/context/ToastContext";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/ui/buttons/Button";
import { typography } from "@/constants/typography";
import InputText from "@/components/ui/input/TextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";
import { RegistrationResponseData, RegistrationData, ResponseError } from "@/helpers/apiInterface";
import { PostData } from "@/helpers/api/authentication/signin/registration";
import moment from "moment";

const TeacherPasswordScreen = (props: any) => {
  // VARIABLES
  const { theme } = useTheme();
  const styles = createStyle(theme.colors);

  const { showToast } = useToast();

  // STATE VARIABLES
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleForConfirm, setIsVisibleForConfirm] = useState(true);

  const [error, setError] = useState<string | undefined>(undefined);
  const [errorConfirm, setErrorConfirm] = useState<string | undefined>(undefined);

  // REF
  const passwordRef: any = useRef(null);
  const confirmPasswordRef: any = useRef(null);

  // FUNCTIONS
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleVisibilityForConfirm = () => {
    setIsVisibleForConfirm(!isVisibleForConfirm);
  };

  const handleButtonPress = async () => {
    setIsLoading(true);
    const passwordValue = passwordRef.current?.getValue();
    const confirmPasswordValue = confirmPasswordRef.current?.getValue();

    var validated = true;

    if (passwordValue == "") {
      setError("Remplissez ce champ");
      validated = false;
    }

    if (confirmPasswordValue == "") {
      setErrorConfirm("Remplissez ce champ");
      validated = false;
    }

    if (passwordValue !== confirmPasswordValue) {
      setError("Les deux mots de passes doivent être identiques");
      setErrorConfirm("Les deux mots de passes doivent être identiques");
      validated = false;
    }

    if (passwordValue === confirmPasswordValue && passwordValue.length < 8) {
      setError("Le mot de passe doit avoir au moins 8 caractères");
      setErrorConfirm("Le mot de passe doit avoir au moins 8 caractères");
      validated = false;
    }

    if (!validated) {
      setTimeout(() => {
        setError(undefined);
        setErrorConfirm(undefined);
      }, 3000);
    } else {
      await AsyncStorage.setItem("password", passwordValue);
      createUser();
    }

    setIsLoading(false);
  };

  const createUser = async () => {
    const email = await AsyncStorage.getItem("email");
    const phone = await AsyncStorage.getItem("phone");
    const gender = await AsyncStorage.getItem("gender");
    const password = await AsyncStorage.getItem("password");
    const lastname = await AsyncStorage.getItem("lastname");
    const firstname = await AsyncStorage.getItem("firstname");
    const dateOfBirth = await AsyncStorage.getItem("dateOfBirth");
    const emailVerifiedAt = (await AsyncStorage.getItem("emailVerifiedAt")) ?? new Date();

    if (
      email &&
      phone &&
      gender &&
      password &&
      lastname &&
      firstname &&
      dateOfBirth &&
      emailVerifiedAt
    ) {
      const data: RegistrationData = {
        phone: phone,
        email: email,
        gender: gender,
        role: "TEACHER",
        lastname: lastname,
        firstname: firstname,
        birthday: moment(dateOfBirth).toString(),
        password: passwordRef.current?.getValue(),
      };

      try {
        setIsLoading(true);

        const result: RegistrationResponseData | ResponseError = await PostData(data);
        const responseData = result.data;

        if (result.status) {
          showToast("success", "votre compte a été crée avec succès ");
          props.navigation.navigate("LoginMainLayout");
        } else {
          showToast("critical", result.data.message);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Text style={[typography.h1, { color: theme.colors.text.primary }]}>
              Créer un mot de passe
            </Text>
            <Text style={[typography.labelMdLight, { color: theme.colors.text.secondary }]}>
              Sécuriser votre compte ESchool
            </Text>
          </View>

          <InputText
            size={"md"}
            RightIcon="eye"
            disabled={false}
            ref={passwordRef}
            errorMessage={error}
            password={isVisible}
            label="Mots de passe"
            placeholder="**********"
            onPress={handleVisibility}
          />

          <InputText
            size={"md"}
            RightIcon="eye"
            disabled={false}
            placeholder="**********"
            ref={confirmPasswordRef}
            errorMessage={errorConfirm}
            password={isVisibleForConfirm}
            label="Confirmer votre mot de passe"
            onPress={handleVisibilityForConfirm}
          />
        </View>

        <View style={styles.footer}>
          <Button
            size={"md"}
            full={true}
            priority={"primary"}
            isLoading={isLoading}
            label={"Créer mon compte"}
            onPress={handleButtonPress}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const createStyle = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: theme.background.secondary,
    },

    scrollContent: {
      flex: 1,
      justifyContent: "space-between",
      gap: useResponsive.verticalScale(24),
      paddingVertical: useResponsive.verticalScale(10),
      paddingHorizontal: useResponsive.horizontalScale(10),
      minHeight: useResponsive.verticalScale(Dimensions.get("window").height - 120),
    },

    header: {
      gap: useResponsive.verticalScale(12),
    },

    form: {
      gap: useResponsive.verticalScale(20),
    },

    footer: {
      gap: useResponsive.verticalScale(12),
      paddingBottom: useResponsive.verticalScale(25),
      paddingHorizontal: useResponsive.horizontalScale(10),
    },
  });

export default TeacherPasswordScreen;
