import { Stack, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Home",
        headerStyle: {
          backgroundColor: "#544881",
        },
        headerTintColor: "#fff",
        headerRight: () => (
          <Link href={"/settings"}>
            <Ionicons name="ios-settings-outline" size={24} color="white" />
          </Link>
        ),
      }}
    />
  );
}
