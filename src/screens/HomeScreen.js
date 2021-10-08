import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List, ScrollView, SafeAreaView, Image } from 'react-native';
import { SearchBar, ButtonGroup, Button, Icon, Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header2 from '../components/Header/Header';
import Products from '../components/Product/Products';
import { SliderBox } from "react-native-image-slider-box";

import * as actions from "../actions/Banner/BannerActions";
import * as actionsProduct from "../actions/Product/ProductActions";
import { connect } from "react-redux";
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedIndex: 2,
            activeIndex: 0,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    componentDidMount() {
        this.props.fetchBanner();
        this.props.fetchProduct();

    }
    updateSearch = (search) => {
        this.setState({ search });
    };
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const { search } = this.state;
        const buttons = ['Nam', 'Nữ', 'Trẻ Em', 'Trẻ Sơ Sinh']
        const { selectedIndex } = this.state;
        const { navigation } = this.props;
        let { banner } = this.props;
        let { product } = this.props;
        let dataBanner = banner.map((item, index) => {
            return item.image;
        })
        let dataProduct = product.map((item, index) => {
            return item;
        })
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Trang Chủ', style: { color: '#fff' } }}
                />
                <Header2 navigation={navigation} />
                <View style={{ backgroundColor: 'white', flexDirection: 'column' }}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        selectedButtonStyle={{
                            backgroundColor: 'black',
                            color: 'black',
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                            // marginBottom: 30,
                        }}
                        containerStyle={{
                            height: 40,
                            color: 'black',
                            fontWeight: "bold",
                            backgroundColor: 'white',
                            borderRadius: 0,
                            borderColor: 'white',
                            elevation: 0,
                            alignItems: 'center',
                        }}
                    />
                </View>
                <ScrollView>
                    <SliderBox
                        images={dataBanner}
                        sliderBoxHeight={500}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                        imageLoadingColor="#2196F3"
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10,
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                    />

                    <FlatList
                        data={dataProduct}
                        numColumns={2}
                        renderItem={({ item }) => <Products dataProduct={item} onPress={() =>
                            navigation.navigate('Chi Tiết Sản Phẩm', {
                                productId: item.id,
                            })} />}
                        keyExtractor={item => `${item.id}`}
                        contentContainerStyle={styles.container}
                    >
                    </FlatList>
                </ScrollView>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
var mapStateToProps = (state) => {
    return {
        banner: state.banner,
        product: state.product,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchBanner: () => {
            return dispatch(actions.fetchBannerRequest());
        },
        fetchProduct: () => {
            return dispatch(actionsProduct.fetchProductRequest());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);