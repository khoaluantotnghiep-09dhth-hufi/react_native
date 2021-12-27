import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, List, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import Products from './../components/Product/Products';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import * as actionsProductFavorite from "./../actions/ProductFavorite/ProductFavoriteActions";
import { connect } from "react-redux";
class FavoriteScreen extends React.Component {


    render() {
        var { productFavorite } = this.props
        const { navigation } = this.props;

        let dataProduct = productFavorite.map((item, index) => {
            return item;
        })
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


                <ScrollView>
                    <SafeAreaView >

                        <FlatList
                            data={dataProduct}
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
    }
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
