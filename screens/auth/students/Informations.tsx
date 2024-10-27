import moment from "moment";
import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/ui/buttons/Button";
import { typography } from "@/constants/typography";
import InputText from "@/components/ui/input/TextInput";
import DatePicker from "@/components/ui/pickers/DatePicker";
import InputSelect from "@/components/ui/input/SelectInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView, StyleSheet, View, Text, LogBox } from "react-native";
import { useResponsive } from "@/helpers/responsive/metrix";

const StudentInformationScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = createInformationScreenStyles(theme.colors);
  const list = [
    { label: "Homme", value: "homme" },
    { label: "Femme", value: "femme" },
  ];
  const list2 = [
    { label: "M2 SIGL", value: "M2 SIGL" },
    { label: "M2 SITW", value: "M2 SITW" },
    { label: "M2 ERIS", value: "M2 ERIS" },
    { label: "M2 MBDS", value: "M2 MBDS" },
    { label: "M2 MDSI", value: "M2 MDSI" },
  ];

  // REF VARIABLES

  const nameRef: any = React.useRef(null);
  const emailRef: any = React.useRef(null);
  const phoneRef: any = React.useRef(null);
  const genderRef: any = React.useRef(null);
  const classeRef: any = React.useRef(null);
  const surnameRef: any = React.useRef(null);
  const dateOfBirth: any = React.useRef(null);

  // STATES VARIABLES

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [selectedGender, setSelectedGender] = React.useState<string>("");
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const [dateErrorMessage, setDateError] = React.useState<string | undefined>(undefined);
  const [emailErrorMessage, setEmailError] = React.useState<string | undefined>(undefined);
  const [phoneErrorMessage, setPhoneError] = React.useState<string | undefined>(undefined);
  const [namesErrorMessage, setNamesError] = React.useState<string | undefined>(undefined);
  const [genderErrorMessage, setGenderError] = React.useState<string | undefined>(undefined);

  // FUNCTIONS

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    dateOfBirth.current?.setValue(moment(date).format("dddd DD MMMM YYYY"));
    setSelectedDate(moment(date).format("dddd DD MMMM YYYY"));
    hideDatePicker();
  };

  const updateGender = (val: string) => {
    setSelectedGender(val);
  };

  const validateForm = async () => {
    const name = nameRef.current?.getValue();
    const email = emailRef.current?.getValue();
    const phone = phoneRef.current?.getValue();
    const gender = genderRef.current?.getValue();
    const matiere = classeRef.current?.getValue();
    const surname = surnameRef.current?.getValue();

    var validated = true;

    if (name == "" || surname == "") {
      setNamesError("Renseignez ce champ");
      validated = false;
    }

    if (selectedDate == "") {
      setDateError("Choisissez votre date de naissance");
      validated = false;
    }

    if (gender == "") {
      setGenderError("Selectionnez votre genre");
      validated = false;
    }

    if (matiere == "") {
      setGenderError("Selectionnez votre matiere");
      validated = false;
    }

    if (email == "") {
      setEmailError("Renseignez ce champ");
      validated = false;
    }

    if (phone == "") {
      setPhoneError("Renseignez ce champ");
      validated = false;
    }

    if (phone.length < 10) {
      setPhoneError("Le numéro doit contenir au moins 10 chiffres");
      validated = false;
    }

    if (!validated) {
      setTimeout(() => {
        setDateError(undefined);
        setPhoneError(undefined);
        setEmailError(undefined);
        setNamesError(undefined);
        setGenderError(undefined);
      }, 3000);
    } else {
      setIsLoading(true);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("phone", phone);
      await AsyncStorage.setItem("lastname", name);
      await AsyncStorage.setItem("firstname", surname);
      await AsyncStorage.setItem("dateOfBirth", selectedDate.toString());
      await AsyncStorage.setItem("gender", selectedGender === "homme" ? "MALE" : "FEMALE");
      setIsLoading(false);

      props.navigation.navigate("StudentPasswordScreen");
    }
  };

  return (
    <ScrollView
      style={styles.scrollStyle}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
    >
      <View style={styles.topWrapper}>
        <Text style={styles.title}>Compléter votre profil</Text>

        <Text style={styles.subTitle}>
          Entrez vos informations personnelles pour continuer votre inscription sur ESchool
        </Text>

        <View style={styles.inputsWrapper}>
          <InputText
            size={"md"}
            ref={nameRef}
            disabled={false}
            placeholder={"Fofana"}
            label={"Nom de famille"}
            errorMessage={namesErrorMessage}
          />

          <InputText
            size={"md"}
            ref={surnameRef}
            disabled={false}
            label={"Prénoms"}
            placeholder={"Samira"}
            errorMessage={namesErrorMessage}
          />

          <InputText
            size={"md"}
            ref={emailRef}
            label={"Email"}
            disabled={false}
            typeKeyboard={"email-address"}
            placeholder={"samira@gmail.com"}
            errorMessage={emailErrorMessage}
          />

          <InputText
            size={"md"}
            ref={phoneRef}
            disabled={false}
            label={"Téléphone"}
            placeholder={"0102030405"}
            typeKeyboard={"number-pad"}
            errorMessage={phoneErrorMessage}
          />

          <DatePicker
            size={"md"}
            disabled={false}
            ref={dateOfBirth}
            rightIcon={"calendar"}
            dateText={selectedDate}
            onPress={showDatePicker}
            label={"Date de naissance"}
            errorMessage={dateErrorMessage}
            placeholder={"09 Décembre 1999"}
          />

          <DateTimePickerModal
            mode="date"
            locale="fr"
            confirmTextIOS="Valider"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            isVisible={isDatePickerVisible}
          />

          <InputSelect
            size={"md"}
            list={list}
            label="Genre"
            ref={genderRef}
            disabled={false}
            RightIcon="arrowBottom"
            onChangeText={updateGender}
            errorMessage={genderErrorMessage}
            placeholder="Choisissez votre genre"
          />
        </View>
      </View>

      <View style={styles.bottomWrapper}>
        <Button
          size={"md"}
          full={true}
          label={"Continuer"}
          priority={"primary"}
          isLoading={isLoading}
          onPress={() => validateForm()}
        />
      </View>
    </ScrollView>
  );
};

export default StudentInformationScreen;

const createInformationScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
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
      backgroundColor: theme.background.primary,
    },

    topWrapper: {
      flex: 1,
      marginBottom: useResponsive.verticalScale(20),
    },

    title: {
      ...typography.h1,
      color: theme.text.primary,
      marginBottom: useResponsive.verticalScale(8),
    },

    subTitle: {
      ...typography.labelMdLight,
      color: theme.text.secondary,
      marginTop: useResponsive.verticalScale(8),
    },

    continueWith: {
      textAlign: "center",
      color: theme.text.primary,
      ...typography.labelMdMedium,
    },

    inputsWrapper: {
      gap: useResponsive.verticalScale(16),
      marginTop: useResponsive.verticalScale(25),
    },

    bottomWrapper: {
      backgroundColor: theme.background.secondary,
      paddingTop: useResponsive.verticalScale(10),
      paddingBottom: useResponsive.verticalScale(32),
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
