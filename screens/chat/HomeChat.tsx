import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useCallback, useEffect, useLayoutEffect } from "react";
import Colors from "@/constants/colors";
import IconButton from "@/components/ui/buttons/IconButton";
import { typography } from "@/constants/typography";
import { useTheme } from "@/context/ThemeContext";
import { Bubble, GiftedChat, InputToolbar, Send, SystemMessage } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const HomeChat = (props: any) => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<any>([]);
  const styles = createChatScreenStyles(theme.colors);
  const [text, setText] = useState("");
  const params = props.route.params;
  const UserClass = params.class;
  const className = UserClass.name;
  const ClassId = UserClass.id;
  const [UserName, SetUserName] = useState("");
  const [UserId, setUserId] = useState<any>();
  const [messageList, SetMessageList] = useState(UserClass.messages);
  const [image, setImage] = React.useState<any>(null);

  const socket = io(process.env.EXPO_PUBLIC_BASE_URL_WEBSOCKET);

  const appendMessage = (newMessage: any) => {
    SetMessageList((prevMessages: any) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");

    if (user) {
      const decodedUser = JSON.parse(user);
      const name = `${decodedUser.lastname} ${decodedUser.firstname}`;
      setUserId(decodedUser.id);
      SetUserName(name);
    }
  };

  function transformMessages(messages: any[]): any[] {
    return messages
      .map((message) => ({
        _id: message.id,
        text: message.content,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.sender.id,
          name: `${message.sender.firstname} ${message.sender.lastname}`,
        },
      }))
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()); // Sort by date (ascending)
  }

  useEffect(() => {
    setMessages(transformMessages(messageList).toReversed());
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messages));
  }, []);

  const submitChatMessage = (message: any) => {
    socket.emit("message", message);
  };

  const handleMessage = () => {
    const data = {
      image: image,
      name: UserName,
      content: text,
      classId: ClassId,
      userId: UserId,
    };
    submitChatMessage(JSON.stringify(data));
  };

  const isMessageIdPresent = (messages: any[], id: any): boolean => {
    const IdToCheck = id;
    return messages.some((message) => message.id === IdToCheck);
  };

  const handlereceivedMessage = useCallback(async (message: any) => {
    const decodedMessage = JSON.parse(message);

    const user = await AsyncStorage.getItem("user");

    if (user) {
      const decodedUser = JSON.parse(user);

      if (decodedMessage.userId !== decodedUser.id) {
        const data: any = {
          _id: decodedMessage.id,
          text: decodedMessage.content,
          createdAt: new Date(),
          user: {
            _id: decodedMessage.userId,
            name: decodedMessage.name,
          },
        };
        const result = isMessageIdPresent(messageList, decodedMessage.id);
        const newMessage = {
          content: decodedMessage.content,
          createdAt: new Date(),
          id: decodedMessage.id,
          sender: {
            firstname: decodedMessage.name.split(" ")[1],
            id: decodedMessage.userId,
            lastname: decodedMessage.name.split(" ")[0],
          },
        };

        if (!result) {
          onSend([data]);
        }

        appendMessage(newMessage);
      }
    }

    setTimeout(() => {}, 500);

    return () => {};
  }, []);

  useEffect(() => {
    socket.on("message", (message) => handlereceivedMessage(message));

    return () => {
      // socket.off("message", handlereceivedMessage);
    };
  }, [handlereceivedMessage]);

  const pickCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted) {
      let result: React.SetStateAction<any> = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsMultipleSelection: false,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0,
      });

      if (!result.canceled) {
        const fileContent = result.assets[0];
        setImage(fileContent.uri);
      }
    }
  };

  const pickImage = async () => {
    let result: React.SetStateAction<any> = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (!result.canceled) {
      const fileContent = result.assets[0];
      setImage(fileContent.uri);
      const blobResult = await uriToBlob(fileContent.uri);
    }
  };

  // Function to convert image URI to Blob
  const uriToBlob = (uri: any) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error("uriToBlob failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);

      xhr.send(null);
    });
  };

  return (
    <View style={{ position: "relative", flex: 1 }}>
      <Header theme={theme} title={className} props={props} />

      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <GiftedChat
          renderUsernameOnMessage={true}
          messages={messages}
          showUserAvatar={false}
          onPress={() => handleMessage()}
          placeholder="entrez votre message"
          onSend={(messages: any) => {
            onSend(messages);
            handleMessage();
          }}
          user={{
            _id: UserId,
          }}
          renderSystemMessage={(props) => <SystemMessage {...props} />}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: "white",
                    fontFamily: "CerebriSans-Book",
                  },
                  left: {
                    color: "#24204F",
                    fontFamily: "CerebriSans-Book",
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: Colors.primitives.yellow[100],
                    paddingVertical: 10,
                  },
                  right: {
                    backgroundColor: Colors.primitives.blue[800],
                  },
                }}
              />
            );
          }}
          textInputProps={styles.input}
          onInputTextChanged={(text) => setText(text)}
          renderInputToolbar={(props) => (
            <InputToolbar
              {...props}
              renderActions={() => (
                <View
                  style={{
                    height: "100%",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 8,
                  }}
                >
                  <Ionicons name="add" color={theme.colors.icon.info} size={24} />
                </View>
              )}
            />
          )}
          renderSend={(props) => (
            <View
              style={{
                height: 44,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {text.length > 0 && (
                <Send
                  {...props}
                  containerStyle={{
                    paddingRight: 14,
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="send" color={theme.colors.icon.info} size={24} />
                </Send>
              )}
              {text.length === 0 && (
                <View
                  style={{
                    gap: 14,
                    paddingRight: 12,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity onPress={pickImage}>
                    <Ionicons name="camera-outline" color={theme.colors.icon.info} size={24} />
                  </TouchableOpacity>
                  <Ionicons name="mic-outline" color={theme.colors.icon.info} size={24} />
                </View>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};

const Header = ({ theme, title, props }: { theme: any; title: string; props: any }) => {
  return (
    <View
      style={{
        paddingBottom: 8,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        justifyContent: "space-between",
        backgroundColor: theme.colors.background.secondary,
      }}
    >
      <IconButton
        icon={"back"}
        size={"sm"}
        priority={"secondary"}
        onPress={() => props.navigation.goBack()}
      />
      <Text style={[typography.labelMdBold]}>{title}</Text>
      <IconButton icon={"threeDots"} size={"sm"} priority={"tertiary"} />
    </View>
  );
};

export default HomeChat;

const createChatScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    input: {
      flex: 1,
      borderRadius: 24,
      paddingHorizontal: 10,
      backgroundColor: theme.background.primary,
      marginRight: 12,
    },
  });
