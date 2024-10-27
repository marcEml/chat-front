import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentHomeScreen from "./home";
import CreateStudentRequest from "./CreateStudentRequest";
import StudentInfoClass from "./classInfo";
import ListOfClass from "./students";
import ViewFile from "./viewFile";

const Stack = createNativeStackNavigator();

const ClasseLayout = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="StudentHomeScreen">
      <Stack.Screen
        name="StudentHomeScreen"
        component={StudentHomeScreen}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              title={"Mes classes"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CreateStudentRequest"
        component={CreateStudentRequest}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              leftIcon="back"
              showLeftIcon={true}
              showBorderBottom={false}
              title={"Intégrer une classe"}
              leftIconPrioriry={"secondary"}
              leftIconAction={() => props.navigation.navigate("Students")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="StudentInfoClass"
        component={StudentInfoClass}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              leftIcon="back"
              showLeftIcon={true}
              showBorderBottom={false}
              title={"Intégrer une classe"}
              leftIconPrioriry={"secondary"}
              leftIconAction={() => props.navigation.navigate("Students")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="ListOfClass"
        component={ListOfClass}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              leftIcon="back"
              showLeftIcon={true}
              showBorderBottom={false}
              title={"Intégrer une classe"}
              leftIconPrioriry={"secondary"}
              leftIconAction={() => props.navigation.goBack()}
            />
          ),
        }}
      />
     
      <Stack.Screen
        name="viewFile"
        component={ViewFile}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              leftIcon="back"
              showLeftIcon={true}
              showBorderBottom={false}
              title={"Votre document"}
              leftIconPrioriry={"secondary"}
              leftIconAction={() => props.navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ClasseLayout;
