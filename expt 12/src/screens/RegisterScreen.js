// src/screens/RegisterScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    console.log("🔵 [REGISTER] Starting registration...");
    console.log("🔵 [REGISTER] Email:", email, "Password length:", password.length);

    if (!email || !password) {
      console.log("🔴 [REGISTER] Missing email or password");
      Alert.alert("Missing Info", "Please fill all fields.");
      return;
    }

    try {
      console.log("🔵 [REGISTER] Auth object:", auth);
      console.log("🔵 [REGISTER] Attempting createUserWithEmailAndPassword...");
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      console.log("✅ [REGISTER] User created successfully!");
      console.log("✅ [REGISTER] User UID:", userCredential.user.uid);
      console.log("✅ [REGISTER] User Email:", userCredential.user.email);
      
      Alert.alert("Success", "Account created successfully!");
      navigation.replace("Home");
    } catch (error) {
      console.log("🔴 [REGISTER] Registration Error:");
      console.log("🔴 [REGISTER] Error Code:", error.code);
      console.log("🔴 [REGISTER] Error Message:", error.message);
      console.log("🔴 [REGISTER] Full Error:", error);
      
      Alert.alert("Registration Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Register
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Register" onPress={handleRegister} />

      <Text
        onPress={() => navigation.navigate("Login")}
        style={{ color: "blue", marginTop: 15, textAlign: "center" }}
      >
        Already have an account? Login
      </Text>
    </View>
  );
}
