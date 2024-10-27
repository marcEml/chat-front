import * as React from "react";
import LoginScreen from "./login";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LoginMainLayout = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            header: (props) => (
              <PageHeader
                title={""}
                leftIcon="back"
                titleSize={"md"}
                showLeftIcon={true}
                leftIconPrioriry={"secondary"}
                leftIconAction={() => props.navigation.goBack()}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default LoginMainLayout;
