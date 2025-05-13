import { View, Text, TextInput, ScrollView } from "react-native";
import useSettings from "./settings.vm";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Settings() {

    const { windowHeight, windowWidth } = useSettings()
    return (
        <View style={{ flex: 1, backgroundColor: '#121214' }}>
            <View style={{ height: windowHeight * 0.12, backgroundColor: '#202024', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '500', color: 'white' }}>Perfil</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="account-circle" size={84} color="white" />
            </View>

            <View style={{ marginTop: 25, width: windowWidth, alignItems: 'center' }}>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 25 }} contentContainerStyle={{ alignItems: 'center', paddingBottom: 250 }}>
                    <View style={{ justifyContent: 'space-between', height: windowHeight * 0.185 }}>
                        <TextInput placeholder=" Nome" placeholderTextColor="#7C7C8A" style={{ width: 278, height: 56, color: 'white', backgroundColor: '#202024', borderRadius: 6, paddingLeft: 16 }}></TextInput>
                        <TextInput placeholder=" E-mail" placeholderTextColor="#7C7C8A" style={{ width: 278, height: 56, color: 'white', backgroundColor: '#202024', borderRadius: 6, paddingLeft: 16 }}></TextInput>
                    </View>

                    <View style={{ justifyContent: 'space-between', height: windowHeight * 0.24, marginTop:50, alignItems:'flex-start' }}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: '500' }}>Objetivo</Text>
                        <TextInput placeholder="Senha Antiga" placeholderTextColor="#7C7C8A" style={{ width: 278, height: 56, color: 'white', backgroundColor: '#202024', borderRadius: 6, paddingLeft: 16 }}></TextInput>
                        <TextInput placeholder="Nova senha" placeholderTextColor="#7C7C8A" style={{ width: 278, height: 56, color: 'white', backgroundColor: '#202024', borderRadius: 6, paddingLeft: 16 }}></TextInput>
                    </View>
                </ScrollView>

            </View>
        </View>
    );
}