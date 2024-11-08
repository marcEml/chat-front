import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { ScrollView, StyleSheet, View, Text, RefreshControl } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { typography } from "@/constants/typography";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "@/components/ui/buttons/Button";
import { ResponseError, ClassData } from "../../../helpers/apiInterface";
import GetClass from "@/helpers/api/student/getClass";
import { useToast } from "@/context/ToastContext";
import IconButton from "@/components/ui/buttons/IconButton";
import { useFocusEffect } from "expo-router";

const StudentHomeScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const IconBook = iconsMapping["BookIcon"];
  const { showToast } = useToast();
  const [userClass, setUserClass] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    getClass();
  }, []);

  const getClass = async () => {
    try {
      const responseData: ClassData | ResponseError = await GetClass();
     

      if (responseData.status && "class" in responseData.data) {
        setUserClass(responseData.data.class);
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
      getClass();
    }, [])
  );

  // FUNCTIONS
  const onRefresh = React.useCallback(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    setRefreshing(true);
    await getClass();
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
            { color: theme.colors.text.secondary, marginBottom: 12 },
          ]}
        >
          Vous trouverez ci-dessous la liste des cours que vous suivez. Faites une demande pour
          intégrer une nouvelle classe
        </Text>

     

        <View style={{ width: "100%", flex: 1, minHeight: "70%" }}>
        <Text
                style={[
                  typography.labelSmRegular,
                  { color: theme.colors.text.primary, textAlign: "center", marginVertical: 12 },
                ]}
              >
                Vous ne participez à {"\n"} aucun cours pour le moment
              </Text>
          {userClass.length === 0 ? (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
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

              <Text
                style={[
                  typography.labelSmRegular,
                  { color: theme.colors.text.primary, textAlign: "center", marginVertical: 12 },
                ]}
              >
                Vous ne participez à {"\n"} aucun cours pour le moment
              </Text>

              <Button
                size={"md"}
                priority={"primary"}
                label={"Participer à un cours"}
                onPress={() => props.navigation.navigate("CreateStudentRequest")}
              />
            </View>
          ) : (
            userClass.map((userclass: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  props.navigation.navigate("StudentInfoClass", {
                    class: userclass,
                  })
                }
                style={{
                  gap: 8,
                  marginBottom: 12,
                  borderRadius: 8,
                  paddingVertical: 8,
                  flexDirection: "row",
                  paddingHorizontal: 8,
                  backgroundColor: theme.colors.background.primary,
                  alignItems: "center",
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
                  <Text style={[typography.labelLgBold, { color: theme.colors.text.primary }]}>
                    {userclass.class.name}
                  </Text>
                  <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                    {`${userclass.class.teacher.lastname} ${userclass.class.teacher.firstname}`}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>

      {userClass.length !== 0 && (
        <View style={styles.bottomButtonContainer}>
          <IconButton
            size={"md"}
            icon={"plus"}
            priority={"primary"}
            onPress={() => props.navigation.navigate("CreateStudentRequest")}
          />
        </View>
      )}
    </>
  );
};

export default StudentHomeScreen;

const createHomeScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      gap: 8,
      flex: 1,
      height: "100%",
      paddingHorizontal: 15,
      backgroundColor: theme.background.secondary,
    },

    bottomButtonContainer: {
      position: "absolute",
      bottom: 20,
      right: 20,
      alignItems: "center",
    },
  });
