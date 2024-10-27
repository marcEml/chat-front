import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { StyleSheet, StatusBar } from "react-native";
import SplashScreen from "./common/splash/SplashScreen";
import { useResponsive } from "@/helpers/responsive/metrix";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./common/splash/welcomeScreen";
import ProfileScreen from "./common/auth/profile";
import LoginMainLayout from "./auth/login";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TeacherInformationScreen from "./auth/teachers/Informations";
import TeacherPasswordScreen from "./auth/teachers/Password";
import StudentInformationScreen from "./auth/students/Informations";
import StudentPasswordScreen from "./auth/students/Password";
import StudentsNavigationTabs from "./students/StudentsNavigationTabs";
import TeacherNavigationTabs from "./teachers/TeacherNavigationTabs";
import HomeChat from "./chat/HomeChat";
import HomeChatStudents from "./chat/HomeChatStudents";

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <GestureHandlerRootView>
      <>
        <StatusBar
          backgroundColor={!theme.dark ? "#fff" : "#000"}
          barStyle={!theme.dark ? "dark-content" : "light-content"}
        />
      </>

      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="TeacherInformationScreen"
          component={TeacherInformationScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="StudentInformationScreen"
          component={StudentInformationScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="TeacherPasswordScreen"
          component={TeacherPasswordScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="StudentPasswordScreen"
          component={StudentPasswordScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="HomeChat"
          component={HomeChat}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="HomeChatStudents"
          component={HomeChatStudents}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="Students"
          component={StudentsNavigationTabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />

        <Stack.Screen
          name="Teachers"
          component={TeacherNavigationTabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />

        <Stack.Group>
          <Stack.Screen
            name="LoginMainLayout"
            component={LoginMainLayout}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default MainLayout;

const createStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    containerBottomSheet: {
      width: "100%",
      height: "100%",
      gap: useResponsive.verticalScale(24),
      paddingVertical: useResponsive.verticalScale(10),
      paddingHorizontal: useResponsive.horizontalScale(10),
    },

    BottomSheetStyle: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: theme.background.secondary,
    },
  });
