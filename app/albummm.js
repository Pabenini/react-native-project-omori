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
                    MARI está ensinando a todos como fazer tiara de flores! OMORI e KEL estão segurando o exemplo de MARI. Tão bonito...
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
                    OMORI e KEL desistiram, mas AUBREY e eu pegamos o jeito muito rápido!
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
                    HERO ainda está fazendo sua tiara de flores. Está demorando um pouco, mas ele está pegando o jeito. Temos que admirar sua persistência.
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
                    Todo mundo está comendo melancia. Tão suculenta! AUBREY tem algumas sementes no rosto. Talvez alguém devesse contar a ela.
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
                    KEL bebendo uma garrafa de LEITE, seu favorito! Eu não deveria chegar muito perto ou ele pode molhar minha câmera.
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
                    MARI pediu pro HERO tirar uma foto nossa. Todo mundo acha que uma tiara de flores realmente combina comigo.
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
                    HERO se inclinando para um beijo! KEL parece tão irritado. Ah, amor entre irmãos...
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
                    Vamos fazer um piquenique hoje! MARI queria tirar uma foto de todo mundo. Digam xis!
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
                    Depois de comer, todos dormiram, exceto HERO e MARI. Eu também estou ficando meio sonolento.
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
                    KEL disse que tirou uma foto de si mesmo por acidente, mas eu não acredito nele...
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
                    Todos os nossos pés em um círculo! Você consegue adivinhar quais pés são de quem?
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
                        .- -- --- -. --. ..- ... -.- -.- -.-
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
                    Todo mundo me ajudou a regar minhas plantas hoje! Costumo divagar por muito tempo quando começo a falar sobre plantas, então estou feliz que meus amigos me ouviram!
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
                    Encontramos um sofá velho no FERRO-VELHO! Só havia espaço suficiente no sofá para quatro pessoas, mas não me importo. Tenho a melhor vista do mundo inteiro!
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
                    Uma aranha caiu de repente de uma árvore e surpreendeu a todos! O HERÓI está COM MEDO demais para olhar.
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
                    Nossa! Nossa! Conseguimos cinco ingressos para "SWEETHEART EM BUSCA DE CORAÇÕES"! Espero que nada inesperado aconteça...
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
                    Estamos no ÚLTIMO RESORT! KEL continua perdendo nos caça níquel. Ele realmente deveria aprender quando parar.
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
                    Paramos no MUSTARD SUB para comer alguma coisa! REFEIÇÃO COMBO para todos!!
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
                    Meus melhores amigos... KEL, AUBREY, HERO e OMORI! Vou valoriza-los para sempre.
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
        fontFamily: 'ComingSoon-Regular',
    },
    text2: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "right",
        fontFamily: 'ComingSoon-Regular',
    },
});

