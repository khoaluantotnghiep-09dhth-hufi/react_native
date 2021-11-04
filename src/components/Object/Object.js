import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground, Swiper } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
export default class Object extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { data, onPress } = this.props;
        return (
            <>
                <View style={styles.wrapper}>
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                     
                        <Text style={styles.title}>{data.name}</Text>
                    </TouchableOpacity>
                </View>
              
            </>
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
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#ff4500',
        fontWeight: 'bold',
        flex: 1,
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
        borderRadius: 150 / 2
    },
    wrapper: {
        backgroundColor: '#FFF',
   
        shadowColor: '#2E272B',
        // shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        flex: 1,
        // padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#ff4500',
    }
})
