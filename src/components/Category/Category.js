import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image source={{ uri: data.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{data.name}</Text>
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
