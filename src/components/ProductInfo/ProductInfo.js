import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _handlePress = () => {
        alert("THêm thành công nè =))")
    }
    render() {
        const { dataProductInfo } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} >
                    <Image source={{ uri: dataProductInfo.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProductInfo.name}</Text>
                    <Text style={styles.price}>Giá: {dataProductInfo.price}</Text>
                    <Text style={styles.price}>Màu: {dataProductInfo.nameColor}</Text>
                    <Text style={styles.price}>Size: {dataProductInfo.nameSize}</Text>
                    <Button
                        style={{ fontSize: 20, color: 'green', backgroundColor: 'white' }}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => this._handlePress()}
                        title="Thêm Giỏ Hàng"
                    >
                        Thêm Giỏ Hàng
                    </Button>
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
    }
})
