import {Pressable, ScrollView, Text} from "react-native";
import {Link} from "expo-router";
import {HomeIcon} from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">About</Text>
      <Text className="text-white/90 mb-4">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aperiam doloribus ea est, exercitationem fugiat impedit in itaque libero officiis perferendis provident quidem tempora unde vel veritatis voluptatem voluptatibus.
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aperiam doloribus ea est, exercitationem fugiat impedit in itaque libero officiis perferendis provident quidem tempora unde vel veritatis voluptatem voluptatibus.
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aperiam doloribus ea est, exercitationem fugiat impedit in itaque libero officiis perferendis provident quidem tempora unde vel veritatis voluptatem voluptatibus.
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aperiam doloribus ea est, exercitationem fugiat impedit in itaque libero officiis perferendis provident quidem tempora unde vel veritatis voluptatem voluptatibus.
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aperiam doloribus ea est, exercitationem fugiat impedit in itaque libero officiis perferendis provident quidem tempora unde vel veritatis voluptatem voluptatibus.
      </Text>
    </ScrollView>
  );
}