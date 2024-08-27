import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Flex() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_01.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        MARI is teaching everyone how to make flower crowns! OMORI and KEL are holding MARI's example. So pretty...
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_02.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                    OMORI and KEL gave up and ran off, but AUBREY and I got the hang of it really fast!
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_03.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        HERO's still making his flower crown. It's taking him a little while, but he's getting it. You have to admire his persistence.
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_04.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        Everyone's eating watermelons. So juicy! AUBREY has some seeds on her face. Maybe someone should tell her.
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_05.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        KEL drinking a bottle of MILK, his favorite! I shouldn't get too close or he might get my camera wet.
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_06.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        MARI had HERO take a picture of us. Everyone thinks a flower crown really suits me.
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_07.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        HERO leaning in for a smooch! KEL looks so annoyed. Ah, brotherly love...
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_08.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        We're having a picnic today! MARI wanted to take a picture of everyone. Say cheese!
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_09.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        After eating, everyone fell asleep, except HERO and MARI. I'm getting kind of sleepy myself.
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_10.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        KEL said he took a picture of himself on accident, but I don't believe him....
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_ALBUM_11.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        All of our feet in a circle! Can you guess whose feet are whose?
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_Final_Blurry.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        MARI is teaching everyone how to make flower crowns! OMORI and KEL are holding MARI's example. So pretty...
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_New_Polaroid_1.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        Everyone helped me water my plants today! I tend to ramble on for too long when I start talking about plants, so I'm glad my friends listened to me!
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_New_Polaroid_2.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        We found an old couch in the JUNKYARD! There was only enough space on the couch for four people, but I don't mind. I have the best view in the entire world!
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_New_Polaroid_3.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        A spider suddenly fell from a tree and surprised everyone! HERO is too AFRAID to look.
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_New_Polaroid_4.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        Oh, boy! Oh, boy! We were able to score five tickets to "SWEETHEART'S QUEST FOR HEARTS"! I sure hope nothing unexpected happens...
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_New_Polaroid_5.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                        We're at the LAST RESORT! KEL keeps losing at slots. He should really learn when to stop.
                    </Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowReverse]}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_New_Polaroid_6.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        We stopped by the MUSTARD SUB for some grub! COMBO MEALS for everyone!!
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/whiteroom/album/DW_Final_Clear.webp')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>
                    My best friends... KEL, AUBREY, HERO, and OMORI! I'll cherish them all forever.
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
    rowReverse: {
        flexDirection: 'row-reverse',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 167,
        height: 200,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    text1: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "left",
    },
    text2: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "right",
    },
});

