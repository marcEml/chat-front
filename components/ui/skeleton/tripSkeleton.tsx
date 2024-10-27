import { useResponsive } from "@/helpers/responsive/metrix";
import React from "react";
import { View, Text } from "react-native";
import { Skeleton } from "react-native-skeletons";

const TripSkeleton = ({ theme }: { theme: any }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: useResponsive.verticalScale(12),
        height: useResponsive.verticalScale(500),
      }}
    >
      <Skeleton
        count={1}
        width={"40%"}
        color={theme.colors.transparent.T100}
        height={useResponsive.verticalScale(35)}
        borderRadius={useResponsive.moderateScale(24)}
      />
      <Skeleton
        count={2}
        width={"100%"}
        color={theme.colors.transparent.T100}
        height={useResponsive.verticalScale(140)}
        borderRadius={useResponsive.moderateScale(24)}
      />
      <Skeleton
        count={1}
        width={"50%"}
        color={theme.colors.transparent.T100}
        height={useResponsive.verticalScale(35)}
        borderRadius={useResponsive.moderateScale(24)}
        style={{ marginTop: useResponsive.verticalScale(24) }}
      />
      <Skeleton
        count={3}
        width={"100%"}
        color={theme.colors.transparent.T100}
        height={useResponsive.verticalScale(140)}
        borderRadius={useResponsive.moderateScale(24)}
      />
    </View>
  );
};

export default TripSkeleton;
