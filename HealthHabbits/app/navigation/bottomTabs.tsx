import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { vector_history } from "@/assets/svgs/vector_history";
import { vector_home } from "@/assets/svgs/vector_home";
import { vector_settings } from "@/assets/svgs/vector_settings";
import { vector_selected_history } from "@/assets/svgs/vector_selected_history";
import { vector_selected_home } from "@/assets/svgs/vector_selected_home";
import { vector_selected_settings } from "@/assets/svgs/vector_selected_settings";
import Settings from "../screens/settings";
import History from "../screens/history";
import { SvgXml } from "react-native-svg";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case "Home":
              iconName = focused ? vector_selected_home : vector_home;
              break;
            case "History":
              iconName = focused ? vector_selected_history : vector_history;
              break;
            case "Settings":
              iconName = focused ? vector_selected_settings : vector_settings;
              break;
            default:
              iconName = vector_home;
          }

          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "80%",
              }}
            >
              <SvgXml
                xml={iconName}
                width={32}
                height={32}
                preserveAspectRatio="none"
              />
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: "#202024",
          borderTopWidth: 0,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
