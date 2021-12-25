import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List, ScrollView, SafeAreaView } from 'react-native';
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

                <Header2 navigation={this.props.navigation} />


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
