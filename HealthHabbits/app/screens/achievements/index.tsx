import { View, Text, TouchableOpacity, FlatList } from "react-native";
import useAchievements from "./achievements.vm";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { exit_icon } from "@/assets/svgs/exit_icon";
import { SvgXml } from 'react-native-svg';

export default function Achievements() {

    const { windowHeight, windowWidth, goLogin, data } = useAchievements()
    return (
        <View style={{ flex: 1, backgroundColor: '#121214' }}>
            <View style={{ height: windowHeight * 0.15, backgroundColor: '#202024', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 328 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <MaterialIcons name="account-circle" size={44} color="white" />
                        </View>
                        <View style={{ marginLeft: 15, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
                            <Text style={{ fontSize: 17, color: 'white' }}>Olá,</Text>
                            <Text style={{ fontSize: 17, color: 'white', fontWeight: '500' }}>Novo Usuário</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => goLogin()}>
                            <SvgXml
                                xml={exit_icon}
                                width={32}
                                height={32}
                                preserveAspectRatio="none"

                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 25, width: windowWidth, alignItems: 'center' }}>
                <View style={{ justifyContent: 'space-between', width: windowWidth * 0.9, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: '800', color: '#C4C4CC' }}>Conquistas</Text>
                    <Text style={{ fontSize: 18, color: '#C4C4CC' }}>{data.length}</Text>
                </View>
            </View>

            <View style={{ marginTop: 35, width: windowWidth, alignItems: 'center' }}>
                <FlatList
                    key={'vertical'}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{
                            width: 100,
                            height: 100,
                            margin: 10,
                            backgroundColor: '#29292E',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 8
                        }}>
                            {item.icon === 'dumbbell' ?
                                <MaterialCommunityIcons name={item.icon} size={28} color="white" />
                                :
                                <MaterialIcons name={item.icon as any} size={28} color="white" />
                            }
                            <Text style={{ marginTop: 10, color: 'white', fontSize: 12, fontWeight: 700 }}>{item.description}</Text>
                        </View>
                    )}
                    ListFooterComponent={<View style={{ padding: 10 }} />}
                />

            </View>
        </View>
    );
}