import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
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
        const { dataProduct, onPress } = this.props;
        return (

            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <Image source={{ uri: dataProduct.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProduct.name}</Text>
                    <Text style={styles.price}>Giá: {dataProduct.price}</Text>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
                        <Text style={styles.appButtonText}>Thêm Giỏ Hàng</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
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
        width: 170,
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
        borderRadius: 30 / 2
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ff4500",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
})
