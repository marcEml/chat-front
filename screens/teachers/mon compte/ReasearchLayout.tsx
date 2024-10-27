import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherAccount from "./home";

const Stack = createNativeStackNavigator();

const AccountLayout = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="TeacherAccount">
      <Stack.Screen
        name="TeacherAccount"
        component={TeacherAccount}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              title={"Mon compte"}
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

export default AccountLayout;
