import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, List, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import Products from './../components/Product/Products';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import * as actionsProductFavorite from "./../actions/ProductFavorite/ProductFavoriteActions";
import { connect } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class FavoriteScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data2: []
        }
    }

    render() {
        var { productFavorite } = this.props
        const { navigation } = this.props;

        let dataProduct = productFavorite.map((item, index) => {
            return item;
        })
        const { data2 } = this.state;
        return (
            <>
                <View style={{ flexDirection: 'row', height: 70, paddingTop: 9, backgroundColor: 'white', paddingBottom: 9 }}>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Tìm Kiếm')}
                        style={styles.search}
                    >
                        <View style={{ paddingTop: 12, paddingLeft: 15 }}>
                            <FontAwesome name="search" size={34} color="black" />
                        </View>
                        <Text
                            style={{ width: 320, height: 70, paddingLeft: 15, fontSize: 27, color: '#ff4500', paddingTop: 12 }}
                        >
                            Bạn tìm gì hôm nay ?
                        </Text>
                    </TouchableOpacity>
                    <View style={{ paddingTop: 12, justifyContent: 'flex-end' }} >
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Giỏ Hàng')}
                        >
                            <FontAwesome name="shopping-cart" size={34} color="black" />
                        </TouchableOpacity>

                    </View>
                </View>
                {dataProduct && dataProduct.length > 0 ? <>
                    <View style={{ flexDirection: 'row', height: 70, paddingTop: 9, backgroundColor: 'white', paddingBottom: 9 }}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Tìm Kiếm')}
                            style={styles.search}
                        >
                            <View style={{ paddingTop: 12, paddingLeft: 15 }}>
                                <FontAwesome name="search" size={34} color="black" />
                            </View>

                            <Text
                                style={{ width: 320, height: 70, paddingLeft: 15, fontSize: 27, color: '#ff4500', paddingTop: 12 }}
                            >
                                Bạn tìm gì hôm nay ?
                            </Text>
                        </TouchableOpacity>
                        <View style={{ paddingTop: 12, justifyContent: 'flex-end' }} >
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('Giỏ Hàng')}
                            >
                                <FontAwesome name="shopping-cart" size={34} color="black" />
                            </TouchableOpacity>

                        </View>
                    </View>


                    <ScrollView>
                        <SafeAreaView >
                            <FlatList
                                data={dataProduct && dataProduct.length > 0 ? dataProduct : this.state.data2}
                                numColumns={2}
                                renderItem={({ item }) => <Products dataProduct={item} onPress={() =>
                                    navigation.navigate('Chi Tiết Sản Phẩm', {
                                        productId: item.id,
                                    })} navigation={navigation} />}
                                keyExtractor={item => `${item.id}`}
                                contentContainerStyle={styles.container}
                                ListHeaderComponent={() => <Text style={styles.title}>Sản Phẩm</Text>}
                            >
                            </FlatList>
                        </SafeAreaView>
                    </ScrollView>
                </>
                    :
                    <>
                        <View style={{ alignItems: 'center', paddingTop: 200 }}>
                            <Text style={{ width: 320, paddingLeft: 15, fontSize: 27, color: '#ff4500', paddingTop: 12, textAlign: 'center' }}>
                                Bạn chưa thêm sản phẩm nào !
                            </Text>
                            <TouchableOpacity
                                style={styles.ButtonGoHomeContainer}
                                onPress={() => this.props.navigation.navigate('Trang Chủ')}
                            >
                                <FontAwesome name="list" size={26} color="tomato" />
                                <Text style={styles.ButtonGoHome}>Mua Ngay</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },
    title: {
        textTransform: "uppercase",
        marginTop: 16,
        width: 170,
        lineHeight: 23,
        textAlign: 'justify'
    },
    search: {
        flexDirection: 'row',
        width: '90%',
    },
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

        productFavorite: state.productFavorite

    };
};
// var mapDispatchToProps = (dispatch, props) => {
//     return {

//         fetchProductFavorite: () => {
//             return dispatch(actionsProductFavorite.fetchProductFavorite());
//         },
//     };
// };
export default connect(mapStateToProps, null)(FavoriteScreen);
