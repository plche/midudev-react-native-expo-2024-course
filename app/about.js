import {ScrollView, Text} from "react-native";
import {Link} from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className={"text-blue-400 text-xl mt-24"}>
        Home
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