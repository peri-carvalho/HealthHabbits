import { View, Text, TouchableOpacity, FlatList } from "react-native";
import useHabit from "./habit.vm";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { drink } from "@/assets/svgs/drink";
import { objective_icon } from "@/assets/svgs/objective_icon";
import { share_icon } from "@/assets/svgs/share_icon";
import { SvgXml } from "react-native-svg";

export default function Habit() {
  const {
    windowHeight,
    windowWidth,
    goLogin,
    goBack,
    name,
    type,
    objectives,
    image_type,
  } = useHabit();
  return (
    <View style={{ flex: 1, backgroundColor: "#121214" }}>
      <View
        style={{
          height: windowHeight * 0.15,
          backgroundColor: "#202024",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: 328,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignSelf: "flex-start",
              height: windowHeight * 0.1,
            }}
          >
            <TouchableOpacity onPress={() => goBack()}>
              <View>
                <MaterialIcons name="arrow-back" size={28} color="#00B37E" />
              </View>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "row",
                width: windowWidth * 0.9,
              }}
            >
              <Text style={{ fontSize: 17, color: "white", fontWeight: "500" }}>
                {name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: windowWidth * 0.3,
                  justifyContent: "space-between",
                }}
              >
                <MaterialCommunityIcons name="human" size={20} color="white" />
                <Text
                  style={{ fontSize: 17, color: "white", fontWeight: "thin" }}
                >
                  Hidratação
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <View style={{ alignItems: "center" }}>
          <View>
            <SvgXml xml={image_type(type)} width={234} height={234} />
          </View>
          <View
            style={{
              marginTop: 20,
              height: windowHeight * 0.15,
              width: 264,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                justifyContent: "space-around",
                flexDirection: "row",
                width: windowWidth * 0.65,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml xml={objective_icon} width={24} height={32}></SvgXml>
                  <Text
                    style={{ fontSize: 16, color: "white", fontWeight: "thin" }}
                  >
                    Objetivo
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SvgXml xml={share_icon} width={24} height={32}></SvgXml>
                  <Text
                    style={{
                      marginLeft: 6,
                      fontSize: 16,
                      color: "white",
                      fontWeight: "thin",
                    }}
                  >
                    {objectives}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#2D4507",
                  width: 254,
                  height: 56,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 14, color: "white", fontWeight: 900 }}>
                  Marcar como realizado
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
