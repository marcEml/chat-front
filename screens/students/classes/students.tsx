import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const ListOfClass = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const params = props.route.params;
  const [students, setStudents] = React.useState(params.class.class.students);

  return (
    <View style={styles.screenContainer}>
      <Text
        style={[
          typography.labelSmRegular,
          { color: theme.colors.text.secondary, marginBottom: 12 },
        ]}
      >
        Retrouvez la liste de tous les étudiants inscrits à ce cours.
      </Text>

      <View style={{ width: "100%", gap: 12, flex: 1, marginTop: 12 }}>
        {students.length === 0 ? (
          <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
            Vous n'avez pas d'étudiants dans ce cours
          </Text>
        ) : (
          students.map((user: any, index: number) => (
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
                  {user.user.phone}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default ListOfClass;

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
