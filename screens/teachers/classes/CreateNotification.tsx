import * as React from "react";
import Colors from "@/constants/colors";
import { useToast } from "@/context/ToastContext";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import Button from "@/components/ui/buttons/Button";
import { StyleSheet, View, Text } from "react-native";
import InputText from "@/components/ui/input/TextInput";
import CreateTeacherClass from "@/helpers/api/teacher/createClass";
import { ClassData, ResponseError } from "@/helpers/apiInterface";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateNotif = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const { showToast } = useToast();
  const nameRef: any = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const classId = props.route.params.classId;

  const handleRegisterNotification = async () => {
    const user = await AsyncStorage.getItem("user");

    if (user) {
      const id = JSON.parse(user).id;
      
      try {
        setIsLoading(true);
        // Define the API endpoint
        const url = `${process.env.EXPO_PUBLIC_BASE_URL_LOCAL}/teacher/create/notification`;

        // Prepare the data to be sent in the POST request
        const data = {
          content: nameRef.current?.getValue(),
          classId: parseInt(classId),
          senderId: id,
        };

        // Send the POST request using Axios
        const response = await axios.post(url, data);

        // Handle the response
        if (response.status === 201) {
          showToast("success", "Votre notification a bien été envoyée");
          props.navigation.goBack();
        } else {
          showToast("critical", "Une erreur s'est produite");
        }
      } catch (error) {
        console.error(error);
        showToast("critical", "Une erreur s'est produite lors de l'envoi de la notification");
      } finally {
        setIsLoading(false);
      }
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
        Envoyez une notification à vos étudiants.
      </Text>

      <View style={{ width: "100%", gap: 12, flex: 1 }}>
        <InputText
          size={"md"}
          ref={nameRef}
          disabled={false}
          typeKeyboard="default"
          placeholder={"Devoir samedi"}
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Button
          full
          size={"md"}
          priority={"primary"}
          isLoading={isLoading}
          label={"Envoyez la notification"}
          onPress={handleRegisterNotification}
        />
      </View>
    </View>
  );
};

export default CreateNotif;

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
