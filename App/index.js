// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const tales = [
  { id: '1', title: 'The Little Red Riding Hood' },
  { id: '2', title: 'Cinderella' },
  { id: '3', title: 'Snow White' },
  { id: '4', title: 'Sleeping Beauty' },
  { id: '5', title: 'Hansel and Gretel' },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taleItem}
      onPress={() => navigation.navigate('Tale', { taleId: item.id, title: item.title })}
    >
      <Text style={styles.taleTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tales}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const talesContent = {
  '1': 'Once upon a time, there was a little girl who lived in a village near the forest...',
  '2': 'Once upon a time, there was a girl named Cinderella who lived with her cruel stepmother and stepsisters...',
  '3': 'Once upon a time, there was a beautiful princess named Snow White who lived with her wicked stepmother...',
  '4': 'Once upon a time, there was a princess who was cursed to sleep for a hundred years...',
  '5': 'Once upon a time, there were two siblings named Hansel and Gretel who were lost in the forest...',
};

const TaleScreen = ({ route }) => {
  const { taleId, title } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{talesContent[taleId]}</Text>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
          <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Tale' }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  list: {
    padding: 20,
  },
  taleItem: {
    backgroundColor: '#F8F8F8',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  taleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
  },
});