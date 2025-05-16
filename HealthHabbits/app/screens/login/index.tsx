import { SafeAreaView, View, Dimensions, KeyboardAvoidingView, Text, TextInput, Button, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { bg_health } from "@/assets/svgs/bg_health";
import { icon_health } from "@/assets/svgs/icon_health";
import useLogin from "./login.vm";
import { Controller } from 'react-hook-form';

export default function Login() {
    const {
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
    } = useLogin();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <SvgXml
                xml={bg_health}
                width={windowWidth}
                height="550"
                preserveAspectRatio="none"
                style={{ position: 'absolute', top: 0, left: 0, right: 0, }}
            />


            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)', 'black']}
                style={{ position: 'absolute', bottom: isKeyboardVisible ? 0 : 150, height: windowHeight, width: windowWidth, left: 0, right: 0, }}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
                <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center' }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', width: 195, justifyContent: 'space-between' }}>
                            <SvgXml
                                xml={icon_health}
                                width="40"
                                height="40"
                                preserveAspectRatio="none"
                                style={{ marginTop: 8 }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Health Habits</Text>
                                <Text style={{ color: 'white', fontSize: 16, position: 'relative', transform: [{ translateX: -6 }] }}>Cuide da mente e corpo</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}> Acesse sua conta </Text>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder="E-mail"
                                    placeholderTextColor="#7C7C8A"
                                    style={{ width: 278, height: 56, color: 'white', backgroundColor: '#121214', borderRadius: 6, paddingLeft: 16 }}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                        <Controller
                            control={control}
                            name="senha"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder="Senha"
                                    placeholderTextColor="#7C7C8A"
                                    secureTextEntry
                                    style={{ width: 278, height: 56, color: 'white', backgroundColor: '#121214', borderRadius: 6, paddingLeft: 16 }}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.senha && <Text style={{ color: 'red' }}>{errors.senha.message}</Text>}
                        <TouchableOpacity disabled={isDisabled} onPress={handleSubmit(onSubmit)}>
                            <View style={{ backgroundColor: '#2D4507', justifyContent: 'center', alignItems: 'center', width: 278, height: 56, borderRadius: 6 }}>
                                {isDisabled?
                                <ActivityIndicator size={30} color={'white'}/>
                                :
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Acessar</Text>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontSize: 15, marginBottom: 10 }}>Ainda não tem acesso ?</Text>

                        <TouchableOpacity disabled={isDisabled} onPress={() => goSignUp()}>
                            <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', width: 278, height: 56, borderRadius: 6, borderWidth: 1, borderColor: '#79A532' }}>
                                {isDisabled?
                                <ActivityIndicator size={30} color={'white'}/>
                                :
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Criar conta</Text>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>

    );
}
