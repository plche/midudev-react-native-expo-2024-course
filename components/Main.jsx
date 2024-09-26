import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {getLatestGames} from "../lib/metacritic";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then(games => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
