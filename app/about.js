import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router"; // Importar Link
export default function About2() {
    return (
        <View style={styles.container}>
            <Text> Texto Texto TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</Text>
            <Link href="/albummm" style={styles.otherbutton} asChild>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    ) 
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    otherbutton: {
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
})