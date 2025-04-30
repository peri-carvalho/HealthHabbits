import {
  SafeAreaView,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { bg_health } from "@/assets/svgs/bg_health";
import { icon_health } from "@/assets/svgs/icon_health";
import useSignUp from "./sign_up.vm";

export default function SignUp() {
  const { windowWidth, windowHeight, isKeyboardVisible, handleSignUp, goBack } =
    useSignUp();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <SvgXml
        xml={bg_health}
        width={windowWidth}
        height="550"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      />

      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.2)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.7)",
          "black",
        ]}
        style={{
          position: "absolute",
          bottom: isKeyboardVisible ? 0 : 150,
          height: windowHeight,
          width: windowWidth,
          left: 0,
          right: 0,
        }}
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
        <KeyboardAvoidingView style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{ height: windowHeight * 0.2, justifyContent: "center" }}
          >
            <View
              style={{
                flexDirection: "row",
                width: 195,
                justifyContent: "space-between",
              }}
            >
              <SvgXml
                xml={icon_health}
                width="40"
                height="40"
                preserveAspectRatio="none"
                style={{ marginTop: 8 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
                >
                  Health Habits
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    position: "relative",
                    transform: [{ translateX: -6 }],
                  }}
                >
                  Cuide da mente e corpo
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: windowHeight * 0.6,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {" "}
              Crie sua conta{" "}
            </Text>
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#7C7C8A"
              style={{
                width: 278,
                height: 56,
                color: "white",
                backgroundColor: "#121214",
                borderRadius: 6,
              }}
            ></TextInput>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#7C7C8A"
              style={{
                width: 278,
                height: 56,
                color: "white",
                backgroundColor: "#121214",
                borderRadius: 6,
              }}
            ></TextInput>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#7C7C8A"
              style={{
                width: 278,
                height: 56,
                color: "white",
                backgroundColor: "#121214",
                borderRadius: 6,
              }}
            ></TextInput>
            <TextInput
              placeholder="Confirme a Senha"
              placeholderTextColor="#7C7C8A"
              style={{
                width: 278,
                height: 56,
                color: "white",
                backgroundColor: "#121214",
                borderRadius: 6,
              }}
            ></TextInput>
            <TouchableOpacity onPress={() => handleSignUp()}>
              <View
                style={{
                  backgroundColor: "#2D4507",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 278,
                  height: 56,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Acessar
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: windowHeight * 0.2,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => goBack()}>
              <View
                style={{
                  backgroundColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 278,
                  height: 56,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: "#79A532",
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Voltar para o Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
