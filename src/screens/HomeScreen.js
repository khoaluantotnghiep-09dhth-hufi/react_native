import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, List, ScrollView, SafeAreaView, Image } from 'react-native';
import { SearchBar, ButtonGroup, Button, Icon, Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header2 from '../components/Header/Header';
import Products from '../components/Product/Products';
import { SliderBox } from "react-native-image-slider-box";
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedIndex: 2,
            activeIndex: 0,
            images: [
                require('../assets/sp.jpg'),
                require('../assets/sp1.jpg'),
                require('../assets/sp2.jpg'),
                require('../assets/sp3.jpg'),
                require('../assets/sp4.jpg'),
                require('../assets/sp5.jpg'),
            ],
            product: [
                { id: 1, name: 'Sản phẩm 1', price: "140000" },
                { id: 2, name: 'Sản phẩm 2', price: "140000" },
                { id: 3, name: 'Sản phẩm 3', price: "140000" },
                { id: 4, name: 'Sản phẩm 4', price: "140000" },
                { id: 5, name: 'Sản phẩm 5', price: "140000" },
                { id: 6, name: 'Sản phẩm 6', price: "140000" }
            ]
        }
        this.updateIndex = this.updateIndex.bind(this)
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
        const { selectedIndex, product } = this.state
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Trang Chủ', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Header2 />
                <ScrollView>
                    <SliderBox

                        images={this.state.images}
                        sliderBoxHeight={500}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
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
                    {/* <View style={{ backgroundColor: 'white', flexDirection: 'column' }}>
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

                </View> */}
                    <FlatList
                        data={product}
                        renderItem={({ item }) => <Products product={item} />}
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
        display: 'flex',
        paddingTop: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderRadius: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
export default HomeScreen;