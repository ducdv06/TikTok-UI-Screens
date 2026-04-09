import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FollowingScreen from "../screens/FollowingScreen";
import ForYouScreen from "../screens/ForYouScreen";

const TopTab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          top: 40,
          left: 70,
          right: 70,
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          textTransform: "none",
        },

        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255,255,255,0.6)",

        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
          height: 2,
          width: 30,
          marginLeft: 35,
        },

        tabBarPressColor: "transparent",
      }}
    >
      <TopTab.Screen name="Following" component={FollowingScreen} />
      <TopTab.Screen name="For You" component={ForYouScreen} />
    </TopTab.Navigator>
  );
}