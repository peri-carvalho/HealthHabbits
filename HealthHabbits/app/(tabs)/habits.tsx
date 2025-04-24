import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
const habits = [ { id: '1', title: 'Beber água' }, { id: '2', title: 'Caminhada' } ];
export default function Habits() {
  return (
    <FlatList
      data={habits}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Link href={`/habit/${item.id}`}><Text>{item.title}</Text></Link>
      )}
    />
  );
}