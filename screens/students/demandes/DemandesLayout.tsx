import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DemandesHomeScreen from "./home";

const Stack = createNativeStackNavigator();

const DemandeLayout = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="DemandesHomeScreen">
      <Stack.Screen
        name="DemandesHomeScreen"
        component={DemandesHomeScreen}
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
    </Stack.Navigator>
  );
};

export default DemandeLayout;
