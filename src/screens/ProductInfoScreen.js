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
            data: []
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
        const { data } = this.state;
        return (

            <>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView>
                        <SafeAreaView>
                            <FlatList
                                data={dataProductInfo && dataProductInfo.length > 0 ? dataProductInfo : this.state.data}
                                renderItem={({ item }) => <ProductInfo dataProductInfo={item} dataproductInfoSizeColor={dataproductInfoSizeColor && dataproductInfoSizeColor.length > 0 ? dataproductInfoSizeColor : this.state.data} productId={productId} key={item.id}
                                    navigation={navigation} />}
                                keyExtractor={item => `${item.id}`}
                                contentContainerStyle={styles.container}
                            >

                            </FlatList>

                        </SafeAreaView>
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