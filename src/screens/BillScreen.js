import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Header2 from '../components/Header/Header';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import Category from '../components/Category/Category';
import Bill from '../components/Bill/Bill';
import * as actions from "../actions/Bill/BillsActions";


import { connect } from "react-redux";
class BillScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        var user={id:'customer-ku52xlt7'};
        console.log(user.id);
        this.props.fetchBillsCustomer(user.id);
    }
    render() {
        let { bill_ordered } = this.props;
        console.log("Bill_order dang nam: " + bill_ordered)
        let data = bill_ordered.map((item, index) => {
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

              
                    <SafeAreaView style={styles.test}>
                        <FlatList
                            ListHeaderComponent={() => <Text style={styles.title}>Quan Ly Don Hang</Text>}
                            data={data}
                            // numColumns={2}
                            renderItem={({ item }) => <Bill data={item} onPress={() =>
                                navigation.navigate('Home', {
                                 
                                })} />}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={styles.container}
                        />
                    </SafeAreaView>
           

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
    test:{
        flex: 1,
        marginTop: 10
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
        bill_ordered: state.bill_ordered,
    };
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        
        
        fetchBillsCustomer: (id_customer) => {
          dispatch(actions.fetchBillsCustomerResquest(id_customer));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillScreen);