import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import list from '../actions.json'
import imageMappings from '../imageMappings';

export default function coffeeSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listProduct.find(
        (item) => item.id == id)
    // console.log(data)

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={imageMappings[data.image]}
            />
            <View style={styles.containerSingle}>
                <Text style={styles.titleProduct}>  {data.title} </Text>
                <Text style={styles.description}> {data.description} </Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerSingle: {
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderEndEndRadius: 17,
        borderEndStartRadius: 17,
        
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 10

    },
});