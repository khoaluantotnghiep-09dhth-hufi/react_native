import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
export default class RatingProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        const { RatingProduct, onPress } = this.props;
        const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

        const result = average(RatingProduct.count);
        return (
            <>
                <View>
                    <Text>
                        Sản phẩm: {RatingProduct.id_product_info}
                    </Text>
                    <Text>
                        Đánh Giá: {RatingProduct.count}
                    </Text>
                    {/* <TouchableOpacity onPress={onPress}>
                        <Rating
                            type='heart'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                        />
                    </TouchableOpacity> */}
                </View>
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

