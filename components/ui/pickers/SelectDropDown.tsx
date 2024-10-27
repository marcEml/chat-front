import React, {
    useRef,
    useMemo,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from "react";
import {
    View,
    Text,
    Easing,
    Animated,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    GestureResponderEvent,
} from "react-native";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type SelectDropDownProps = {
    label?: string;
    gender?: string;
    disabled: boolean;
    size: "md" | "lg";
    rightIcon?: string;
    placeholder?: string;
    errorMessage?: string;
    onPress?: (event: GestureResponderEvent) => void;
};

const SelectDropDown = forwardRef(
    (
        {
            size,
            label,
            onPress,
            disabled,
            gender,
            rightIcon,
            placeholder,
            errorMessage,
        }: SelectDropDownProps,
        ref
    ) => {
        const { theme } = useTheme();

        const IconRightComponent = useMemo(
            () => iconsMapping[rightIcon || ""],
            [rightIcon]
        );

        const InputStyles = useMemo(
            () => createSelectDropDownStyles(theme.colors, size),
            [theme.colors, size]
        );

        const borderColorAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(borderColorAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: false,
            }).start();
        }, [borderColorAnim]);

        const borderColor = borderColorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [theme.colors.border.default, theme.colors.border.strong],
        });

        useImperativeHandle(ref, () => ({
            getValue: () => gender,
        }));

        return (
            <>
                <View style={InputStyles.container}>
                    {label && (
                        <Text
                            style={[
                                typography.labelSmRegular,
                                {
                                    color: disabled
                                        ? theme.colors.text.disabled
                                        : theme.colors.text.secondary,
                                    marginLeft: useResponsive.horizontalScale(10),
                                },
                            ]}
                        >
                            {label}
                        </Text>
                    )}

                    <Animated.View
                        style={[
                            InputStyles.containerInput,
                            { borderColor },
                            errorMessage !== undefined && InputStyles.errorFocus,
                        ]}
                    >

                        <TextInput
                            value={gender}
                            editable={false}
                            onPressIn={onPress}
                            placeholder={placeholder ?? ""}
                            style={[
                                typography.labelMdRegular,
                                { color: theme.colors.transparent.T950 },
                                InputStyles.input,
                            ]}
                            placeholderTextColor={theme.colors.text.disabled}
                        />

                        {IconRightComponent && (
                            <TouchableOpacity
                                disabled={disabled}
                                activeOpacity={0.6}
                                onPress={onPress}
                            >
                                <IconRightComponent
                                    size={"sm"}
                                    color={
                                        disabled
                                            ? theme.colors.transparent.T50
                                            : theme.colors.transparent.T400
                                    }
                                />
                            </TouchableOpacity>
                        )}
                    </Animated.View>

                    {errorMessage && (
                        <Text
                            style={[
                                typography.LabelSmRegular,
                                { color: theme.colors.text.critical },
                            ]}
                        >
                            {errorMessage}
                        </Text>
                    )}
                </View>
            </>

        );
    }
);

const createSelectDropDownStyles = (
    theme: typeof Colors.light & typeof Colors.dark,
    inputSize: "md" | "lg"
) =>
    StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: useResponsive.verticalScale(6),
        },
        input: {
            flex: 1,
            lineHeight: 0,
            color: theme.text.primary,
            height: useResponsive.verticalScale(20),
        },
        errorFocus: {
            borderColor: theme.border.error,
        },
        containerInput: {
            display: "flex",
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            borderColor: "transparent",
            justifyContent: "space-between",
            gap: useResponsive.horizontalScale(8),
            backgroundColor: theme.background.secondary,
            borderRadius: useResponsive.moderateScale(16),
            borderWidth: useResponsive.horizontalScale(1.5),
            paddingVertical: useResponsive.verticalScale(14),
            paddingHorizontal: useResponsive.horizontalScale(16),
            height: inputSize == "lg" ? useResponsive.verticalScale(52) : useResponsive.verticalScale(44),
        },
    });

export default SelectDropDown;
