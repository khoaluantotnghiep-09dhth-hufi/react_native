import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import Category from '../components/Category/Category';
import Object from '../components/Object/Object';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import * as actions from "../actions/Object/ObjectActions";

import { connect } from "react-redux";
class ObjectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }
    componentDidMount() {
        this.props.fetchObject();
    }
    render() {
        let { object } = this.props;
        let dat = object.filter((item) => { return item.id != "object-5" })
        const { data } = this.state;
        const { navigation } = this.props;
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
                {dat && dat.length > 0 ?
                    <View style={styles.containerObject}>
                        <SafeAreaView>
                            <FlatList
                                data={dat && dat.length > 0 ? dat : this.state.data}
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
                    :
                    <View>
                        <Text>Hiện chưa có ! Vui lòng thử lại</Text>
                    </View>
                }
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
    },
    containerObject: {

    },
    search: {
        flexDirection: 'row',
        width: '90%',
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