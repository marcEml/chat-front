import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

import { typography } from "@/constants/typography";
import axios from "axios";
import { useToast } from "@/context/ToastContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useFocusEffect } from "@react-navigation/native";

const TeacherNotification = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const { showToast } = useToast();
  const IconBook = iconsMapping["BookIcon"];
  const [refreshing, setRefreshing] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    getTeacherNotifications();
  }, []);

  const getTeacherNotifications = async () => {
    const user = await AsyncStorage.getItem("user");

    if (user) {
      const id = JSON.parse(user).id;

      try {
        // Define the API endpoint
        const url = `${process.env.EXPO_PUBLIC_BASE_URL_LOCAL}/teacher/${id}/notifications`;

        const response = await axios.get(url);

        if (response.status === 200 && response.data.status) {
          setNotifications(response.data.data.notifications);
        } else {
          showToast(
            "critical",
            "Une erreur s'est produite lors de la récupération des notifications"
          );
        }
      } catch (error) {
        console.error(error);
        showToast("critical", "Impossible de récupérer les notifications");
      }
    }
  };

  // get back

  useFocusEffect(
    React.useCallback(() => {
      getTeacherNotifications();
    }, [])
  );

  // FUNCTIONS
  const onRefresh = React.useCallback(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    setRefreshing(true);
    await getTeacherNotifications();
    setRefreshing(false);
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={{ width: "100%", flex: 1, minHeight: "95%" }}>
          <Text
            style={[
              typography.labelSmRegular,
              { color: theme.colors.text.secondary, marginBottom: 12 },
            ]}
          >
            Vous trouverez ici toute les notifications que vous avez envoyées
          </Text>

          {notifications.map((notif, index) => (
            <View
              key={index}
              style={{
                gap: 12,
                marginBottom: 12,
                borderRadius: 8,
                paddingVertical: 8,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 8,
                backgroundColor: theme.colors.background.primary,
              }}
            >
              <View
                style={{
                  width: 42,
                  height: 42,
                  paddingLeft: 2,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primitives.orange[100],
                }}
              >
                <IconBook size="md" color={Colors.primitives.orange[500]} />
              </View>

              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Text
                  style={[
                    typography.labelLgBold,
                    { color: theme.colors.text.primary, maxWidth: 240 },
                  ]}
                >
                  {notif["content"]}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default TeacherNotification;

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
