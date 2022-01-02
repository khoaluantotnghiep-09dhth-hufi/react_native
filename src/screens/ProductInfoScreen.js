import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Header2 from '../components/Header/Header';
import * as actionsProductInfo from "../actions/ProductInfo/ProductInfoActions";
import { connect } from "react-redux";
import ProductInfo from '../components/ProductInfo/ProductInfo';
class ProductInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        const { navigation, route } = this.props;
        const { productId } = route.params;
        console.log("ProductID: " + productId);
        this.props.fetchProductInfo(productId);
        this.props.fetchProductInfoColorSize(productId);

    }

    render() {
        let { productInfo, productInfoSizeColor, route } = this.props;
        const { productId } = route.params;
        const { navigation } = this.props;
        let dataProductInfo = productInfo.map((item, index) => {
            return item;
        })
        let dataproductInfoSizeColor = productInfoSizeColor.map((item, index) => {
            return item;
        })
        return (
            <>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView>
                        <SafeAreaView>
                            <FlatList
                                data={dataProductInfo}
                                renderItem={({ item }) => <ProductInfo dataProductInfo={item} dataproductInfoSizeColor={dataproductInfoSizeColor} productId={productId} key={item.id}
                                    navigation={navigation} />}
                                keyExtractor={item => `${item.id}`}
                                contentContainerStyle={styles.container}
                            >

                            </FlatList>

                        </SafeAreaView>
                        {/* <TouchableOpacity
                            style={styles.ButtonGoCheckOut}
                            onPress={() =>
                                navigation.navigate('Đánh Giá')} navigation={navigation}
                        >
                            <Text style={styles.ButtonGoHome}>Đánh Giá</Text>
                        </TouchableOpacity> */}
                    </ScrollView>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        width: '100%'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    ButtonGoHome: {
        fontSize: 28,
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        paddingLeft: 9,
    },
    ButtonGoCheckOut: {
        backgroundColor: "tomato",
        color: "white",
        height: 40,
        paddingBottom: 40,
    },
});
var mapStateToProps = (state) => {
    return {
        productInfo: state.productInfo,
        productInfoSizeColor: state.productInfoSizeColor,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductInfo: (id) => {
            return dispatch(actionsProductInfo.fetchProductInfoRequest(id));
        },
        fetchProductInfoColorSize: (id) => {
            return dispatch(actionsProductInfo.fetchProductInfoSizeColorRequest(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoScreen);