import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./images/bat-logo.png")} style={styles.logo} />
      <Text style={styles.title}>You can do it!</Text>
      <TextInput
        placeholder="Enter your text here"
        placeholderTextColor={"#000"}
        style={styles.input}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#dac807",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  logo: {
    width: 280,
    height: 180,
    padding: 10,
  },
  input: {
    backgroundColor: "#dac807",
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
