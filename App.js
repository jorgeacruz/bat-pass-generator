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
      <TouchableOpacity>
        <Text style={styles.buttom}>Generate Password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttom}>Copy your password</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000051657/57a99613-e158-472a-8037-77895ee89923.png",
        }}
        style={styles.dio_logo}
      />
      <StatusBar style="light" />
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
    textAlign: "center",
  },
  buttom: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 320,
    textAlign: "center",
    fontWeight: "bold",
  },
  dio_logo: {
    width: 100,
    height: 50,
    padding: 10,
    position: "absolute",
    bottom: 30,
  },
});
