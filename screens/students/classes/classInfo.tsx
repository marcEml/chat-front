import * as React from "react";
import Colors from "@/constants/colors";
import { useToast } from "@/context/ToastContext";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import Button from "@/components/ui/buttons/Button";
import { StyleSheet, View, Text, TouchableOpacity, Platform } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import Svg, { Path } from "react-native-svg";
import * as Clipboard from "expo-clipboard";
import * as FileSystem from "expo-file-system";
import CryptoJS from "crypto-js";
import { shareAsync } from "expo-sharing";
import { Ionicons } from "@expo/vector-icons";
import { Swing } from "react-native-animated-spinkit";
import { ScrollView } from "react-native-gesture-handler";

const IconBook = iconsMapping["BookIcon"];

const StudentInfoClass = (props: any) => {
  const { theme } = useTheme();
  const styles = createHomeScreenStyles(theme.colors);
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const params = props.route.params;
  const [teacherClass, setTeacherClass] = React.useState(params.class);

  const downloadFromUrl = async (link: string) => {
    const filename = "image.png";
    setIsLoading(true);

    const result = await FileSystem.downloadAsync(link, FileSystem.documentDirectory + filename);

    setIsLoading(false);

    save(result.uri, filename, result.headers["Content-Type"]);
  };

  const save = async (uri: any, filename: any, mimetype: any) => {
    if (Platform.OS === "android") {
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          filename,
          mimetype
        )
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, {
              encoding: FileSystem.EncodingType.Base64,
            });
          })
          .catch((e) => console.log(e));
      } else {
        shareAsync(uri);
      }
    } else {
      shareAsync(uri);
    }
  };

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  const shareCode = (id: string) => {
    const codeClass = {
      classId: id,
    };

    const secretKey = "access__class";
    const codeClassString = JSON.stringify(codeClass);
    const encryptedCodeClass = CryptoJS.AES.encrypt(codeClassString, secretKey).toString();
    copyToClipboard(encryptedCodeClass);
    showToast("default", "code copié dans le presse papier");
  };

  console.log(teacherClass.class);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screenContainer}>
      <Text
        style={[
          typography.labelSmRegular,
          { color: theme.colors.text.secondary, marginBottom: 12 },
        ]}
      >
        Retrouvez toutes les infos de votre classe.
      </Text>

      <View style={{ width: "100%", gap: 12, flex: 1, marginTop: 12 }}>
        <View
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
              {teacherClass.class.name}
            </Text>
            <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
              Année {teacherClass.year}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={[typography.labelMdBold, { color: theme.colors.text.primary }]}>
            Vos documents
          </Text>

          {teacherClass.class.evaluations.length === 0 ? (
            <View style={{ marginBottom: 18 }}>
              <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                Vous n'avez pas de document pour le moment
              </Text>
            </View>
          ) : (
            teacherClass.class.documents.map((doc: any, index: number) => (
              <Document
                key={index}
                theme={theme}
                docName={doc.title}
                isLoading={isLoading}
                onPress={() => downloadFromUrl(doc.content)}
              />
            ))
          )}
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={[typography.labelMdBold, { color: theme.colors.text.primary }]}>
            Vos Évaluations
          </Text>

          {teacherClass.class.evaluations.length === 0 ? (
            <View style={{ marginBottom: 18 }}>
              <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                Vous n'avez pas d'évaluation pour le moment
              </Text>
            </View>
          ) : (
            teacherClass.class.evaluations.map((doc: any, index: number) => (
              <Document
                key={index}
                theme={theme}
                docName={doc.title}
                isLoading={isLoading}
                onPress={() => downloadFromUrl(doc.content)}
              />
            ))
          )}
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={[typography.labelMdBold, { color: theme.colors.text.primary }]}>
            Liste de classe
          </Text>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ListOfClass", {
                class: teacherClass,
              })
            }
            style={{
              gap: 12,
              marginTop: 12,
              borderRadius: 8,
              marginBottom: 18,
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
                backgroundColor: Colors.primitives.blue[100],
              }}
            >
              <IconBook size="md" color={Colors.primitives.blue[500]} />
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Text style={[typography.labelLgBold, { color: theme.colors.text.primary }]}>
                  Étudiants inscrits au cours
                </Text>
                <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                  voir plus
                </Text>
              </View>

              <Svg viewBox="0 0 24 24" width={24} height={24}>
                <Path
                  fill={theme.colors.icon.secondary}
                  d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <Button
            full
            size={"md"}
            priority={"primary"}
            isLoading={isLoading}
            onPress={() => shareCode(teacherClass.id)}
            label={"Copier le code dans le presse papier"}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("HomeChatStudents", {
              class: teacherClass,
            })
          }
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text style={[typography.labelLgBold, { color: theme.colors.text.primary }]}>
                Discussion de la classe
              </Text>
              <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
                accéder à la conversation
              </Text>
            </View>

            <Svg viewBox="0 0 24 24" width={24} height={24}>
              <Path
                fill={theme.colors.icon.secondary}
                d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const Document = ({
  theme,
  docName,
  onPress,
  isLoading,
}: {
  theme: any;
  onPress: any;
  docName: string;
  isLoading: boolean;
}) => {
  return (
    <View
      style={{
        gap: 12,
        marginTop: 12,
        borderRadius: 8,
        marginBottom: 18,
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
          backgroundColor: Colors.primitives.purple[100],
        }}
      >
        <IconBook size="md" color={Colors.primitives.purple[500]} />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text style={[typography.labelLgBold, { color: theme.colors.text.primary }]}>
            {docName}
          </Text>
          <Text style={[typography.labelSmRegular, { color: theme.colors.text.secondary }]}>
            Cliquez pour télécharger
          </Text>
        </View>

        <TouchableOpacity onPress={onPress}>
          {!isLoading ? (
            <Ionicons name="download" color={theme.colors.icon.info} size={24} />
          ) : (
            <Swing size={20} color={theme.colors.icon.info} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudentInfoClass;

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

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
