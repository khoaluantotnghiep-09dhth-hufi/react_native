import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList,Image } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import News from '../components/News/News';
import * as actions from "../actions/News/NewsActions";
import { connect } from "react-redux";


class FindScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
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
        const { isLoading } = this.state;
        const { navigation } = this.props;
        return (
            <>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Tìm Kiếm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
                <Header2 navigation={this.props.navigation} />
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Các gợi ý tìm kiếm!</Text>
                </View> */}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <FlatList
                           
                            data={data}
                            numColumns={2}
                            renderItem={({ item }) => <News data={item} onPress={() =>
                                navigation.navigate('Home', {
                                    
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
       news: state.news,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        
        fetchNews:() => {
            return dispatch(actions.fetchNewsRequest())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindScreen);