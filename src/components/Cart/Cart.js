import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cart.quantity,

        }
    }
    _handlePress = () => {
        alert("Thêm thành công nè =))")
    }
    onChangedQuantityPlus = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    onChangedQuantityMinus = () => {
        if (this.state.quantity < 1 || this.state.quantity === 1) {
            alert("Số lượng fai lớn hơn 0")
        }
        else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }
  
    render() {
        const { cart, onPress } = this.props;
        console.log("giỏ hàng", cart)
        let { quantity } = this.state;
        return (
            <>
                <View style={styles.container}>
                    <Image source={{ uri: cart.product.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{cart.product.name}</Text>
                    <Text style={styles.price}>{cart.product.idSize}</Text>
                    <Text style={styles.price}>{cart.product.idColor}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.price}>Giá: {cart.product.price}</Text>
                    <View style={styles.containerQuantity}>
                        <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.onChangedQuantityMinus()}>
                            <Text style={styles.buttonQuantity}>-</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.quantity}
                            // onChangeText={(text) => this.onChanged(text)}
                            maxLength={10}
                            value={quantity.toString()}
                        />
                        <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.onChangedQuantityPlus()}>
                            <Text style={styles.buttonQuantity}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
                            <Text style={styles.appButtonText}>Mua Ngay</Text>
                        </TouchableOpacity> */}
                {/* <Text style={styles.description}>Mô Tả: {dataProductInfo.description}</Text> */}


            </>
        )


    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    containerText: {
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: '#FFF',
    },
    containerQuantity: {
        flexDirection: 'column',

    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#ff4500',
        paddingLeft: 10
    },
    price: {
        marginBottom: 8,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ff4500',
        // paddingTop: 120,
        paddingLeft: 10

    },
    quantity: {
        marginBottom: 8,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ff4500',
        width: 400
    },
    description: {
        marginBottom: 8,

        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        paddingTop: 10
    },
    productImage: {
        width: 100,
        height: 100,
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
    },
    containerQuantity: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: "center",
        paddingLeft: 200
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
