import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
import { SearchBar, ButtonGroup, Icon, Header } from 'react-native-elements';
export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2,
            activeIndex: 0,
        }
    }
    _handlePress = () => {
        alert("THêm thành công nè =))")
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const { dataProductInfo } = this.props;
        const buttonsSize = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
        const buttonsColor = ['Đỏ', 'Đen', 'Vàng', 'Hồng', 'Xanh Trời', 'Xanh Lá'];
        const { selectedIndex } = this.state;
        return (
            <>
                <View style={styles.container}>

                    <Image source={{ uri: dataProductInfo.image }} style={styles.productImage}></Image>
                    <Text style={styles.title}>{dataProductInfo.name}</Text>
                    <Text style={styles.price}>Giá: {dataProductInfo.price}</Text>
                    <ButtonGroup
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
                        buttons={buttonsColor}
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
                    <TouchableOpacity style={styles.appButtonContainer} onPress={this._handlePress}>
                        <Text style={styles.appButtonText}>Mua Hàng</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>Mô Tả: {dataProductInfo.description}</Text>



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
        textTransform: "uppercase"
    }
})
