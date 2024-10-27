import * as React from "react";
import Colors from "@/constants/colors";
import { useToast } from "@/context/ToastContext";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import Button from "@/components/ui/buttons/Button";
import { StyleSheet, View, Text } from "react-native";
import InputText from "@/components/ui/input/TextInput";
import CryptoJS from "crypto-js";
import CreateTeacherClass from "@/helpers/api/teacher/createClass";
import { ClassData, JoinClassResponseData, ResponseError } from "@/helpers/apiInterface";
import JoinClass from "@/helpers/api/student/joinClass";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateStudentRequest = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const { showToast } = useToast();
  const nameRef: any = React.useRef(null);
  const yearRef: any = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const createRequest = async () => {
    const code = nameRef.current?.getValue();
    const secretKey = "access__class";

    const bytes = CryptoJS.AES.decrypt(code, secretKey);
    const decryptedCodeClass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const userToken = await AsyncStorage.getItem("user");

    if (userToken) {
      try {
        setIsLoading(true);

        const responseData: JoinClassResponseData | ResponseError = await JoinClass({
          classId: decryptedCodeClass.classId,
          userId: JSON.parse(userToken).id,
        });

        if (responseData.status) {
          showToast("success", "Votre demande a bien été envoyée");
          props.navigation.goBack();
        }

        if (!responseData.status) {
          showToast("critical", responseData.data.message);
        }
      } catch (error) {
        throw error;
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
        Intégrer une nouvelle classe en colant le code dans le champ.
      </Text>

      <View style={{ width: "100%", gap: 12, flex: 1 }}>
        <InputText
          size={"md"}
          ref={nameRef}
          disabled={false}
          typeKeyboard="default"
          placeholder={"code de la classe"}
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Button
          full
          size={"md"}
          priority={"primary"}
          isLoading={isLoading}
          onPress={createRequest}
          label={"participer au cours"}
        />
      </View>
    </View>
  );
};

export default CreateStudentRequest;

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
