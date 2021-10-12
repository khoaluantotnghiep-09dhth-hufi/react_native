import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import * as actionsProductInfo from "../../actions/ProductInfo/ProductInfoActions";
import { connect } from "react-redux";
import { Picker } from "@react-native-picker/picker";
export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2,
            activeIndex: 0,
            setIsVisible: false,
            quantity: 1,
            value: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    _handlePress = () => {
        this.setState({
            setIsVisible: true,
        })
    }
    updateIndex(selectedIndex) {
        this.setState({
            selectedIndex
        })
    }
    onChangedQuantityPlus = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    onChangedQuantityMinus = () => {
        if (this.state.quantity < 1 || this.state.quantity === 0) {
            alert("Số lượng fai lớn hơn 0")
        }
        else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }

    }
    render() {
        const { dataProductInfo, dataproductInfoSizeColor } = this.props;
        const { selectedIndex, quantity } = this.state;
        return (
            <>
                <View style={styles.container}>
                    <Image source={{ uri: dataProductInfo.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProductInfo.name}</Text>
                    <Text style={styles.price}>Giá: {dataProductInfo.price}</Text>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
                        <Text style={styles.appButtonText}>Mua Ngay</Text>
                    </TouchableOpacity>
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
                                // alignItems: "center",
                                borderRadius: 30 / 2
                            }
                        }}
                    >
                        <Text style={styles.textSizeColor}>Kích Cỡ</Text>
                        <Picker
                            // selectedValue={selectedValue}
                            style={styles.textPickerel}
                        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            {dataproductInfoSizeColor && dataproductInfoSizeColor.map((item, index) => {
                                return <Picker.Item label={item.nameSize} value={item.idSize} />
                            })}

                        </Picker>
                        <Text style={styles.textSizeColor}>Màu</Text>
                        {/*  */}
                        <Picker
                            // selectedValue={selectedValue}
                            style={styles.textPickerel}
                        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            {dataproductInfoSizeColor && dataproductInfoSizeColor.map((item, index) => {
                                return <Picker.Item label={item.nameColor} value={item.idColor} />
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
                            // value={this.state.quantity}
                            />
                            <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.onChangedQuantityPlus()}>
                                <Text style={styles.buttonQuantity}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
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
        paddingLeft: 10
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

