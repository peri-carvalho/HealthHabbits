
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const useAchievements = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation: any = useNavigation();

  const goLogin = async () => {
    navigation.navigate('Login' as never);
  };

  const data = [
    {
      id: 1,
      description: 'Beber água',
      icon: 'water-drop'
    },
    {
      id: 2,
      description: 'Exercicio',
      icon: 'dumbbell'
    },
    {
      id: 3,
      description: 'Meditar',
      icon: 'self-improvement'
    },
    {
      id: 4,
      description: 'Caminhada',
      icon: 'directions-walk'
    },
    {
      id: 5,
      description: 'Suplementos',
      icon: 'medication'
    }
  ]

  return {
    windowWidth,
    windowHeight,
    goLogin,
    data
  };
};

export default useAchievements;