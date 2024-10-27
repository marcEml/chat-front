import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { ScrollView, StyleSheet, View, Text, RefreshControl, TouchableOpacity } from "react-native";
import { typography } from "@/constants/typography";
import { useToast } from "@/context/ToastContext";
import GetStudentClassRequests from "@/helpers/api/student/getRequest";
import { RequestData, ResponseError } from "@/helpers/apiInterface";
import { useFocusEffect } from "expo-router";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";

const DemandesHomeScreen = (props: any) => {
  const { theme } = useTheme();
  const IconBook = iconsMapping["BookIcon"];
  const styles = createHomeScreenStyles(theme.colors);
  const [requests, setRequest] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const { showToast } = useToast();

  // -----------> use effect
  React.useEffect(() => {
    GetRequets();
  }, []);

  const GetRequets = async () => {
    try {
      const responseData: RequestData | ResponseError = await GetStudentClassRequests();

      if (responseData.status && "requests" in responseData.data) {
        setRequest(responseData.data.requests);
      }

      if (!responseData.status) {
        showToast("critical", responseData.data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  // get back

  useFocusEffect(
    React.useCallback(() => {
      GetRequets();
    }, [])
  );

  // FUNCTIONS
  const onRefresh = React.useCallback(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    setRefreshing(true);
    await GetRequets();
    setRefreshing(false);
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Text
          style={[
            typography.labelSmRegular,
            { color: theme.colors.text.secondary, marginBottom: 20 },
          ]}
        >
          Retrouvez toute vos demandes d'intégration à des classes.
        </Text>

        <View style={{ width: "100%", gap: 12, flex: 1, marginTop: 12 }}>
          {requests.length === 0 ? (
            <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
              Vous n'avez aucune demande d'intégration pour le moment
            </Text>
          ) : (
            requests.map((request: any, index: number) => (
              <View
                key={index}
                style={{
                  gap: 12,
                  borderRadius: 8,
                  marginBottom: 12,
                  paddingVertical: 8,
                  flexDirection: "row",
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
                    backgroundColor: Colors.primitives.red[100],
                  }}
                >
                  <IconBook size="md" color={Colors.primitives.red[500]} />
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Text style={[typography.labelLgBold, { color: theme.colors.text.primary }]}>
                    {`${request.class.name}`}
                  </Text>

                  <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                    {`${request.class.teacher.lastname} ${request.class.teacher.firstname}`}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default DemandesHomeScreen;

const createHomeScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      flex: 1,
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
