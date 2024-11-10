import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherNotification from "./home";

const Stack = createNativeStackNavigator();

const NotificationLayoutTeacher = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="TeacherNotification">
      <Stack.Screen
        name="TeacherNotification"
        component={TeacherNotification}
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

export default NotificationLayoutTeacher;
