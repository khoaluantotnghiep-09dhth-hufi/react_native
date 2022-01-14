import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  FlatList, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actionsCart from "../actions/Cart/CartActions";
import Cart from "../components/Cart/Cart";

class CartScreen extends React.Component {
  render() {
    const asyncUser = AsyncStorage.getItem("client");
    ("Tai Khoan: " + Object.entries(asyncUser));
    let { cart, navigation, onDeleteInCart } = this.props;
    let arrQuantity = cart.map((item, index) => {
      return item.quantity;
    })
    if (cart && cart.length === 0)
      return (
        <View style={styles.containerCartNull}>
          <Text style={styles.CartNull}>
            Chưa có sản phẩm nào trong giỏ hàng !
          </Text>
          <TouchableOpacity
            style={styles.ButtonGoHomeContainer}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome name="list" size={26} color="tomato" />
            <Text style={styles.ButtonGoHome}>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
      );
    else {
      return (
        <>
          <View style={styles.container}>
            <FlatList
              data={cart}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item, index }) => <Cart cart={item} key={index} onDeleteInCart={onDeleteInCart} />}
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
  functionTwo() {
    // do something
  }

  async functionCombined() {
    let { navigation } = this.props;
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
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 30 / 2
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
    width: '100%',
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
    color: "white",
    height: 40,
    paddingBottom: 40,
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
  ButtonPay: {
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteInCart: (product) => {
      dispatch(actionsCart.removeToCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
