import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList,Image } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import NewsDetail from '../components/NewsDetail/NewsDetail';
import * as actions from "../actions/News/NewsActions";
import { connect } from "react-redux";


class FindScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
   
    render() {
        let { news,route } = this.props;
        const { idNews } = route.params;
        let data = news.find(item => item.id === idNews );
        const { isLoading } = this.state;
        const { navigation } = this.props;
        return (
            <>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                         <NewsDetail data={data}  />
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

export default connect(mapStateToProps, null)(FindScreen);