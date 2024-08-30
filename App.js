import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';

// const icon = require('./assets/icon.png')
// import icon from './assets/icon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/*<Image source={{ uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg" }} style={styles.image} />*/}
      {/*<Text style={styles.text}>Tenemos aquí la app</Text>*/}
      {/*<Button color='red' title="Pulsa aquí" onPress={() => alert("Hola")} />*/}
      {/*<TouchableHighlight style={styles.touchable} underlayColor={"#09f"} onPress={() => alert("Hola")}>
        <Text style={styles.text}>Pulsa aquí</Text>
      </TouchableHighlight>*/}
      {/*<TouchableOpacity style={styles.touchable} onPress={() => alert("Hola")}>
        <Text style={styles.text}>Pulsa aquí</Text>
      </TouchableOpacity>*/}
      <Pressable
        onPress={() => {}}
        style={styles.pressable}>
        {({pressed}) => (
          <Text style={{fontSize: pressed ? 32 : 16,}}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 215,
    height: 294,
    resizeMode: 'center',
  },
  /*text: {
    color: 'white',
  },*/
  touchable: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: ({pressed}) => [
    {
      backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
    },
    styles.wrapperCustom,
  ],
});
