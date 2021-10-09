import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import Category from '../components/Category/Category';
import * as actions from "../actions/Category/CategoryActions";

import { connect } from "react-redux";
class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.props.fetchCategories();
    }
    render() {
        let { category } = this.props;
        let data = category.map((item, index) => {
            return item;
        })
        const { isLoading } = this.state;
        const { navigation } = this.props;
        return (
            <>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Danh Mục Sản Phẩm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
                <Header2 navigation={navigation} />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <FlatList
                            ListHeaderComponent={() => <Text style={styles.title}>Danh Mục</Text>}
                            data={data}
                            numColumns={2}
                            renderItem={({ item }) => <Category data={item} onPress={() =>
                                navigation.navigate('Sản Phẩm Theo Danh Mục', {
                                    categoryId: item.id,
                                    categoryName: item.name,
                                })} />}
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
        justifyContent: 'center',
        borderRadius: 1
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
    }
});
var mapStateToProps = (state) => {
    return {
        category: state.category,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCategories: () => {
            return dispatch(actions.fetchCategoryRequest());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);