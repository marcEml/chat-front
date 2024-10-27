import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { ScrollView, StyleSheet, View, Text, RefreshControl } from "react-native";
import { typography } from "@/constants/typography";
import GetClassRequests from "@/helpers/api/teacher/getRequest";
import { RequestData, ResponseError } from "@/helpers/apiInterface";
import { useToast } from "@/context/ToastContext";
import { useFocusEffect } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const TeacherDemandesHomeScreen = (props: any) => {
  const { theme } = useTheme();
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
      const responseData: RequestData | ResponseError = await GetClassRequests();

      if (responseData.status && "requests" in responseData.data) {
        console.log(responseData.data.requests);
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
          Retrouvez toute les demandes d'intégration à vos classes.
        </Text>

        <View style={{ width: "100%", gap: 12, flex: 1, marginTop: 12 }}>
          {requests.length === 0 ? (
            <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
              Vous n'avez pas d'étudiants dans ce cours
            </Text>
          ) : (
            requests.map((user: any, index: number) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("PendingRequest", {
                    user: user,
                  })
                }
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
                    backgroundColor: Colors.primitives.green[100],
                  }}
                >
                  <Svg height={24} width={24} data-name="Layer 1" viewBox="0 0 24 24">
                    <Path
                      fill={Colors.primitives.green[500]}
                      d="M12.006,12.309c3.611-.021,5.555-1.971,5.622-5.671-.062-3.56-2.111-5.614-5.634-5.637-3.561,.022-5.622,2.122-5.622,5.672s2.062,5.615,5.634,5.636Z"
                    />
                    <Path
                      fill={Colors.primitives.green[500]}
                      d="M11.994,13.661c-5.328,.034-8.195,2.911-8.291,8.322-.004,.268,.099,.527,.287,.718s.445,.299,.713,.299h14.595c.268,0,.525-.108,.713-.299,.188-.191,.291-.45,.287-.718-.092-5.333-3.036-8.288-8.304-8.322Z"
                    />
                  </Svg>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Text style={[typography.labelLgBold, { color: theme.colors.text.primary }]}>
                    {`${user.user.lastname} ${user.user.firstname}`}
                  </Text>
                  <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                    {user.status === "PENDING" ? "En attente d'acceptation" : "accepté"}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default TeacherDemandesHomeScreen;

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
