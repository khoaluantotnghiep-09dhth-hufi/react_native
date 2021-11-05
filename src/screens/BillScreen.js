import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header2 from "../components/Header/Header";
import { SearchBar, ButtonGroup, Header } from "react-native-elements";
import Category from "../components/Category/Category";
import Bill from "../components/Bill/Bill";
import * as actions from "../actions/Bill/BillsActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";
class BillScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: true,
      id: "",
    };
  }

  getDataCustomer = async () => {
    try {
      const asyncUser = await AsyncStorage.getItem("client");
      const data = JSON.parse(asyncUser);
        console.log("Session dang lay getDataCustomer: " + data.id);

      this.setState({
        id: data.id,
      });
    } catch (error) {
      console.error();
    }
  };
  componentDidMount() {
      this.getDataCustomer();
    
    ///Dang fix cứng mã khách hàng để test lấy hóa đơn
    var user = { id: "customer-ku534wq5" };
    console.log("Session dang lay o Component Did Mount: " + this.state.id);
    this.props.fetchBillsCustomer(user.id);
  }
  render() {
    let { bill_ordered } = this.props;

    let data = bill_ordered.map((item, index) => {
      return item;
    });
    const { isLoading } = this.state;
    const { navigation } = this.props;
    return (
      <>
        {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Danh Mục Sản Phẩm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}

        <SafeAreaView style={styles.test}>
          <FlatList
            data={data}
            // numColumns={2}
            renderItem={({ item }) => (
              <Bill
                data={item}
                onPress={() => navigation.navigate("Home", {})}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
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
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 1,
  },
  test: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff4500",
  },
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
