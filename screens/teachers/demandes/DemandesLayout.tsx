import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherDemandesHomeScreen from "./home";
import PendingRequest from "./pendingRequest";

const Stack = createNativeStackNavigator();

const DemandeLayout = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="TeacherDemandesHomeScreen">
      <Stack.Screen
        name="DemandesHomeScreen"
        component={TeacherDemandesHomeScreen}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              title={"Mes demandes"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
            />
          ),
        }}
      />
     
      <Stack.Screen
        name="PendingRequest"
        component={PendingRequest}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
              title={"Demande d'accès"}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default DemandeLayout;
