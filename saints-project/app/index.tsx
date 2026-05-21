import { SimpleButton } from "@/components/SimpleButton";
import Constants from "expo-constants";
import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const DEV_IP = Constants.expoConfig?.hostUri?.split(":")[0];

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
        // Change button style
        setIsLoading(true);
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
        alert(message.text);
      } catch (e) {
        alert(e);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function SignUp() {
    alert("Signing up");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={-100}
      >
        {/*******************  Welcome Text *********************/}
        <Text style={styles.header1}>Welcome to the App!</Text>
        <Text style={styles.text}>
          {/* Subtitle Text (Optional) */}
          Pardon the emptiness, we&apos;re still building stuff out!
        </Text>
        {/******************* Login Form ***********************/}
        <View style={styles.formBox}>
          {/*****************  Username Input ******************/}
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
          {/*****************  Password Input ******************/}
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
          {/***************** Form Submit Button ****************/}
          <SimpleButton
            title="Login"
            onPress={handleLogin}
            ContainerStyle={
              disabled || isLoading
                ? styles.loginButtonContainerDisabled
                : styles.loginButtonContainer
            }
            TextStyle={
              disabled ? styles.loginButtonDisabled : styles.loginButtonText
            }
          />
        </View>
        {/******************* Sign Up Button *********************/}
        <SimpleButton
          title="Sign Up"
          onPress={SignUp}
          ContainerStyle={styles.signupButton}
          TextStyle={styles.signupButtonText}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
  signupButton: {
    backgroundColor: "#19b826",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignSelf: "center",
    color: "black",
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  signupButtonHover: {
    backgroundColor: "#4f6c51",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignSelf: "center",
    color: "white",
  },
  signupButtonHoverText: {
    color: "#1f1e1e",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
