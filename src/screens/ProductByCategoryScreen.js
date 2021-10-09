import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import ProductByCategory from '../components/ProductByCategory/ProductByCategory';
import * as actionsProductByCategory from "../actions/ProductByCategory/ProductByCategoryActions";
import { connect } from "react-redux";
class ProductByCategoryScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        const { navigation, route } = this.props;
        const { categoryId } = route.params;
        this.props.fetchProductByCategory(categoryId);
    }
    render() {
        let { productByCategory } = this.props;
        let dataProductByCategory = productByCategory.map((item, index) => {
            return item;
        })
        const { navigation } = this.props;
        const { isLoading } = this.state;
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Danh Mục Sản Phẩm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                {/* <Header2 navigation={this.props.navigation} /> */}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <FlatList
                            numColumns={2}
                            data={dataProductByCategory}
                            renderItem={({ item }) => <ProductByCategory dataProductByCategory={item}
                                onPress={() =>
                                    navigation.navigate('Chi Tiết Sản Phẩm', {
                                        productId: item.id,
                                    })}
                            />}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={styles.container}
                        />
                    </SafeAreaView>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: 'white',
        borderRadius: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
var mapStateToProps = (state) => {
    return {
        productByCategory: state.productByCategory,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductByCategory: (id) => {
            return dispatch(actionsProductByCategory.fetchProductByCategoryRequest(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductByCategoryScreen);