import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

import HomeTopTabs from "./HomeTopTabs";
import CommentsScreen from "../screens/CommentsScreen";
import DummyScreen from "../screens/DummyScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 28,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTopTabs}
        options={{
          tabBarIcon: () => <Image source={require("../img/home-icon.png")} />,
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DummyScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../img/search-icon.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={DummyScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../img/create-icon.png")}
              style={{ width: 40, height: 28 }}
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={DummyScreen}
        options={{
          tabBarIcon: () => <Image source={require("../img/inbox-icon.png")} />,
        }}
      />

      <Tab.Screen
        name="Me"
        component={DummyScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../img/account-icon.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}