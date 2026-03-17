import { SimpleButton } from "@/components/SimpleButton";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const disbaled = !username || !password;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Text style={styles.text}>
        Pardon the emptiness, we&apos;re still building stuff out!
      </Text>
      <View style={styles.formBox}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.textInput}
        />
        <SimpleButton
          title="Login"
          onPress={
            !disbaled ? () => alert(`${username}, ${password}`) : () => {}
          }
          ContainerStyle={styles.loginButtonContainer}
          TextStyle={
            disbaled ? styles.loginButtonDisabled : styles.loginButtonText
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  formBox: {
    marginTop: 20,
    width: "50%",
    padding: 10,
    backgroundColor: "#3c3a3d",
    borderRadius: 10,
  },
  textInput: {
    marginBottom: 10,
    borderColor: "#7e7c7c",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: "#fff",
  },
  loginButtonContainer: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#037dff",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  loginButtonDisabled: {
    color: "#e50b0b",
    fontSize: 16,
    textAlign: "center",
  },
});
