import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import SignUp from '../screens/sign_up';
import BottomTabs from './bottomTabs';
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();

export default function AppScreens() {
    return (

        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
            <Stack.Screen options={{ headerShown: false }} name="Main" component={BottomTabs} />
        </Stack.Navigator>

    );
}
