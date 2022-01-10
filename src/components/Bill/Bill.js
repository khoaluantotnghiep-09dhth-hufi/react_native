import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground, Swiper } from 'react-native';
import ImageSP from '../../assets/sp.jpg';
import callApi from "../../constants/CallAPI";
export default class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    loadData = (data) => {
        console.log(JSON.stringify(data.id));
        callApi('bills-exchange-update', "put", data).then((response) => {
            if (response.status === 200) {
                toast.show('Yêu cầu đổi thành công, Vui lòng chờ nhân viên xác nhận !');
            }
            else {
                toast.show('Yêu cầu đổi thất bại. Vui lòng thử lại !');
            }
        });
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
                    <View style={styles.styleBot2}>
                        <TouchableOpacity onPress={() => this.loadData(data)}>
                            <Text>
                                {data.status === 4 ? 'Yêu Cầu' : ''}
                            </Text>
                        </TouchableOpacity>
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
    styleBot2: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        flexDirection: 'column',
        alignItems: 'stretch',
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
