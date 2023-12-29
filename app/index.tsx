import { Text, View } from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.containerRoot}>
      <Text>Principal text</Text>
      <Link href={"/shop/products"}>Shop</Link>
    </View>
  );
}
