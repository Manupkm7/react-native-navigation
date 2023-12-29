import { Stack, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor } from "./styles";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Home",
        headerStyle: {
          backgroundColor: PrimaryColor,
        },
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
        headerRight: () => (
          <Link href={"/settings"} asChild>
            <Ionicons name="ios-settings-outline" size={24} color="white" />
          </Link>
        ),
      }}
    />
  );
}
