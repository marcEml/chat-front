import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { typography } from "@/constants/typography";
import { useToast } from "@/context/ToastContext";
import Avatar from "@/components/ui/avatar/Avatar";
import Button from "@/components/ui/buttons/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const StudentAccount = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const [UserName, SetUserName] = useState("");

  const logOut = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("WelcomeScreen");
  };

  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");

    if (user) {
      const decodedUser = JSON.parse(user);
      const name = `${decodedUser.lastname} ${decodedUser.firstname}`;
      SetUserName(name);
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", flex: 1, minHeight: "95%" }}>
          <Text
            style={[
              typography.labelSmRegular,
              { color: theme.colors.text.secondary, marginBottom: 12 },
            ]}
          >
            Vous trouverez ici toute les informations vous concernant
          </Text>

          <View style={{ width: "100%", alignItems: "center", marginTop: 20, gap: 8 }}>
            <Avatar size={"xl"} url={""} type={"photo"} />
            <Text style={[typography.labelLgBold, { maxWidth: 200 }]}>{UserName}</Text>
          </View>
          <Button size={"md"} label={"Se déconnecter"} priority={"secondary"} onPress={logOut} />
        </View>
      </ScrollView>
    </>
  );
};

export default StudentAccount;

const createHomeScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      gap: 8,
      flex: 1,
      height: "100%",
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
