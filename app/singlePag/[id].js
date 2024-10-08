import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Link } from "expo-router";
import list from '../tals.json'
import book from '../pictures';

export default function CoffeeSingle() {
    const { id } = useLocalSearchParams();
    const data = list.picturik.find((item) => item.id == id);

    // Verifica se há imagens e mapeia cada uma para o componente Image
    const images = data?.image.map(imageName => book[imageName]) || [];

    return (
        <ScrollView style={styles.container}>
            {images.length > 0 ? (
                images.map((imageSource, index) => (
                    <Image
                        key={index}
                        style={styles.image}
                        source={imageSource}
                    />
                ))
            ) : (
                <Text>No images available</Text>
            )}
    
            {data?.text && (
                <Text style={styles.text}>{data.text}</Text>
            )}
            
            {id == 5 && (
                <Link href="/about" style={styles.otherbutton} asChild>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                            Abrir a porta
                        </Text>
                    </TouchableOpacity>
                </Link>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 350,
        height: 250, // Ajuste a altura conforme necessário
        margin: 5,
    },
    text: {
        margin: 10,
        fontSize: 17,
        color: '#F2F2F2',
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontFamily: 'ComingSoon-Regular',
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
        fontFamily: 'ComingSoon-Regular',
    },
});
