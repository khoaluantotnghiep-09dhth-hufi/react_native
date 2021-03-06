import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
    FlatList, SafeAreaView, StyleSheet,
    Text, TouchableOpacity, View
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import * as actions from "../actions/Bill/BillsActions";
import Bill from "../components/Bill/Bill";
import callApi from "../constants/CallAPI";
class BillExchangeRequestScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            id: "",
            data: []
        };
    }

    async componentDidMount() {
        const asyncUser = await AsyncStorage.getItem("client");
        var user = JSON.parse(asyncUser)
        await callApi('bills-wait', "post", user).then((response) => {
            if (response.status === 200) {
                this.setState({
                    data: response.data
                })
            }
            else {
                this.setState({
                    data: []
                })
            }
        });
    }
    render() {
        const { data } = this.state;
        let dataFetch = data
            .filter((bill) => bill.status === 5 || bill.status === 6)
            .map((item, index) => {
                return item;
            });

        const { navigation } = this.props;
        return (
            <>
                {dataFetch && dataFetch.length > 0 ? <SafeAreaView style={styles.test}>
                    <FlatList
                        data={dataFetch}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <Bill
                                data={item}
                                onPress={() =>
                                    navigation.navigate('Chi Tiết Sản Phẩm', {
                                        productId: item.id,
                                    })} navigation={navigation}
                            />
                        )}
                        keyExtractor={(item) => `${item.id}`}
                        contentContainerStyle={styles.container}
                    />
                </SafeAreaView>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ width: 320, paddingLeft: 15, fontSize: 27, color: '#ff4500', paddingTop: 12, textAlign: 'center' }}>
                            Bạn chưa có yêu cầu đổi trả nào !
                        </Text>
                        <TouchableOpacity
                            style={styles.ButtonGoHomeContainer}
                            onPress={() => this.props.navigation.navigate('Trang Chủ')}
                        >
                            <FontAwesome name="list" size={26} color="tomato" />
                            <Text style={styles.ButtonGoHome}>Mua Ngay</Text>
                        </TouchableOpacity>
                    </View>
                }

            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 1,
    },
    test: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title: {
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ff4500",
    },
    ButtonGoCheckOut: {
        backgroundColor: "red",
        color: "white",
        height: 40,
        paddingBottom: 40,
    },
    ButtonGoHomeContainer: {
        flexDirection: "row",
        backgroundColor: "#00ff7f",
        borderRadius: 25,
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    ButtonGoHome: {
        fontSize: 28,
        color: "tomato",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        paddingLeft: 9,
    },
    ButtonPay: {
        fontSize: 28,
        color: "tomato",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        paddingLeft: 9,

    },
});
var mapStateToProps = (state) => {
    return {
        waitBuy: state.waitBuy,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchBillsCustomer: (id_customer) => {
            dispatch(actions.fetchBillsWaitCustomerResquest(id_customer));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillExchangeRequestScreen);
