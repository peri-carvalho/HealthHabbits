import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';


const useLogin = () => {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation:any = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const goSignUp = async() =>{
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

  return {
    windowWidth,
    windowHeight,
    isKeyboardVisible,
    goSignUp
  };
};

export default useLogin;