import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground, Swiper } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
export default class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { data, onPress } = this.props;     
        return (
            <>
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <View style={styles.container}>
                        <Image source={{ uri: data.image }} style={styles.productImage}></Image>
                        <Text style={styles.title}>{data.name}</Text>
                    </View>
                    <View style={styles.styleBot}>
                        <Text style={styles.price}>Số lượng: {data.quantity}</Text>
                        <Text style={styles.price}>Size: {data.nameSize}</Text>
                        <Text style={styles.price}>Màu: {data.nameColor}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
}
const styles = StyleSheet.create({
    styleBot: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#ff4500',
        paddingLeft: 10,
        paddingTop: 0,
        width: 300
    },
    price: {
        marginBottom: 8,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        paddingTop: 0,
        paddingLeft: 10
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 30 / 2
    },
    wrapper: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#ff4500',
    }
})
