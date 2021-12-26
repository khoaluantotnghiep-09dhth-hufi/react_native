import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
export default class ProductByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _handlePress = () => {
        alert("THêm thành công nè =))")
    }
    currencyFormat = (num) => {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " VND";
    };
    render() {
        const { dataProductByCategory, onPress } = this.props;
        console.log('ProductByCategory ' + '\n' + dataProductByCategory)
        return (

            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <Image source={{ uri: dataProductByCategory.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProductByCategory.name}</Text>
                    <Text style={styles.price}>Giá: {this.currencyFormat(dataProductByCategory.price)}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 6,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        width: '50%',
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
        width: 230,
        height: 230,
        borderRadius: 30 / 2
    }
})
