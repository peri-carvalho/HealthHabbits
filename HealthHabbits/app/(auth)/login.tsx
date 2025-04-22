import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter, Link } from "expo-router";
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    // TODO: autenticar e navegar
    router.replace("(tabs)");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Habits</Text>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <Link href="/signup" style={styles.link}>
        Criar conta
      </Link>
    </View>
  );
}
