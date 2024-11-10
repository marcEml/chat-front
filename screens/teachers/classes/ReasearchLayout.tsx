import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import PageHeader from "@/components/header/PageHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherHomeScreen from "./home";
import CreateClass from "./CreateClass";
import InfoClass from "./classInfo";
import StudentsClass from "./students";
import CreateDoc from "./CreateDocs";
import CreateExam from "./CreateExams";
import CreateNotif from "./CreateNotification";

const Stack = createNativeStackNavigator();

const ClasseLayout = (props: any) => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator initialRouteName="TeacherHomeScreen">
      <Stack.Screen
        name="TeacherHomeScreen"
        component={TeacherHomeScreen}
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
        name="CreateClass"
        component={CreateClass}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              title={"Créer une classe"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CreateDoc"
        component={CreateDoc}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
              title={"Ajouter un document"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CreateExam"
        component={CreateExam}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
              title={"Ajouter une évaluation"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="InfoClass"
        component={InfoClass}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              title={"Détails de la classe"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
            />
          ),
        }}
      />

      <Stack.Screen
        name="StudentsClass"
        component={StudentsClass}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              title={"Vos Étudiants"}
              showLeftIcon={false}
              showRightIcon={false}
              showBorderBottom={false}
            />
          ),
        }}
      />
      
      <Stack.Screen
        name="CreateNotif"
        component={CreateNotif}
        options={{
          gestureEnabled: false,
          header: () => (
            <PageHeader
              titleSize={"xl"}
              showLeftIcon={false}
              showRightIcon={false}
              title={"Notifications"}
              showBorderBottom={false}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ClasseLayout;
