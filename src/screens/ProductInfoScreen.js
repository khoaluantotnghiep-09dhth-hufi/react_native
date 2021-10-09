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
        this.props.fetchProductInfo(productId);
    }

    render() {
        let { productInfo } = this.props;
        let dataProductInfo = productInfo.map((item, index) => {
            return item;
        })
        return (
            <>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <FlatList
                            data={dataProductInfo}
                            renderItem={({ item }) => <ProductInfo dataProductInfo={item}
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
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductInfo: (id) => {
            return dispatch(actionsProductInfo.fetchProductInfoRequest(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoScreen);