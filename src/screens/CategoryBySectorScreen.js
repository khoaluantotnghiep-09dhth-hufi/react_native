import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions/Category/CategoryActions";
import Category from '../components/Category/Category';


class CategoryBySectorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.props.fetchCategory();
    }
    render() {
        const { route, category } = this.props;
        const { sectorId } = route.params;
        let data = category.filter(item => item.id_sectors === sectorId);
        const { isLoading } = this.state;
        const { navigation } = this.props;
        if (data && data.length > 0) {
            return (
                <>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <SafeAreaView>
                            <FlatList
                                data={data}
                                numColumns={2}
                                renderItem={({ item }) => <Category data={item} onPress={() =>
                                    navigation.navigate('Sản Phẩm Theo Danh Mục', {
                                        categoryId: item.id,
                                        categoryrName: item.name,
                                    })} />}
                                keyExtractor={item => `${item.id}`}
                                contentContainerStyle={styles.container}
                            />
                        </SafeAreaView>
                    </View>

                </>
            );
        }
        else {
            return (
                <>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Hệ Thống Gặp Lỗi ! Vui Lòng Thử Lại</Text>
                    </View>
                </>
            );
        }
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

        fetchCategory: () => {
            return dispatch(actions.fetchCategoryRequest())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryBySectorScreen);