import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Index() {
  let [fontsLoaded] = useFonts({
    'ComingSoon-Regular': require('../assets/fonts/ComingSoon-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Image 
      style={{
        width: 350,
        height: 200,
      }}
      source={require('../assets/images/Lamp.png')}
      />

      <Image 
      style={{
        width: 380,
        height: 500,
      }}
      source={require('../assets/images/Omori.gif')}
      />
      
      <Link href="/whiteroom" style={styles.button} asChild>
        <TouchableOpacity>
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#0D0D0D',
    borderWidth: 2,
    borderColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 26, // Tamanho da fonte diferente
    color: '#F2F2F2', // Cor da fonte
    fontWeight: 'bold',
    fontFamily: 'ComingSoon-Regular',
  },
});
