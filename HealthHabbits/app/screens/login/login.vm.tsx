import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { routeurl } from '@/app/configs/routeapi';
import Toast from 'react-native-toast-message';
import { storeUser } from '@/app/configs/storageUser';

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
    senha: Yup.string().min(8, 'Mínimo 8 caracteres').required('Senha obrigatória'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; senha: string }) => {
    console.log(data);
    login('auth/login', data.email, data.senha)
    setIsDisabled(true)
  };

  async function login(endpoint: string, email: string, senha: string) {
    try {
      setIsDisabled(true);

      const response = await axios.post(`${routeurl}/${endpoint}`, {
        email,
        senha
      });

      console.log(response.data);
      storeUser(response.data);

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Usuário Logado 👋'
      });

      navigation.navigate('Home');
    } catch (error: any) {
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