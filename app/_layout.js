import {Pressable, View} from "react-native";
import {Link, Stack} from "expo-router";
import {Logo} from "../components/Logo";
import {CircleInfoIcon} from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {backgroundColor: "black"},
          headerTintColor: 'white',
          headerTitle: "",
          headerLeft: () => <Logo style={{ width: 176, height: 40 }} />,
          headerRight: () => (
            <Link asChild href="/(tabs)/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
