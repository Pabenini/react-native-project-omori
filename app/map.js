import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

export default function map() {
    return (
        <ScrollView contentContainerStyle={styles.container}>   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/Dream_World2.webp')}
            />    
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/VAST_FOREST_Logo.webp')}
            />   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/OTHERWORLD_Logo.webp')}
            />    
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/JUNKYARD_Logo.webp')}
            />   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/PYREFLY_FOREST_Logo.webp')}
            />    
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/SPROUT_MOLE_VILLAGE_Logo.webp')}
            />   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/SWEETHEART_CASTLE_Logo.webp')}
            />    
            <Image
                style={styles.image2}
                source={require('../assets/images/whiteroom/map/LAST_RESORT_Logo.webp')}
            />   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/GHOST_PARTY_Logo.webp')}
            />    
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/UNDERWATER_HIGHWAY_Logo.webp')}
            />   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/HUMPHREY_Logo.webp')}
            />    
            <Image
                style={styles.image2}
                source={require('../assets/images/whiteroom/map/ORANGE_OASIS_Logo.webp')}
            />   
            <Image
                style={styles.image2}
                source={require('../assets/images/whiteroom/map/RAIN_TOWN_Logo.webp')}
            />    
            <Image
                style={styles.image2}
                source={require('../assets/images/whiteroom/map/SNOWGLOBE_MOUNTAIN_Logo.webp')}
            />   
            <Image
                style={styles.image}
                source={require('../assets/images/whiteroom/map/THE_ABYSS_Logo.webp')}
            />
        </ScrollView>
        );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: 340,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 340,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
});