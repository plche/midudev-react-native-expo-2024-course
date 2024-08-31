import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import {getLatestGames} from "./lib/metacritic";
import Constants from "expo-constants";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then(games => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/*<SafeAreaView style={styles.safeArea}>*/}
        <ScrollView>
          {games.map(game => (
            <View key={game.slug} style={styles.card}>
              <Image source={{uri: game.image}} style={styles.image} />
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.score}>{game.score}</Text>
              <Text style={styles.description}>{game.description}</Text>
            </View>
          ))}
        </ScrollView>
      {/*</SafeAreaView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    padding: 12,
  },
  pressable: ({pressed}) => [
    {
      backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
    },
    styles.wrapperCustom,
  ],
  safeArea: {
    margin: 12,
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#eee',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "green",
    marginBottom: 10,
  },
});
