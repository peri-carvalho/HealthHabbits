import { useState } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { drink } from "@/assets/svgs/drink";
import { walk } from "@/assets/svgs/walk";
import { meditate } from "@/assets/svgs/meditate";
import { suplements } from "@/assets/svgs/suplements";

const useHabit = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation: any = useNavigation();
  const route = useRoute();
  const { id, idCategory, name, objectives, type } =
    (route.params as any) ?? {};

  const goLogin = async () => {
    navigation.navigate("Login" as never);
  };

  const goBack = async () => {
    navigation.goBack();
  };

  const image_type = (type: string) => {
    switch (type) {
      case "drink":
        return drink;
      case "walk":
        return walk;
      case "meditate":
        return meditate;
      case "suplements":
        return suplements;
      default:
        return "";
    }
  };

  return {
    windowWidth,
    windowHeight,
    goLogin,
    goBack,
    name,
    objectives,
    type,
    image_type,
  };
};

export default useHabit;
