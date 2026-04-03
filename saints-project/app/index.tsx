import { SimpleButton } from "@/components/SimpleButton";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const DEV_IP = "10.15.46.95";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string | null>(null);
  const Pass = useRef<TextInput>(null);
  const disabled = !username || !password;

  const ShowErrors = useEffect(() => {
    if (errors) {
      alert(errors);
    }
  }, [errors]);

  async function handleLogin() {
    if (disabled) {
      return;
    } else {
      try {
        // TODO: Replace with actual endpoint URL when ready
        const response = await fetch(`http://${DEV_IP}:3000/api/data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const message = await response.json();
        setErrors(message.errors);
        alert(message.text);
      } catch (error) {
        alert("An error occurred while trying to log in.");
        console.error("Login error:", error);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "position" : "height"}
      keyboardVerticalOffset={-100}
    >
      {/* Welcome Text */}
      <Text style={styles.header1}>Welcome to the App!</Text>
      <Text style={styles.text}>
        {/* Subtitle Text (Optional) */}
        Pardon the emptiness, we&apos;re still building stuff out!
      </Text>
      {/* Login Form */}
      <View style={styles.formBox}>
        {/* Username Input */}
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.textInput}
          returnKeyType="next"
          clearButtonMode={"while-editing"}
          onSubmitEditing={() => Pass.current?.focus()}
          enterKeyHint="next"
        />
        {/* Password Input */}
        <TextInput
          ref={Pass}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.textInput}
          clearButtonMode={"while-editing"}
          onSubmitEditing={handleLogin}
          enterKeyHint="done"
        />
        {/* Form Submit Button */}
        <SimpleButton
          title="Login"
          onPress={handleLogin}
          ContainerStyle={
            disabled
              ? styles.loginButtonContainerDisabled
              : styles.loginButtonContainer
          }
          TextStyle={
            disabled ? styles.loginButtonDisabled : styles.loginButtonText
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Times New Roman",
    margin: 20,
  },
  header1: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "bold",
    backgroundSize: "contain",
    backgroundColor: "#9854ba",
    padding: 5,
    borderRadius: 15,
    margin: 10,
  },
  formBox: {
    margin: 20,
    padding: 10,
    backgroundColor: "#040404",
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
    borderRadius: 10,
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
