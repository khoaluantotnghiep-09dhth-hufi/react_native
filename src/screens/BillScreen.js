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
import callApi from "../constants/CallAPI";
import { connect } from "react-redux";
class BillScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      id: "",
      data: []
    };
  }

  async componentDidMount() {
    const asyncUser = await AsyncStorage.getItem("client");
    var user = JSON.parse(asyncUser)
    await callApi('bills-wait', "post", user).then((response) => {
      if (response.status === 200) {
        this.setState({
          data: response.data
        })
      }
      else {
        this.setState({
          data: []
        })
      }
    });
  }
  render() {
    const { data } = this.state;
    let dataFetch = data
      .map((item, index) => {
        return item;
      });
    const { navigation } = this.props;
    return (
      <>
        {dataFetch && dataFetch.length > 0 ?
          <SafeAreaView style={styles.test}>
            <FlatList
              data={dataFetch}
              numColumns={2}
              renderItem={({ item }) => (
                <Bill
                  data={item}
                  onPress={() =>
                    navigation.navigate('Chi Tiết Sản Phẩm', {
                      productId: item.id,
                    })} navigation={navigation}
                />
              )}
              keyExtractor={(item) => `${item.id}`}
              contentContainerStyle={styles.container}
            />
          </SafeAreaView>
          :
          <View style={{ alignItems: 'center' }}>
            <Text style={{ width: 320, paddingLeft: 15, fontSize: 27, color: '#ff4500', paddingTop: 12, textAlign: 'center' }}>
              Bạn chưa mua đơn hàng nào !
            </Text>
            <TouchableOpacity
              style={styles.ButtonGoHomeContainer}
              onPress={() => this.props.navigation.navigate('Trang Chủ')}
            >
              <FontAwesome name="list" size={26} color="tomato" />
              <Text style={styles.ButtonGoHome}>Mua Ngay</Text>
            </TouchableOpacity>
          </View>
        }

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
