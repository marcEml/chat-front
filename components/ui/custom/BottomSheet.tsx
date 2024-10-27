import React from "react";
import Colors from "@/constants/colors";
import { StyleSheet } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { useResponsive } from "@/helpers/responsive/metrix";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";

const CustomBottomSheet = ({
  children,
  sheetRef,
  onChange,
  snapPoints,
  enablePanDownToClose,
}: {
  sheetRef: any;
  children: any;
  snapPoints: any;
  enablePanDownToClose?: boolean;
  onChange?: (index: number) => void;
}) => {
  const { theme } = useTheme();
  const styles = createBottomSheetStyle(theme.colors);

  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop opacity={0.7} appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
    ),
    []
  );

  return (
    <BottomSheet
      index={-1}
      ref={sheetRef}
      onChange={onChange}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.BottomSheetBg}
      enablePanDownToClose={enablePanDownToClose ?? true}
    >
      <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;

const createBottomSheetStyle = (theme: typeof Colors.light & typeof Colors.dark) =>
  StyleSheet.create({
    BottomSheetBg: {
      flex: 1,
      borderColor: theme.transparent.T50,
      backgroundColor: theme.background.primary,
      borderTopLeftRadius: useResponsive.horizontalScale(20),
      borderTopRightRadius: useResponsive.horizontalScale(20),
    },
  });
