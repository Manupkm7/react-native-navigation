import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor } from "../styles";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PrimaryColor,
        tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
        },
        tabBarStyle: {
            backgroundColor: "#F3F2F7",
        },
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "basket" : "ios-basket-outline"}
              size={22}
              color={PrimaryColor}
            />
          ),
          tabBarLabel: "Productos",
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "list" : "ios-list-outline"}
              size={22}
              color={PrimaryColor}
            />
          ),
          tabBarLabel: "Categorias",
        }}
      />
    </Tabs>
  );
}
