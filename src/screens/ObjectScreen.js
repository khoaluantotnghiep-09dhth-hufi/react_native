import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import Category from '../components/Category/Category';
import Object from '../components/Object/Object';
import * as actions from "../actions/Object/ObjectActions";

import { connect } from "react-redux";
class ObjectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.props.fetchObject();
    }
    render() {
        let { object } = this.props;
        let data = object.map((item, index) => {
            return item;
        })
        let dat = object.filter((item) => { return item.id != "object-5" })
        const { isLoading } = this.state;
        const { navigation } = this.props;
        return (
            <>
                <Header2 navigation={navigation} />
                <View >
                    <SafeAreaView>
                        <FlatList
                            data={dat}
                            height='50'
                            renderItem={({ item }) => <Object data={item} onPress={() =>
                                navigation.navigate('Danh Mục Theo Đối Tượng', {
                                    objectId: item.id,
                                    objectName: item.name,
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
        backgroundColor: 'white',
        //justifyContent: 'center',
        borderRadius: 15,

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
        object: state.object,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {

        fetchObject: () => {
            return dispatch(actions.fetchObjectRequest())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ObjectScreen);