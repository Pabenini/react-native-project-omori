import { Text, ScrollView, View, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router"; // Importar Link
import list from './actions.json';
import imageMappings from './imageMappings';

export default function Products() {
    return (
        <ScrollView style={styles.container}>
            {list.listProduct.map((item) => (
                <View key={item.id} style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={imageMappings[item.image]} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                        <Link
                            href={{
                                pathname: "/singlePag/[id]",
                                params: { id: item.id }
                            }}
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Interagir</Text>
                        </Link>

                    </View>

                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#fff',
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    itemButton: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden', // Garante que o conteúdo não ultrapasse as bordas
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'column',
        width: '100%',
        borderColor: '#000', // Cor da borda
        borderWidth: 5,     // Largura da borda
        borderRadius: 15,   // Bordas arredondadas
        borderStyle: 'solid', // Estilo da borda
        //alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemContainerDetails: {
        flexDirection: 'row', // Organiza imagem e texto lado a lado
        alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemLink: {
        backgroundColor: '#000', // Cor de fundo do botão
        paddingVertical: 15, // Espaçamento vertical do botão
        paddingHorizontal: 20, // Espaçamento horizontal do botão
        marginTop: 10, // Espaço entre o item e o botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        justifyContent: 'center', // Alinha o texto verticalmente no botão
        borderRadius: 30,
        textAlign: 'center'
    },
    linkText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'ComingSoon-Regular',
    },
    image: {
        width: 90,
        height: 110,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 40,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'ComingSoon-Regular',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'left',
        fontFamily: 'ComingSoon-Regular',
    },
    
});
