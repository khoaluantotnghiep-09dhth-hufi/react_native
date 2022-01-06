import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import Header2 from "../components/Header/Header";
import { SearchBar, ButtonGroup, Header } from "react-native-elements";
import Category from "../components/Category/Category";
import Bill from "../components/Bill/Bill";
import * as actions from "../actions/Bill/BillsActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { connect } from "react-redux";
class DeliveringScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            id: "",
        };
    }

    async componentDidMount() {
        const asyncUser = await AsyncStorage.getItem("client");
        var user = JSON.parse(asyncUser);

        console.log("Session dang lay o Component Did Mount: " + user.id_user);
        this.props.fetchBillsCustomer(user.id_user);
    }
    render() {
        let { waitBuy } = this.props;

        let data = waitBuy
            .filter((bill) => bill.status === 3)
            .map((item, index) => {
                return item;
            });
        console.log(data)
        const { isLoading } = this.state;
        const { navigation } = this.props;
        return (
            <>
                {data && data.length > 0 ? <SafeAreaView style={styles.test}>
                    <FlatList
                        data={data && data > 0}
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
                            Bạn chưa mua đơn hàng nào !
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
export default connect(mapStateToProps, mapDispatchToProps)(DeliveringScreen);
