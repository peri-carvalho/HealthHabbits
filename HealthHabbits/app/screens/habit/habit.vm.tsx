import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const useHabit = () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation: any = useNavigation();

    const goLogin = async () => {
        navigation.navigate('Login' as never);
    };

    const goBack = async () => {
        navigation.goBack();
    };

    return {
        windowWidth,
        windowHeight,
        goLogin,
        goBack
    };
};

export default useHabit;