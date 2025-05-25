import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { routeurl } from '@/app/configs/routeapi';
import Toast from 'react-native-toast-message';
import { storeUser } from '@/app/configs/storageUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogin = () => {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation: any = useNavigation();
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const goSignUp = async () => {
    navigation.navigate('SignUp')
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const schema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string().min(12, 'Mínimo 12 caracteres sendo 1 especial').required('Senha obrigatória'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
    login('auth/login', data.email, data.password)
    setIsDisabled(true)
  };

  async function login(endpoint: string, email: string, password: string) {
    try {
      setIsDisabled(true);

      const response = await axios.post(`${routeurl}/${endpoint}`, {
        email,
        password
      });

      const { token, refreshToken } = response.data.tokenResponse;
      console.log(response.data);
      storeUser(response.data);

      await AsyncStorage.multiSet([
        ['@userToken', token],
        ['@refreshToken', refreshToken],
      ]);

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Usuário Logado 👋'
      });

      navigation.navigate('Main');
    } catch (error: any) {
      alert(error);
      Toast.show({
        type: 'error',
        text1: 'Falha no Login',
        text2: error.response?.data?.message || 'Verifique suas credenciais 🚫'
      });
    } finally {
      setIsDisabled(false);
    }
  }


  return {
    windowWidth,
    windowHeight,
    isKeyboardVisible,
    goSignUp,
    control,
    handleSubmit,
    onSubmit,
    errors,
    isDisabled,
    setIsDisabled
  };
};

export default useLogin;