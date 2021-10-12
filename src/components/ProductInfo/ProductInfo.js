import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import * as actionsProductInfo from "../../actions/ProductInfo/ProductInfoActions";
import { connect } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setIsVisible: false,
            quantity: 1,
            idColor: '',
            idSize: '',
            ColorSizeArr: [],
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataproductInfoSizeColor !== this.props.dataproductInfoSizeColor) {
            let arrColor = this.props.dataproductInfoSizeColor;
            this.setState({
                ColorSizeArr: arrColor,
                idColor: arrColor && arrColor.length > 0 ? arrColor[0].idColor : '',
                idSize: arrColor && arrColor.length > 0 ? arrColor[0].idSize : ''
            })
        }
    }
    _handlePress = () => {
        this.setState({
            setIsVisible: true,
        })
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
    onChangeSelectSize = (value) => {
        this.setState({
            idSize: value,
        })
    }
    onChangeSelectColor = (value) => {
        this.setState({
            idColor: value,
        })
    }
    render() {
        const { dataProductInfo, dataproductInfoSizeColor } = this.props;
        let { idColor, idSize, quantity } = this.state;
        const { navigation } = this.props;
        console.log(this.state);
        return (
            <>
                <View style={styles.container}>
                    <Image source={{ uri: dataProductInfo.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProductInfo.name}</Text>
                    <Text style={styles.price}>Giá: {dataProductInfo.price}</Text>
                    <View style={styles.appButtonContainerMain}>
                        <TouchableOpacity style={styles.appButtonContainerAddCart} onPress={() => this.RBSheet.open()}>
                            <FontAwesome name="cart-plus" size={36} color="#1e1e1e" style={styles.appButtonText} />
                            <Text style={styles.appButtonText}>Thêm Giỏ Hàng</Text>
                        </TouchableOpacity>
                        <Text>{"\n"}
                        </Text>
                        <TouchableOpacity style={styles.appButtonContainerPay} onPress={() => this.RBSheet.open()}>
                            <Text style={styles.appButtonText}>Mua Ngay</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.description}>Mô Tả: {dataProductInfo.description}</Text>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={340}
                        width={200}
                        openDuration={250}
                        customStyles={{
                            container: {
                                justifyContent: "center",
                                borderRadius: 30 / 2
                            }
                        }}
                    >
                        <Text style={styles.textSizeColor}>Kích Cỡ</Text>
                        <Picker
                            selectedValue={idSize}
                            style={styles.textPickerel}
                            onValueChange={(itemValue, itemIndex) => this.onChangeSelectSize(itemValue)}
                        >
                            {dataproductInfoSizeColor && dataproductInfoSizeColor.map((item, index) => {
                                return <Picker.Item label={item.nameSize} value={item.idSize} key={index} />
                            })}

                        </Picker>
                        <Text style={styles.textSizeColor}>Màu</Text>
                        {/*  */}
                        <Picker
                            selectedValue={idColor}
                            style={styles.textPickerel}
                            onValueChange={(itemValue, itemIndex) => this.onChangeSelectColor(itemValue)}
                        >
                            {dataproductInfoSizeColor && dataproductInfoSizeColor.map((item, index) => {
                                return <Picker.Item label={item.nameColor} value={item.idColor} key={index} />
                            })}

                        </Picker>
                        <Text style={styles.textSizeColor}>Số Lượng</Text>
                        {/*  */}
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

                        <TouchableOpacity style={styles.appButtonContainer} onPress={() =>
                            navigation.navigate('Giỏ Hàng')}>
                            <Text style={styles.appButtonText2}>Mua Hàng</Text>
                        </TouchableOpacity>
                    </RBSheet>
                </View>

            </>
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
    appButtonContainerMain: {
        flexDirection: 'row',
        paddingRight: 20,
        justifyContent: 'space-between',
        paddingLeft: 2,
        paddingRight: 2,
    },
    appButtonContainerPay: {
        elevation: 8,
        backgroundColor: "#ff4500",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 190,

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ff4500",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 28,
    },
    appButtonContainerAddCart: {
        width: 190,
        flexDirection: 'row',
        elevation: 8,
        backgroundColor: "#00ff7f",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        justifyContent: 'space-between',
        paddingRight: 10
    },
    appButtonText2: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",

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
export default ProductInfo;

