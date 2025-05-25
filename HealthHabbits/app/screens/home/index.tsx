import { View, Text, TouchableOpacity, FlatList } from "react-native";
import useHome from "./home.vm";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { exit_icon } from "@/assets/svgs/exit_icon";
import { SvgXml } from 'react-native-svg';

export default function Home() {

    const { windowHeight, windowWidth, arrayCategories, selectionCategory, setSelectionCategory, arrayActivites, image_type, goLogin, goHabit, goAchievements,userName } = useHome()
    return (
        <View style={{ flex: 1, backgroundColor: '#121214' }}>
            <View style={{ height: windowHeight * 0.15, backgroundColor: '#202024', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 328 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <MaterialIcons name="account-circle" size={44} color="white" />
                        </View>
                        <View style={{ marginLeft: 15, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
                            <Text style={{ fontSize: 17, color: 'white' }}>Olá, {userName}</Text>
                            <TouchableOpacity onPress={()=> goAchievements()}>
                                <Text style={{ fontSize: 17, color: 'white', fontWeight: '500' }}>Conquistas</Text>
                            </TouchableOpacity>
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
            <View style={{ marginTop: 20 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={arrayCategories}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => setSelectionCategory(item.id)}>
                            <View style={{ height: 43, width: 96, backgroundColor: '#202024', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginLeft: 18, borderWidth: selectionCategory === item.id ? 1 : 0, borderColor: selectionCategory === item.id ? '#79A532' : '#202024' }}>
                                <Text style={{ fontSize: 10, color: selectionCategory === item.id ? '#79A532' : 'white' }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    ListFooterComponent={
                        <View style={{ padding: 10 }}></View>
                    }
                />
            </View>

            <View style={{ marginTop: 25, width: windowWidth, alignItems: 'center' }}>
                <View style={{ width: windowWidth * 0.85, alignItems: 'center' }}>
                    <View style={{ width: windowWidth * 0.85, height: 40, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>Habits</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>{arrayActivites.length}</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={arrayActivites}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => goHabit()}>
                                    <View style={{ height: 83, width: windowWidth * 0.83, backgroundColor: '#202024', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                        <View style={{ height: 75, width: windowWidth * 0.76, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row', width: 200 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <SvgXml xml={image_type(item.type)} width={67} height={67}></SvgXml>
                                                </View>
                                                <View style={{ marginLeft: 10, width: 120, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>{item.name}</Text>
                                                    <Text style={{ fontSize: 12, color: 'white' }}>{item.objectives}</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <SimpleLineIcons name="arrow-right" size={18} color="white" />
                                            </View>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            }
                            ListFooterComponent={
                                <View style={{ padding: 10 }}></View>
                            }
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}