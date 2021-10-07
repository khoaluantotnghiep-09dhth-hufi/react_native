import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import Category from '../components/Category/Category';
import * as actions from "../actions/Category/CategoryActions";
import { connect } from "react-redux";
class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
        console.log(data);
        return (
            <>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Danh Mục Sản Phẩm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Header2 navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Category data={item} />}
                        keyExtractor={item => `${item.id}`}
                        contentContainerStyle={styles.container}
                    >
                    </FlatList>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
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