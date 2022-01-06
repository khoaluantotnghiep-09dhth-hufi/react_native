import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
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
    onChangedQuantityMinus = (product) => {
        if (this.state.quantity < 1 || this.state.quantity === 1) {
            // Alert.alert("Thông báo", "Số lượng phải lớn hơn 0 !", [
            //     { text: "OK" }
            // ])
            var { onDeleteInCart } = this.props;
            onDeleteInCart(product);
        }
        else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }

    }
    currencyFormat = (num) => {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ";
    };
    showTotal = (price, quantity) => {
        return price * quantity;
    }
    showTotalCart = (price, quantity) => {
        return price * quantity;
    }
    onDelete = (product) => {
        var { onDeleteInCart } = this.props;
        onDeleteInCart(product);
    }
    render() {
        const { cart, onPress, onDeleteInCart } = this.props;
        let { quantity } = this.state;
        return (
            <>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <Image source={{ uri: cart.product.image }} style={styles.productImage}></Image>
                        <Text style={styles.title}>{cart.product.name}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.price}>Giá: {this.currencyFormat(this.showTotal(cart.product.price, quantity))}</Text>
                        <View style={styles.containerQuantity}>
                            <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.onChangedQuantityMinus(cart.product)}>
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
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.onDelete(cart.product)}>
                            <Text style={styles.buttonQuantity}>Xóa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )


    }
}
const styles = StyleSheet.create({

    container2: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        width: '100%',
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
    containerText: {
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: '#FFF',
        width: '100%',
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
        marginTop: 19,
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
        paddingLeft: 200,
        marginBottom: 8,
    },
    buttonQuantity: {
        fontSize: 28,
    }
})
