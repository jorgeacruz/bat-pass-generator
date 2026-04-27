import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
