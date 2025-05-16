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

const useSignUp = () => {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

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

  const goBack = async () => {
    navigation.goBack();
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    senha: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref('senha')], 'As senhas não coincidem')
      .required('Confirmação de senha é obrigatória')
  });

  const {
    control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });



  const onSubmit = (data: any) => {
    console.log(data);
    singUp('69078510')
    setIsDisabled(true)
  };

  function singUp(endpoint: string) {
    axios.get(`${routeurl}/${endpoint}`)
      .then(response => {
        console.log(response.data) // esse data vai ter as informações que tu vai querer enviar
        storeUser(response.data)
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Usuário Logado 👋'
        });
        navigation.navigate('Main' as never);
        setIsDisabled(false)
      })

      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Usuário não encontrado',
          text2: 'Favor verique as informações enviadas 🚫'
        });
        setIsDisabled(false)
      });
  }


  return {
    windowWidth,
    windowHeight,
    isKeyboardVisible,
    onSubmit,
    goBack,
    control,
    handleSubmit,
    errors,
    isDisabled
  };
};

export default useSignUp;