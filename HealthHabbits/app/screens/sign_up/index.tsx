import { SafeAreaView, View, ActivityIndicator, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { bg_health } from "@/assets/svgs/bg_health";
import { icon_health } from "@/assets/svgs/icon_health";
import useSignUp from "./sign_up.vm";
import { Controller } from 'react-hook-form';


export default function SignUp() {
    const {
        windowWidth,
        windowHeight,
        isKeyboardVisible,
        onSubmit,
        goBack,
        control,
        handleSubmit,
        isDisabled,
        errors } = useSignUp();


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

                    <View style={{ height: windowHeight * 0.20, justifyContent: 'center' }}>
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
                    <View style={{ height: windowHeight * 0.6, alignItems: 'center', justifyContent: 'space-between' }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}> Crie sua conta </Text>
                        <Controller
                            control={control}
                            name="nome"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder="Nome"
                                    placeholderTextColor="#7C7C8A"
                                    style={{ width: 278, height: 56, color: 'white', backgroundColor: '#121214', borderRadius: 6, paddingLeft: 16 }}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.nome && <Text style={{ color: 'red' }}>{errors.nome.message}</Text>}
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
                                    keyboardType="email-address"
                                    autoCapitalize="none"
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
                        <Controller
                            control={control}
                            name="confirmarSenha"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    placeholder="Confirme a Senha"
                                    placeholderTextColor="#7C7C8A"
                                    secureTextEntry
                                    style={{ width: 278, height: 56, color: 'white', backgroundColor: '#121214', borderRadius: 6, paddingLeft: 16 }}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.confirmarSenha && <Text style={{ color: 'red' }}>{errors.confirmarSenha.message}</Text>}
                        <TouchableOpacity disabled={isDisabled} onPress={handleSubmit(onSubmit)}>
                            <View style={{ backgroundColor: '#2D4507', justifyContent: 'center', alignItems: 'center', width: 278, height: 56, borderRadius: 6 }}>
                                {isDisabled ?
                                    <ActivityIndicator size={30} color={'white'} />
                                    :
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Criar e acessar</Text>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: windowHeight * 0.20, justifyContent: 'flex-end', alignItems: 'center' }}>

                        <TouchableOpacity disabled={isDisabled} onPress={() => goBack()}>
                            <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', width: 278, height: 56, borderRadius: 6, borderWidth: 1, borderColor: '#79A532' }}>
                                {isDisabled ?
                                    <ActivityIndicator size={30} color={'white'} />
                                    :
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Voltar para o login</Text>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>

    );
}
