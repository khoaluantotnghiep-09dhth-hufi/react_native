import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _handlePress = () => {
        alert("THêm thành công nè =))")
    }
    render() {
        const { product } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{product.name}</Text>
                <Image source={ImageSP} style={styles.productImage}></Image>
                <Text style={styles.price}>Giá: {product.price}</Text>
                <Button
                    style={{ fontSize: 20, color: 'green', backgroundColor: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    onPress={() => this._handlePress()}
                    title="Thêm Giỏ Hàng"
                >
                    Thêm Giỏ Hàng
                </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,

    },
    price: {
        marginBottom: 8,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        paddingTop: 10
    },
    productImage: {
        width: 170,
        height: 170,
    }
})
