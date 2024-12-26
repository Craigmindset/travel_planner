import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "@/constant/Colors";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "purple",
          height: 60,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color }) => (
            <Entypo
              name="globe"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "Trip",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color }) => (
            <Entypo
              name="paper-plane"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="user" size={24} color={focused ? "white" : "black"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
