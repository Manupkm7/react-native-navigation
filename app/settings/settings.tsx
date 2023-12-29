import { Text, View } from "react-native";
import { styles } from "../styles";
import { Stack } from "expo-router";

export default function Settings() {
  return (
    <View style={styles.containerSettings}>
      <Stack.Screen options={{
        headerTitle: "Settings",
        headerRight: null,
       }} />
      <Text>Esto es una settings</Text>
    </View>
  );
};
