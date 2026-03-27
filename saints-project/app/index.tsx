import { SimpleButton } from "@/components/SimpleButton";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Pass = useRef<TextInput>(null);
  const disbaled = !username || !password;

  function handleLogin() {
    let message = "";
    if (disbaled) {
      return;
    } else {
      message = `${username}, ${password}`;
    }
    alert(message);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Welcome to the App!</Text>
      <Text style={styles.text}>
        Pardon the emptiness, we&apos;re still building stuff out!
      </Text>
      {/* Login Form */}
      <KeyboardAvoidingView
        style={styles.formBox}
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={50}
      >
        {/* Username Input */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
          clearTextOnFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => Pass.current?.focus()}
        />
        {/* Password Input */}
        <TextInput
          ref={Pass}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.textInput}
          clearTextOnFocus={true}
          onSubmitEditing={handleLogin}
        />
        {/* Form Submit Button */}
        <SimpleButton
          title="Login"
          onPress={handleLogin}
          ContainerStyle={
            disbaled
              ? styles.loginButtonContainerDisabled
              : styles.loginButtonContainer
          }
          TextStyle={
            disbaled ? styles.loginButtonDisabled : styles.loginButtonText
          }
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#666464",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Times New Roman",
    margin: 20,
  },
  header1: {
    color: "Grey",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "bold",
    backgroundColor: "#9854ba",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
  },
  formBox: {
    margin: 20,
    width: "60%",
    padding: 10,
    backgroundColor: "#3c3a3d",
    borderRadius: 10,
    justifyContent: "center",
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
  loginButtonContainerDisabled: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#5e5f5f",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginButtonDisabled: {
    color: "#9f9999",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
