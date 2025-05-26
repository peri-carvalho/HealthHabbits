import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { drink } from "@/assets/svgs/drink";
import { walk } from "@/assets/svgs/walk";
import { meditate } from "@/assets/svgs/meditate";
import { suplements } from "@/assets/svgs/suplements";
import { useNavigation } from "@react-navigation/native";
import { getUser } from "@/app/configs/storageUser";
import axios from "axios";
import { routeurl } from "@/app/configs/routeapi";
import Toast from "react-native-toast-message";
import { CategoryHome } from "@/app/configs/interfaces";
import { ActivitesHome } from "@/app/configs/interfaces";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface JwtPayload {
  sub: string;
  name: string;
  email: string;
}

const useHome = () => {
  const [userName, setUserName] = useState<string>("Usuário");
  const [selectionCategory, setSelectionCategory] = useState<number>(1);
  //const [arrayActivites, setArrayActivites] = useState<ActivitesHome[]>([])   useState de atividades
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation: any = useNavigation();

  const arrayCategories = [
    {
      id: 1,
      name: "TODOS",
    },
    {
      id: 2,
      name: "HIDRATAÇÃO",
    },
    {
      id: 3,
      name: "EXERCICIOS",
    },
    {
      id: 4,
      name: "MENTE",
    },
  ];

  const arrayActivites = [
    {
      id: 1,
      idCategory: 2,
      type: "drink",
      name: "Beber água",
      objectives: "2 Litros x 1 dia",
    },
    {
      id: 2,
      idCategory: 3,
      type: "walk",
      name: "Caminhada",
      objectives: "20 min",
    },
    {
      id: 3,
      idCategory: 4,
      type: "meditate",
      name: "Meditar",
      objectives: "10 min",
    },
    {
      id: 4,
      idCategory: 2,
      type: "suplements",
      name: "Suplementos",
      objectives: "1 und",
    },
  ];

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

  const goLogin = async () => {
    navigation.navigate("Login" as never);
  };

  const goHabit = async (
    id: any,
    idCategory: any,
    type: any,
    name: any,
    objectives: any
  ) => {
    navigation.navigate("Habit" as never, {
      id,
      idCategory,
      type,
      name,
      objectives,
    });
  };

  const goAchievements = async () => {
    navigation.navigate("Achievements" as never);
  };

  useEffect(() => {
    const searchActivitys = async () => {
      const idUser = await getUser(); // Lembrar de filtrar para pegar o id do usuário
      searchItems(idUser);
    };

    searchActivitys();
  }, []);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("@userToken");
      if (token) {
        try {
          const payload = jwtDecode<JwtPayload>(token);
          setUserName(payload.name);
        } catch {
          // token inválido → mantém "Usuário"
        }
      }
    })();
  }, []);

  function searchItems(id: any) {
    axios
      .get(`${routeurl}/${id}/${selectionCategory}`) // id do usuário e da categoria de pesquisa
      .then((response) => {
        // setArrayActivites(data.response)  coloca todas as atividades no array
      })

      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Erro ao pesquisar",
          text2: `${error}`,
        });
      });
  }

  return {
    userName,
    windowWidth,
    windowHeight,
    arrayCategories,
    selectionCategory,
    setSelectionCategory,
    arrayActivites,
    image_type,
    goLogin,
    goHabit,
    goAchievements,
  };
};

export default useHome;
