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

const CreateClass = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const { showToast } = useToast();
  const nameRef: any = React.useRef(null);
  const yearRef: any = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const getClass = async () => {
    try {
      setIsLoading(true);

      const responseData: ClassData | ResponseError = await CreateTeacherClass({
        name: nameRef.current?.getValue(),
        year: yearRef.current?.getValue(),
      });

      if (responseData.status && "class" in responseData.data) {
        showToast("success", "Classe créee avec succès");
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
  };

  return (
    <View style={styles.screenContainer}>
      <Text
        style={[
          typography.labelSmRegular,
          { color: theme.colors.text.secondary, marginBottom: 12 },
        ]}
      >
        Créez une nouvelle classe et partagez le lien d'intégration.
      </Text>

      <View style={{ width: "100%", gap: 12, flex: 1 }}>
        <InputText
          size={"md"}
          ref={nameRef}
          disabled={false}
          typeKeyboard="default"
          label={"Nom de la classe"}
          placeholder={"Analyse de données"}
        />

        <InputText
          size={"md"}
          ref={yearRef}
          label={"Année"}
          disabled={false}
          placeholder={"2024"}
          typeKeyboard={"number-pad"}
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Button
          full
          size={"md"}
          onPress={getClass}
          priority={"primary"}
          isLoading={isLoading}
          label={"Créer la classe"}
        />
      </View>
    </View>
  );
};

export default CreateClass;

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
