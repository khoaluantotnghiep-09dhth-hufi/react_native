import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2,
            activeIndex: 0,
            setIsVisible: false,
            quantity: 1,
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
    onChanged = () => {

    }
    render() {
        const { dataProductInfo } = this.props;
        const { selectedIndex, quantity } = this.state;
        const buttonsSize = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
        const buttonsColor = ['Đỏ', 'Đen', 'Vàng', 'Hồng', 'Xanh Trời', 'Xanh Lá'];
        return (
            <>
                <View style={styles.container}>
                    <Image source={{ uri: dataProductInfo.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProductInfo.name}</Text>
                    <Text style={styles.price}>Giá: {dataProductInfo.price}</Text>
                    {/* <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttonsSize}
                        selectedButtonStyle={{
                            backgroundColor: 'black',
                            color: 'black',
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                        }}
                        containerStyle={{
                            height: 40,
                            color: 'black',
                            fontWeight: "bold",
                            backgroundColor: 'white',
                            borderRadius: 0,
                            borderColor: 'white',
                            elevation: 0,
                            alignItems: 'center',
                        }}
                    />
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={dataColor}
                        selectedButtonStyle={{
                            backgroundColor: 'black',
                            color: 'black',
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                        }}
                        containerStyle={{
                            height: 40,
                            color: 'black',
                            fontWeight: "bold",
                            backgroundColor: 'white',
                            borderRadius: 0,
                            borderColor: 'white',
                            elevation: 0,
                            alignItems: 'center',
                        }}
                    /> */}
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.RBSheet.open()}>
                        <Text style={styles.appButtonText}>Mua Ngay</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>Mô Tả: {dataProductInfo.description}</Text>


                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={260}
                        openDuration={250}
                        customStyles={{
                            container: {
                                // justifyContent: "center",
                                // alignItems: "center"
                                borderRadius: 30 / 2
                            }
                        }}
                    >
                        <Text style={styles.textSizeColor}>Kích Cỡ</Text>
                        {/*  */}
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttonsSize}
                            selectedButtonStyle={{
                                backgroundColor: 'tomato',
                                color: 'black',
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                borderRadius: 100 / 2
                            }}
                            containerStyle={{
                                height: 40,
                                color: 'black',
                                fontWeight: "bold",
                                backgroundColor: 'white',
                                borderRadius: 0,
                                borderColor: 'white',
                                elevation: 0,
                                alignItems: 'center',
                            }}
                        />
                        <Text style={styles.textSizeColor}>Màu</Text>
                        {/*  */}
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttonsColor}
                            selectedButtonStyle={{
                                backgroundColor: 'tomato',
                                color: 'black',
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                borderRadius: 100 / 2
                            }}
                            containerStyle={{
                                height: 40,
                                color: 'black',
                                fontWeight: "bold",
                                backgroundColor: 'white',
                                borderRadius: 0,
                                borderColor: 'white',
                                elevation: 0,
                                alignItems: 'center',
                            }}
                        />
                        <View style={styles.containerQuantity}>
                            <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.RBSheet.open()}>
                                <Text style={styles.buttonQuantity}>-</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.quantity}
                                keyboardType='number-pad'
                                // onChangeText={(text) => this.onChanged(text)}
                                maxLength={10}
                                placeholder="Số Lượng"
                            />
                            <TouchableOpacity style={styles.buttonContainerQuantity} onPress={() => this.RBSheet.open()}>
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
        textAlign: 'left',
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
        fontSize: 18,
        paddingLeft: 10
    },
    quantity: {
        alignSelf: "center",
        width: 20,
    },
    containerQuantity: {
        flexDirection: 'row', backgroundColor: 'white',
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

