import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          switch (route.name) {
            case "home":
              iconName = "home";
              break;
            case "habits":
              iconName = "list";
              break;
            case "history":
              iconName = "time";
              break;
            case "profile":
              iconName = "person";
              break;
            default:
              iconName = "ellipse";
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="habits" options={{ title: "Hábitos" }} />
      <Tabs.Screen name="history" options={{ title: "Histórico" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
