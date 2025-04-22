import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useRouter, Link } from "expo-router";
export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSignup() {
    // TODO: cadastrar e navegar
    router.replace("(tabs)");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Criar e acessar</Text>
      </TouchableOpacity>
      <Link href="/login" style={styles.link}>
        Voltar para login
      </Link>
    </View>
  );
}
