import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from "expo-router"; // Importar Link

export default function About2() {
    return (
        <ImageBackground
            resizeMode="cover"
            source={require('../assets/images/whiteroom/Space_parallax.webp')}
            style={styles.backgroundOne}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={require('../assets/images/whiteroom/album/PHOTO_ALBUM.webp')} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>1. Album</Text>
                            </View>
                        </View>
                        <Link
                            href="/albummm"
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Interagir</Text>
                        </Link>
                    </View>
                </View>
                <View style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={require('../assets/images/whiteroom/characters/OMORI_Sprite_run.webp')} style={styles.image2} />
                            <View style={styles.textContainer2}>
                                <Text style={styles.titleProduct2}>2. Characters</Text>
                            </View>
                        </View>
                        <Link
                            href="/characters"
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Interagir</Text>
                        </Link>
                    </View>
                </View>
                <View style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={require('../assets/images/whiteroom/map/Dream_World.webp')} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>3. Map</Text>
                            </View>
                        </View>
                        <Link
                            href="/map"
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Interagir</Text>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1, // Preenche o espaço disponível dentro do ImageBackground
        padding: 20,
    },
    itemButton: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden', // Garante que o conteúdo não ultrapasse as bordas
    },
    itemContainer: {
        borderRadius: 8,
        padding: 10,
        flexDirection: 'column',
        width: '100%',
        borderColor: '#000', // Cor da borda
        borderWidth: 5,     // Largura da borda
        borderRadius: 15,   // Bordas arredondadas
        borderStyle: 'solid', // Estilo da borda
    },
    itemContainerDetails: {
        flexDirection: 'row', // Organiza imagem e texto lado a lado
        alignItems: 'center', // Alinha a imagem e o texto no topo
        marginBottom: 10, // Espaço entre a imagem/texto e o botão
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    image2: {
        width: 80,
        height: 80,
        marginLeft: 15,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 35, // Ajuste o espaço entre a imagem e o texto
    },textContainer2: {
        flex: 1,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'ComingSoon-Regular',
    },
    titleProduct2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginRight: 30,
        fontFamily: 'ComingSoon-Regular',
    },
    description: {
        marginTop: 5,
        fontSize: 18,
        lineHeight: 18,
        textAlign: 'left',
        fontFamily: 'ComingSoon-Regular',
    },
    itemLink: {
        backgroundColor: '#000', // Cor de fundo do botão
        paddingVertical: 15, // Espaçamento vertical do botão
        paddingHorizontal: 110, // Espaçamento horizontal do botão
        borderRadius: 30,
        alignItems: 'center', // Centraliza o texto dentro do botão
        justifyContent: 'center', // Alinha o texto verticalmente no botão
        marginTop: 10, // Espaço entre o item e o botão
        alignSelf: 'center', // Alinha o botão ao centro horizontalmente
    },
    linkText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'ComingSoon-Regular',
    },
    backgroundOne: {
        flex: 1, // Ocupa todo o espaço disponível
        width: '100%', // Usa 100% da largura da tela
        height: '100%', // Usa 100% da altura da tela
    },
});
