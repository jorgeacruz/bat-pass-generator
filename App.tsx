import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./style";

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

