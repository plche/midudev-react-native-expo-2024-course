import {View, Text} from "react-native";
import {Link, Stack, useLocalSearchParams} from "expo-router";
import {Screen} from "../components/Screen";
import {Logo} from "../components/Logo";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: "#ffee00"},
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The Legend of Zelda: Breath of the Wild",
          headerRight: () => {},
        }}
      />
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </Screen>
  );
}
