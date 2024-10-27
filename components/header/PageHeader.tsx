import * as React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import IconButton from "@/components/ui/buttons/IconButton";
import { View, Text, StyleSheet, GestureResponderEvent } from "react-native";

type PageHeaderProp = {
  title: string;
  color?: string;
  isStep?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  paddingTop?: number;
  titleSize?: "md" | "xl";
  showBorderBottom?: boolean;
  priority?: "secondary" | "tertiary";
  leftIconAction?: (event: GestureResponderEvent) => void;
  leftIconPrioriry?: "primary" | "secondary" | "tertiary";
  rightIconPrioriry?: "primary" | "secondary" | "tertiary";
  rightIconAction?: (event: GestureResponderEvent) => void;
};

const PageHeader = (props: PageHeaderProp) => {
  const { priority } = props;
  const { theme } = useTheme();

  const styles = createTabStyles(
    props.showBorderBottom ?? false,
    props.color ?? theme.colors.background.secondary,
    theme.colors
  );

  const titleStyle =
    props.titleSize === "md" ? (props.isStep ? styles.titleStep : styles.titleS) : styles.titleB;

  return (
    <>
      <View style={[styles.header, { paddingTop: props.paddingTop ?? 10 }]}>
        {props.showLeftIcon && (
          <IconButton
            size={"sm"}
            onPress={props.leftIconAction}
            icon={props.leftIcon ?? "plus"}
            iconColor={theme.colors.icon.primary}
            priority={props.leftIconPrioriry ?? "tertiary"}
          />
        )}

        <Text style={titleStyle}>{props.title}</Text>

        {props.showRightIcon && (
          <IconButton
            size={"sm"}
            onPress={props.rightIconAction}
            icon={props.rightIcon ?? "plus"}
            iconColor={theme.colors.icon.primary}
            priority={props.rightIconPrioriry ?? "tertiary"}
          />
        )}
      </View>
    </>
  );
};

export default PageHeader;

const createTabStyles = (
  showBB: boolean,
  color: string,
  theme: typeof Colors.light & typeof Colors.dark
) =>
  StyleSheet.create({
    header: {
      gap: 8,
      paddingBottom: 8,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      // justifyContent: "space-between",
      borderBottomWidth: showBB ? 1 : 0,
      borderBottomColor: theme.border.default,
      backgroundColor: color,
    },

    titleB: {
      ...typography.h2,
      color: theme.text.primary,
    },

    titleS: {
      color: theme.text.primary,
      ...typography.labelLgMedium,
    },

    titleStep: {
      ...typography.labelMdRegular,
      color: theme.text.secondary,
    },
  });
