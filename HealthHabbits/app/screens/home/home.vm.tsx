import { useState } from 'react';
import { Dimensions } from 'react-native';
import { drink } from '@/assets/svgs/drink';
import { walk } from '@/assets/svgs/walk';
import { meditate } from '@/assets/svgs/meditate';
import { suplements } from '@/assets/svgs/suplements';
import { useNavigation } from '@react-navigation/native';


const useHome = () => {

  const [selectionCategory, setSelectionCategory] = useState<number>(1);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation:any = useNavigation();


  const arrayCategories = [
    {
      id: 1,
      name: "TODOS"
    },
    {
      id: 2,
      name: "HIDRATAÇÃO"
    },
    {
      id: 3,
      name: "EXERCICIOS"
    },
    {
      id: 4,
      name: "MENTE"
    }
  ]

  const arrayActivites = [
    {
      id: 1,
      type: 'drink',
      name: "Beber água",
      objectives: "2 Litros x 1 dia"
    },
    {
      id: 2,
      type: 'walk',
      name: "Caminhada",
      objectives: "20 min"
    },
    {
      id: 3,
      type: 'meditate',
      name: "Meditar",
      objectives: "10 min"
    },
    {
      id: 4,
      type: 'suplements',
      name: "Suplementos",
      objectives: "1 und"
    }
  ]

  const image_type =  (type: string) => {
    switch (type) {
      case 'drink':
        return drink
      case 'walk':
        return walk
      case 'meditate':
        return meditate
      case 'suplements':
        return suplements
      default:
        return''
      
    }
  }

  const goLogin = async() => {
    navigation.navigate('Login' as never);
  };

  const goHabit = async() => {
    navigation.navigate('Habit' as never);
  };

  const goAchievements = async() => {
    navigation.navigate('Achievements' as never);
  };

  return {
    windowWidth,
    windowHeight,
    arrayCategories,
    selectionCategory,
    setSelectionCategory,
    arrayActivites,
    image_type,
    goLogin,
    goHabit,
    goAchievements
  };
};

export default useHome;