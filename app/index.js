import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#F2F2F2',
    fontWeight: 'bold',
  },
});