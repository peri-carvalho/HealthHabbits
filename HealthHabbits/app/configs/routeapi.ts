import { Platform } from "react-native";

const host = Platform.select({
  ios: "localhost", // iOS simulator
  android: "10.0.2.2", // Android emulator (AVD)
  web: "localhost", // browser
  default: "172.29.48.1", // dispositivo físico: 192.168.x.y na sua rede Wi-Fi
});

export const routeurl = `http://172.20.10.2:8080`;
