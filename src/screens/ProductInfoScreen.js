import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, Button } from 'react-native';
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
        console.log("ProductID: "+productId);
        this.props.fetchProductInfo(productId);
        this.props.fetchProductInfoColorSize(productId);

    }
    render() {
        let { productInfo, productInfoSizeColor, route } = this.props;
        const { productId } = route.params;
        let dataProductInfo = productInfo.map((item, index) => {
            return item;
        })
        console.log("Chi Tiet SP: " + productInfo);
        let dataproductInfoSizeColor = productInfoSizeColor.map((item, index) => {
            return item;
        })
        return (
            <>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <FlatList
                            data={dataProductInfo}
                            renderItem={({ item }) => <ProductInfo dataProductInfo={item} dataproductInfoSizeColor={dataproductInfoSizeColor} productId={productId} key={item.id}
                            />}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={styles.container}
                        >
                        </FlatList>
                    </SafeAreaView>
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