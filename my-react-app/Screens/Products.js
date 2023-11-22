import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image, Pressable, Pressable } from 'react-native';

export default function Products({ navigation }) {
    const [productList, setProductList] = useState([]);

    const getData = () => {
        let api = 'https://fakestoreapi.com/products';
        axios.get(api).then((res) => {
            setProductList([...res.data]);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Products</Text>
            {productList.map((product) => (
                <View key={product.id} style={styles.productContainer}>
                    <Pressable onPress={() => { navigation.navigate('SingleProduct', product); }}  >
                        <Image style={styles.image} source={{ uri: product.image }} />
                        <Text numberOfLines={1} style={styles.description}>{product.description}</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 500,
        display: 'flex',
        borderColor: 'black',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productContainer: {
        margin: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        padding: 15,
        marginBottom: 20,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 10,
    },

    description: {
        marginBottom: 10,
    },

});

