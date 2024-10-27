import React from "react";
import Colors from "@/constants/colors";
import { StyleSheet } from "react-native";
import CustomBottomSheet from "./BottomSheet";
import { useTheme } from "@/context/ThemeContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useResponsive } from "@/helpers/responsive/metrix";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

const CustomPageWithBottomSheet = ({
  modal,
  animate,
  children,
  withoutPadding,
  enablePanDownToClose,
  CustomBottomSheetChildren,
}: {
  children: any;
  modal?: boolean;
  animate?: boolean;
  withoutPadding?: boolean;
  enablePanDownToClose?: boolean;
  CustomBottomSheetChildren: any;
}) => {
  // Theme and styles
  const { theme } = useTheme();
  const styles = createUserInformationsStyles(theme.colors, withoutPadding);

  // Shared value for scaling animation
  const scale = useSharedValue(1);

  // Animated styles for scaling
  const animatedStyle = useAnimatedStyle(() => {
    if (animate) {
      return {
        transform: [{ scale: scale.value }],
        borderRadius:
          scale.value < useResponsive.moderateScale(1) ? useResponsive.moderateScale(20) : 0,
      };
    } else {
      return {};
    }
  });

  // Handle bottom sheet changes
  const handleSheetChanges = (index: number) => {
    if (animate) {
      scale.value = withTiming(index >= 0 ? 0.84 : 1, { duration: 300 });
    }
  };

  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop opacity={0.7} appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
    ),
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#000" }}>
      <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>
      {!modal &&
        CustomBottomSheetChildren.map((bottomSheet: any, index: any) => (
          <CustomBottomSheet
            key={index}
            onChange={handleSheetChanges}
            sheetRef={bottomSheet.sheetRef}
            snapPoints={bottomSheet.snapPoints}
            enablePanDownToClose={enablePanDownToClose}
          >
            {bottomSheet.children}
          </CustomBottomSheet>
        ))}

      {modal &&
        CustomBottomSheetChildren.map((bottomSheet: any, index: any) => (
          <BottomSheetModal
            index={0}
            key={index}
            ref={bottomSheet.sheetRef}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            snapPoints={bottomSheet.snapPoints}
            backgroundStyle={{ backgroundColor: theme.colors.background.primary, borderRadius: 20 }}
          >
            <BottomSheetView
              style={[{ flex: 1, backgroundColor: theme.colors.background.primary }]}
            >
              {bottomSheet.children}
            </BottomSheetView>
          </BottomSheetModal>
        ))}
    </GestureHandlerRootView>
  );
};

export default CustomPageWithBottomSheet;

const createUserInformationsStyles = (
  theme: typeof Colors.light & typeof Colors.dark,
  withoutPadding: any
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: theme.background.primary,
      paddingHorizontal: withoutPadding ? 0 : 15,
      paddingTop: withoutPadding ? 0 : useResponsive.verticalScale(12),
    },

    pageContainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      gap: useResponsive.verticalScale(16),
      backgroundColor: theme.background.primary,
      marginTop: useResponsive.verticalScale(12),
    },
  });
