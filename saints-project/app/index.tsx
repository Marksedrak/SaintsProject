import React from "react";
import { Text, TextInput, View } from "react-native";
export default function Index() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "5%",
      }}
    >
      <Text>Welcome to the App!</Text>
      <Text
        style={{
          marginTop: 10,
          fontFamily: "fiesta-regular",
          fontSize: 20,
          color: "#3013be",
          textAlign: "center",
        }}
      >
        Pardon the emptiness, we&apos;re still building stuff out!
      </Text>
      <View
        style={{
          marginTop: 20,
          width: "50%",
          padding: 10,
          backgroundColor: "#3c3a3d",
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={{
            marginBottom: 10,
            borderColor: "#7e7c7c",
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            color: "#fff",
          }}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            marginBottom: 10,
            borderColor: "#7e7c7c",
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
}
