import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Flex() {
    let [fontsLoaded] = useFonts({
        'ComingSoon-Regular': require('../assets/fonts/ComingSoon-Regular.ttf'),
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/characters/OMORI_NEUTRAL.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        OMORI is the titular deuteragonist in OMORI. OMORI can be controlled by the player during the night, where WHITE SPACE and the areas of HEADSPACE can be explored. When OMORI is in the lead, he can cut down obstacles with his knife.
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/characters/AUBREY_NEUTRAL.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        AUBREY is one of the main three deuteragonists in OMORI that join OMORI's party. In the FARAWAY TOWN sections of the game, she serves as a minor antagonist. When tagged as the leader, AUBREY can smash obstacles with a bat.
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/characters/KEL_NEUTRAL.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        KEL is one of the main three deuteragonists that join OMORI's party in OMORI. When tagged as the leader, KEL can throw various ball projectiles from certain platforms to hit objects otherwise inaccessible to the party.
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/characters/Heronormal.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        HERO is one of the main three deuteragonists in OMORI that join OMORI's party. When tagged as the leader, HERO can use his charm to convince others to assist the party.
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/characters/Basil_Neutral_29.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        BASIL is a major supporting character and the tritagonist in OMORI. He serves as one of the major driving forces behind the story's events as the party spends most of the game looking for him after his sudden disappearance.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 170,
        height: 170,
        borderColor: "#000",
        borderWidth: 2,
        borderStyle: "solid",
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    text1: {
        fontSize: 15,
        lineHeight: 24,
        textAlign: "left",
        fontFamily: "ComingSoon-Regular",
    },
});