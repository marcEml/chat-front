import * as React from "react";
import Colors from "@/constants/colors";
import { useToast } from "@/context/ToastContext";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import Button from "@/components/ui/buttons/Button";
import { StyleSheet, View, Text } from "react-native";
import InputText from "@/components/ui/input/TextInput";
import axios from "axios";

const CreateExam = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const { showToast } = useToast();
  const nameRef: any = React.useRef(null);
  const yearRef: any = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const classId = props.route.params.classId;

  const handleRegisterDocument = async () => {
    try {
      setIsLoading(true);
      // Define the API endpoint
      const url = "http://MacBook-Pro-Marc-Emmanuel.local:2880/api/chat/teacher/create/evaluation";

      // Prepare the data to be sent in the POST request
      const data = {
        title: nameRef.current?.getValue(),
        content: yearRef.current?.getValue(),
        classId: parseInt(classId), // Assuming classId is a number
      };

      // Send the POST request using Axios
      const response = await axios.post(url, data);

      // Handle the response
      if (response.status === 201) {
        showToast("success", "votre évaluation a bien été ajouté");
        props.navigation.goBack();
      } else {
        showToast("critical", "une erreur s'est produite");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text
        style={[
          typography.labelSmRegular,
          { color: theme.colors.text.secondary, marginBottom: 12 },
        ]}
      >
        Partager un nouveau document avec tous vos étudiants.
      </Text>

      <View style={{ width: "100%", gap: 12, flex: 1 }}>
        <InputText
          size={"md"}
          ref={nameRef}
          disabled={false}
          typeKeyboard="default"
          label={"Nom de l'évaluation"}
          placeholder={"Analyse de données"}
        />

        <InputText
          size={"md"}
          ref={yearRef}
          label={"Lien"}
          disabled={false}
          placeholder={"http://..."}
          typeKeyboard={"number-pad"}
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Button
          full
          size={"md"}
          priority={"primary"}
          isLoading={isLoading}
          label={"Ajouter l'évaluation"}
          onPress={handleRegisterDocument}
        />
      </View>
    </View>
  );
};

export default CreateExam;

const createHomeScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      position: "relative",
      paddingHorizontal: 15,
      backgroundColor: theme.background.secondary,
    },

    buttonsWrapper: {
      gap: 15,
      margin: "auto",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  });
