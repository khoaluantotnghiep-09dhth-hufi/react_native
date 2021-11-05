import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header2 from "../components/Header/Header";
import { SearchBar, ButtonGroup, Header } from "react-native-elements";
import * as actions from "../actions/Category/CategoryActions";
import { connect } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Cart from "../components/Cart/Cart";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartScreen extends React.Component {
  render() {
    const asyncUser = AsyncStorage.getItem("client");
    console.log("Tai Khoan: " + Object.entries(asyncUser));
    let { cart, navigation } = this.props;
    if (cart && cart.length === 0)
      return (
        <View style={styles.containerCartNull}>
          <Text style={styles.CartNull}>
            Chưa có sản phẩm nào trong giỏ hàng !
          </Text>
          <TouchableOpacity
            style={styles.ButtonGoHomeContainer}
            onPress={() => navigation.navigate("Danh Mục")}
          >
            <FontAwesome name="list" size={26} color="tomato" />
            <Text style={styles.ButtonGoHome}>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
      );
    else {
      return (
        <>
          {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Danh Mục Sản Phẩm', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
          {/* <Header2 /> */}
          <View style={styles.container}>
            <FlatList
              data={cart}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item, index }) => <Cart cart={item} key={index} />}
            />
            <TouchableOpacity
              style={styles.ButtonGoCheckOut}
              onPress={() => this.functionCombined()}
            >
            
              <Text style={styles.ButtonGoHome}>Thanh Toán</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  }
  functionOne() {
    // do something
  }

  functionTwo() {
    // do something
  }

  async functionCombined() {
    const asyncUser = await AsyncStorage.getItem("client");
    const data = JSON.parse(asyncUser);
    if (asyncUser === null) {
      navigation.navigate("Đăng Nhập");
    } else {
      navigation.navigate("Thanh Toán");
    }

    // this.functionOne();
    // this.functionTwo();
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  containerCartNull: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 10,
    width: 400,
    height: 500,
  },
  CartNull: {
    fontSize: 28,
    color: "#ff4500",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 50,
  },
  ButtonGoCheckOut: {
    backgroundColor: "red",
    flex: 1,
    color: "white",
    height: 50,
  },
  ButtonGoHomeContainer: {
    flexDirection: "row",
    backgroundColor: "#00ff7f",
    borderRadius: 25,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonGoHome: {
    fontSize: 28,
    color: "tomato",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    paddingLeft: 9,
  },
});
var mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
// var mapDispatchToProps = (dispatch, props) => {
//     return {

//     };
// };
export default connect(mapStateToProps, null)(CartScreen);
