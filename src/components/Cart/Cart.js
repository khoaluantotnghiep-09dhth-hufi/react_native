import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
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
        const { cart, onPress } = this.props;
        return (

            <View style={styles.container}>
                {/* <Image source={{ uri: dataProductInfo.image }} style={styles.productImage}></Image> */}
                <Text style={styles.title}>{cart.product.name}</Text>
                <Text style={styles.price}>Giá: {cart.product.price}</Text>
                {/* <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
                        <Text style={styles.appButtonText}>Mua Ngay</Text>
                    </TouchableOpacity> */}
                {/* <Text style={styles.description}>Mô Tả: {dataProductInfo.description}</Text> */}

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
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
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#ff4500',
    },
    price: {
        marginBottom: 8,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ff4500',
        paddingTop: 10
    },
    description: {
        marginBottom: 8,

        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        paddingTop: 10
    },
    productImage: {
        width: 380,
        height: 500,
        borderRadius: 30 / 2
    },
    buttons: {
        color: '#ff4500',
        fontWeight: 'bold',
        fontSize: 18,
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
        flex: 1,
        justifyContent: 'space-between'
    },
    appButtonText2: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    textSizeColor: {
        fontSize: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    textPickerel: {
        fontSize: 22,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#ff4500',
    },
    quantity: {
        alignSelf: "center",
        width: 20,
        color: '#ff4500',
        fontSize: 18,
        paddingLeft: 7
    },
    containerQuantity: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: "center",
    },
    buttonContainerQuantity: {
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonQuantity: {
        fontSize: 28,
    }
})
