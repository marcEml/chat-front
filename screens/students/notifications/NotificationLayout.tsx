import * as React from "react";
import StudentNotification from "./home";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const NotificationLayoutStudent = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="StudentNotification">
      <Stack.Screen
        name="StudentNotification"
        component={StudentNotification}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
              title={"Mes notifications"}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationLayoutStudent;
