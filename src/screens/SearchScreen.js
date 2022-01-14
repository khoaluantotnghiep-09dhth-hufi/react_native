import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from "react-redux";
import * as actionsProduct from "../actions/Category/CategoryActions";
import Category from '../components/Category/CategorySearch';
class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
            data: [],
            filteredData: []
        };
    }
    componentDidMount() {
        this.props.fetchProductSearch();
    }
    onSearch = (e, id) => {
        let coppyState = { ...this.state };
        coppyState[id] = e.target.value;
        this.setState({
            ...coppyState
        }, () => {
            (this.state);
        })
    }
    _handlePress(event) {
        let txtSearch = this.state.txtSearch;
    }
    btnSearch = () => {
        let { txtSearch } = this.state;
        (txtSearch);
        this.props.fetchProductSearch(txtSearch);
    }
    search = (txtSearch) => {
        this.setState({ txtSearch: txtSearch });
        let { category, navigation } = this.props;
        let dataP = category.map((item, index) => {
            return item;
        })
        this.setState({ data: dataP });
        let filteredData = this.state.data.filter(function (item) {
            return item.name.includes(txtSearch);
        });
        this.setState({ filteredData: filteredData });
    };
    render() {
        let { data } = this.state;
        let { category, navigation } = this.props;
        data = category.map((item, index) => {
            return item;
        })
        return (
            <>
                <View>
                    <SearchBar
                        round={true}
                        lightTheme={true}
                        placeholder="Nhập để tìm..."
                        autoCapitalize='none'
                        autoCorrect={true}
                        onChangeText={this.search}
                        value={this.state.txtSearch}
                    />
                    <SafeAreaView>
                        <ScrollView horizontal={true}>
                            <FlatList
                                data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data}
                                renderItem={({ item }) => <Category data={item} onPress={() =>
                                    navigation.navigate('Sản Phẩm Theo Danh Mục', {
                                        categoryId: item.id,
                                        categoryName: item.name,
                                    })} />}
                                keyExtractor={item => `${item.id}`}
                                contentContainerStyle={styles.container2}
                            />
                        </ScrollView>
                    </SafeAreaView>

                </View>
            </>
        )



    }
}
const styles = StyleSheet.create({
    container2: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: '6%',
        paddingLeft: 5,
    },
    titleSearch: {
        width: '65%',
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonSearch1: {
        flexDirection: 'row',
        width: '35%',
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
    },
    buttonSearch2: {
        paddingLeft: 7,
        width: '100%',
        paddingTop: 7,
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },
});
var mapStateToProps = (state) => {
    return {
        category: state.category,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductSearch: () => {
            return dispatch(actionsProduct.fetchCategoryRequest());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
