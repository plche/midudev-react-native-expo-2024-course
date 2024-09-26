import {Pressable, ScrollView, Text} from "react-native";
import {Link} from "expo-router";
import {HomeIcon} from "../../components/Icons";
import {styled} from "nativewind";
import {Screen} from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable>
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
    </Screen>
  );
}
