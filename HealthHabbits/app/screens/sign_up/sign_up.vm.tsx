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
import { SignUpForm } from '@/app/configs/interfaces';

const useSignUp = () => {
  const navigation = useNavigation<any>();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  const goBack = async () => {
    navigation.goBack();
  };

  const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    name: Yup.string().required('Nome é obrigatório'),
    password: Yup.string().min(12, 'Mínimo 12 caracteres sendo 1 especial').required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas não coincidem')
      .required('Confirmação de senha é obrigatória'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignUpForm) => {
    registerUser(data);
    console.log(data);
  };

  const registerUser = async (data: SignUpForm) => {
    setIsDisabled(true);
    try {
      const body = {
        email: data.email,
        name: data.name,
        password: data.password,
        confirmPassword: data.confirmPassword,
        profileId: 1,
      };
      console.log(body);
      const res = await axios.post(`${routeurl}/auth/register`, body);

      Toast.show({
        type: 'success',
        text1: 'Cadastro realizado',
        text2: 'Você já pode logar 😊'
      });
      navigation.navigate('Login');
    } catch (err: any) {
      Toast.show({
        type: 'error',
        text1: 'Erro no cadastro',
        text2: err.response?.data?.message || 'Verifique suas informações 🚫'
      });
    } finally {
      setIsDisabled(false);
    }
  };

  return {
    windowWidth,
    windowHeight,
    isKeyboardVisible,
    goBack,
    isDisabled,
    control,
    handleSubmit,
    onSubmit,
    errors
  };
};

export default useSignUp;