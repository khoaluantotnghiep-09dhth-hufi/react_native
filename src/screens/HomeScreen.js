import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List, ScrollView, SafeAreaView, TouchableOpacity, LogBox, TextInput } from 'react-native';
import { SearchBar, ButtonGroup, Button, Icon, Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header2 from '../components/Header/Header';
import Products from '../components/Product/Products';
import { SliderBox } from "react-native-image-slider-box";
import * as actions from "../actions/Banner/BannerActions";
import * as actionsProduct from "../actions/Product/ProductActions";
import { connect } from "react-redux";
import Category from '../components/Category/Category';
import * as actionsCategory from "../actions/Category/CategoryActions";
LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
])
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
        this.props.fetchCategory();
    }

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
        let { category } = this.props;

        let dataBanner = banner.map((item, index) => {
            return item.image;
        })
        let dataProduct = product.map((item, index) => {
            return item;
        })
        let data = category.map((item, index) => {
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
                {/* <Header2 navigation={navigation} /> */}
                <ScrollView>
                    <SliderBox
                        images={dataBanner}
                        sliderBoxHeight={200}
                        sliderBoxWidth={500}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        ImageComponentStyle={{ borderRadius: 15, width: '100%', marginTop: 5 }}
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
                    <Text style={styles.title}>Danh Mục</Text>
                    <SafeAreaView>
                        <ScrollView horizontal={true}>
                            <FlatList
                                data={data}
                                //style={styles.flatList}
                                horizontal={true}
                                renderItem={({ item }) => <Category data={item} onPress={() =>
                                    navigation.navigate('Sản Phẩm Theo Danh Mục', {
                                        categoryId: item.id,
                                        categoryName: item.name,
                                    })} />}
                                keyExtractor={item => `${item.id}`}
                                contentContainerStyle={styles.container}
                            />
                        </ScrollView>
                        <FlatList
                            data={dataProduct}
                            numColumns={2}
                            renderItem={({ item }) => <Products dataProduct={item} onPress={() =>
                                navigation.navigate('Chi Tiết Sản Phẩm', {
                                    productId: item.id,
                                })} navigation={navigation} />}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={styles.container}
                            ListHeaderComponent={() => <Text style={styles.title}>Sản Phẩm Mới</Text>}
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
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,
        alignItems: 'center',
        width: '100%'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ff4500',
    },
    search: {
        flexDirection: 'row',
        width: '90%',
    }
});
var mapStateToProps = (state) => {
    return {
        banner: state.banner,
        product: state.product,
        category: state.category,
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
        fetchCategory: () => {
            return dispatch(actionsCategory.fetchCategoryRequest());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);