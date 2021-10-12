import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import * as actions from "../actions/Category/CategoryActions";
import { connect } from "react-redux";
import Cart from '../components/Cart/Cart';
class CartScreen extends React.Component {
    render() {
        let { cart } = this.props;
        console.log(cart);
        return (
            <>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Danh Mục Sản Phẩm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
                {/* <Header2 /> */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={cart}
                        numColumns={2}
                        renderItem={({ item }) => <Cart cart={item}>{item.product.name}</Cart>}
                    />
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
var mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};
// var mapDispatchToProps = (dispatch, props) => {
//     return {

//     };
// };
export default connect(mapStateToProps, null)(CartScreen);