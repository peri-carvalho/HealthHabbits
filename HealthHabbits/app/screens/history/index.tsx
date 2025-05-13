import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { ranking_icon } from "@/assets/svgs/ranking_icon";
import useHistory from "./history.vm";
import { SvgXml } from "react-native-svg";

export default function History() {

    const { windowHeight, windowWidth, UsersRanking } = useHistory()
    return (
        <View style={{ flex: 1, backgroundColor: '#121214' }}>
            <View style={{ height: windowHeight * 0.09, backgroundColor: '#202024', alignItems: 'center', justifyContent: 'center' }}>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={UsersRanking.users}
                    ListHeaderComponent={
                        <View style={{ alignItems: 'flex-start', width: windowWidth * 0.8 }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: '#D9D9D9', fontWeight: '500', fontSize: 15 }}>Pontuação Individual:</Text>
                            </View>
                            <View style={{ justifyContent: 'center', width: windowWidth * 0.8, backgroundColor: '#202024', height: 87, flexDirection: 'row', alignItems: 'center', borderRadius: 8, marginTop: 20 }}>
                                <View style={{ justifyContent: 'space-between', width: windowWidth * 0.7, flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <SvgXml xml={ranking_icon} width={34} height={26}></SvgXml>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>Pontos</Text>
                                        <Text style={{ color: 'white', fontSize: 16 }}>{UsersRanking.myUserPoints} pontos</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ color: '#D9D9D9', fontWeight: '500', fontSize: 15, marginTop: 20, marginBottom:20 }}>Ranking:</Text>
                            </View>
                        </View>
                    }
                    renderItem={({ item }) =>
                        <View style={{ justifyContent: 'space-between', marginTop: 20, flexDirection: 'row', width: windowWidth * 0.8 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 28, height: 28, borderRadius: 100, backgroundColor: '#D9D9D9' }}></View>
                                <Text style={{ color: 'white', marginLeft: 10, fontWeight: '500', fontSize: 15 }}>{item.username}</Text>
                            </View>
                            <View >
                                <Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>{item.points} pts</Text>
                            </View>
                        </View>
                    }
                    ListFooterComponent={
                        <View style={{ padding: 50 }}></View>
                    }
                />
            </View>
        </View>
    );
}