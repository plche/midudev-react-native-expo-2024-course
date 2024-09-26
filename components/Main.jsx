import { useState, useEffect } from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {getLatestGames} from "../lib/metacritic";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {GameCard} from "./GameCard";

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
      {games.length === 0 ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList data={games} keyExtractor={(game) => game.slug} renderItem={({ item }) => <GameCard game={item} />} />
      )}
    </View>
  );
}
