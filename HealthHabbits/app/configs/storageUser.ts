import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export const storeUser = async (value: any) => {
    try {
        await AsyncStorage.setItem('user', value);
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: `${e}`
        });
    }
};

export const getUser = async () => {
    try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
            return value
        }
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: `${e}`
        });
    }
};