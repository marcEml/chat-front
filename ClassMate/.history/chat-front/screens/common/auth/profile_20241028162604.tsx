import * as React from "react";
import Colors from "@/constants/colors";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  GestureResponderEvent,
  ScrollView,
  TouchableOpacity,
  Easing,
} from "react-native";
import { useTheme } from "@/context/ThemeContext";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import RadioButton from "@/components/ui/checkbox/RadioButton";
import { typography } from "@/constants/typography";
import { useResponsive } from "@/helpers/responsive/metrix";
import Button from "@/components/ui/buttons/Button";

const ProfileScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = createResearchScreenStyles(theme.colors);

  // state variables
  const [check2, setCheck2] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [activeMode, setActiveMode] = React.useState<"teacher" | "student" | null>(null);

  // ref
  const borderColorAnim = React.useRef({
    teacher: new Animated.Value(0),
    student: new Animated.Value(0),
  }).current;

  // use effect
  React.useEffect(() => {
    if (activeMode === "teacher") {
      setCheck1(true);
      setCheck2(false);
    }
    if (activeMode === "student") {
      setCheck1(false);
      setCheck2(true);
    }
  }, [activeMode]);

  React.useEffect(() => {
    Animated.timing(borderColorAnim.teacher, {
      toValue: activeMode === "teacher" ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    Animated.timing(borderColorAnim.student, {
      toValue: activeMode === "student" ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [activeMode, borderColorAnim]);

  // interpolation
  const borderColorPassenger = borderColorAnim.teacher.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.border.default, theme.colors.brand.primary],
  });

  const borderColorDriver = borderColorAnim.student.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.border.default, theme.colors.brand.primary],
  });

  // set usage
  const msetUsage = async () => {
    if (activeMode === "teacher") {
      props.navigation.navigate("TeacherInformationScreen");
    } else {
      props.navigation.navigate("StudentInformationScreen");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.bloc}>
          <Text style={[typography.h1, { color: theme.colors.text.primary }]}>
            Quel est votre profil?
          </Text>
            
        </View>

        <View style={styles.bloc}>
          <UsageComponent
            active={check1}
            styles={styles}
            label="Enseignant"
            theme={theme.colors}
            Icon={"passenger"}
            borderColor={borderColorPassenger}
            onPress={() => setActiveMode("teacher")}
          />

          <UsageComponent
            active={check2}
            styles={styles}
            Icon={"driver"}
            label="Étudiant"
            theme={theme.colors}
            borderColor={borderColorDriver}
            onPress={() => setActiveMode("student")}
          />
        </View>

        <View style={styles.footer}>
          <Button
            full={true}
            size={"md"}
            label={"Terminer"}
            onPress={msetUsage}
            priority={"primary"}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const UsageComponent = ({
  Icon,
  theme,
  label,
  styles,
  active,
  onPress,
  borderColor,
}: {
  Icon: string;
  styles: any;
  label: string;
  active: boolean;
  theme: typeof Colors.light & typeof Colors.dark;
  onPress?: (event: GestureResponderEvent) => void;
  borderColor: Animated.AnimatedInterpolation<string | number>;
}) => {
  const PassengerIcon = iconsMapping["twoUsers"];
  const DriverIcon = iconsMapping["car"];

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Animated.View style={[styles.usage, { borderColor }]}>
        <View style={styles.titleRow}>
          <View style={styles.title}>
            {Icon === "passenger" && <PassengerIcon color={theme.icon.secondary} size={"md"} />}

            {Icon === "driver" && <DriverIcon color={theme.icon.secondary} size={"md"} />}

            <Text style={[typography.labelLgMedium, { color: theme.text.primary }]}>{label}</Text>
          </View>

          <RadioButton state={active ? "active" : "default"} onPress={onPress} />
        </View>
        
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ProfileScreen;

const createResearchScreenStyles = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background.secondary,
    },

    content: {
      flex: 1,
      gap: 32,
      width: "100%",
      paddingTop: 30,
      alignItems: "center",
      paddingBottom: useResponsive.verticalScale(20),
      paddingHorizontal: 20,
    },

    bloc: {
      gap: 12,
      width: "100%",
    },

    usage: {
      width: "100%",
      borderWidth: 1.5,
      borderRadius: 16,
      gap: useResponsive.verticalScale(12),
      paddingVertical: useResponsive.verticalScale(20),
      paddingHorizontal: 20,
    },

    titleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    title: {
      alignItems: "center",
      flexDirection: "row",
      gap: 12,
    },

    footer: {
      flex: 1,
      gap: 16,
      width: "100%",
      justifyContent: "flex-end",
    },
  });
