import * as React from "react";
import Colors from "@/constants/colors";

import { StyleSheet } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import navIconsMapping from "@/assets/icons/svg/mapping/navIconsMapping";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useResponsive } from "@/helpers/responsive/metrix";
import ClasseLayout from "./classes/ReasearchLayout";
import DemandeLayout from "./demandes/DemandesLayout";
import AccountLayout from "./mon compte/ReasearchLayout";
import NotificationLayoutTeacher from "./notifications/NotificationLayout";

const Tab = createBottomTabNavigator();

const TeacherNavigationTabs = (props: any) => {
  const { theme } = useTheme();

  const styles = createPassengerNavigationTabsStyles(theme.colors);

  const FaqMenuItem = navIconsMapping["faq"];
  const RechercheMenuItem = navIconsMapping["recherche"];
  const ReservationMenuItem = navIconsMapping["reservation"];
  const MonCompteMenuItem = navIconsMapping["moncompte-driver"];

  const navigationTabsScreens = [
    {
      key: 0,
      name: "MesClasses",
      component: ClasseLayout,
      tabBarIcon: (focused: boolean) => <RechercheMenuItem focused={focused} dark={theme.dark} />,
    },
    {
      key: 1,
      name: "MyTrips",
      component: DemandeLayout,
      tabBarIcon: (focused: boolean) => <ReservationMenuItem focused={focused} dark={theme.dark} />,
    },
    {
      key: 2,
      name: "Faq",
      component: NotificationLayoutTeacher,
      tabBarIcon: (focused: boolean) => <FaqMenuItem focused={focused} dark={theme.dark} />,
    },
    {
      key: 3,
      name: "AccountLayout",
      component: AccountLayout,
      tabBarIcon: (focused: boolean) => <MonCompteMenuItem focused={focused} dark={theme.dark} />,
    },
  ];

  // -----------> use effect

  return (
    <Tab.Navigator
      initialRouteName="MesClasses"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tab,
      }}
    >
      {navigationTabsScreens.map((screen) => (
        <Tab.Screen
          key={screen.key}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarIcon: (props) => screen.tabBarIcon(props.focused),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const createPassengerNavigationTabsStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    tab: {
      borderTopColor: theme.border.emphasize,
      height: useResponsive.verticalScale(54),
      paddingTop: 28,
      backgroundColor: theme.background.secondary,
    },
  });

export default TeacherNavigationTabs;
