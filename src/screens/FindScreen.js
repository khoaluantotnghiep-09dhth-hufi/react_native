import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import News from '../components/News/News';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as actions from "../actions/News/NewsActions";
import { connect } from "react-redux";


class FindScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data2: []
        }
    }
    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        let { news } = this.props;
        let data = news.map((item, index) => {
            return item;
        })
        const { data2 } = this.state;
        const { navigation } = this.props;
        return (
            <>
                {data && data.length > 0 ?

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

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <SafeAreaView>
                                <FlatList
                                    data={data && data.length > 0 ? data : this.state.data2}
                                    numColumns={2}
                                    renderItem={({ item }) => <News data={item} onPress={() =>
                                        navigation.navigate('Chi Tiết Tin Tức', {
                                            idNews: item.id,
                                        })} />}
                                    keyExtractor={item => `${item.id}`}
                                    contentContainerStyle={styles.container}
                                />
                            </SafeAreaView>
                        </View>
                    </>
                    :
                    <View>
                        <Text>Hệ thống đang lỗi ! Vui lòng thử lại</Text>
                    </View>
                }
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 1,
        width: '100%',
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
        news: state.news,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {

        fetchNews: () => {
            return dispatch(actions.fetchNewsRequest())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);