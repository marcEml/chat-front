import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import MainLayout from "@/screens/MainLayout";
import { StyleSheet, View, Text } from "react-native";
import { ToastProvider } from "@/context/ToastContext";
import useLoadResources from "../hooks/useLoadResources";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import socket from "../utils/socket";
// import io from "socket.io-client";

export default function App() {
  const { isReady, onLayoutRootView } = useLoadResources();
  const { theme } = useTheme();

  // const connectToServer = () => {
  //   const socket = io("http://10.16.137.6:3000/");
  // };

  useEffect(() => {
    // connectToServer();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ToastProvider>
          <ThemeProvider>
            <View
              style={[styles.container, { backgroundColor: theme.colors.background.primary }]}
              onLayout={onLayoutRootView}
            >
              <MainLayout />
              <StatusBar translucent={true} backgroundColor="transparent" style="auto" />
            </View>
          </ThemeProvider>
        </ToastProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
});
