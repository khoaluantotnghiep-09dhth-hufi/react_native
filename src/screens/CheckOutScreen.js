import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import callApi from "./../constants/CallAPI";

import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { io } from "socket.io-client";
import * as actions from "../actions/Bill/BillsActions";
import * as actions_cart from "../actions/Cart/CartActions";

const socket = io("http://10.0.3.2:3008");

class CheckOutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_user: "",
      txtName: "",
      txtAddress: "",
      txtPhone: "",

      txtEmail: "",
    };
    this.getData();
  }

  getData = async () => {
    try {
      const asyncUser = await AsyncStorage.getItem("client");
      const data = JSON.parse(asyncUser);

      this.setState({
        id_user: data.id_user,
        txtName: data.name,
        txtAddress: data.address,
        txtPhone: data.phone,
        txtEmail: data.email,
      });
    } catch (error) {
      console.error();
    }
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  showTotalAmount = (cart) => {
    var total = 0;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].product.percentSale) {
        total += cart[index].product.percentSale * cart[index].quantity;
      } else {
        total += cart[index].product.price * cart[index].quantity;
      }
    }
    return total;
  };
  showTotalProduct = (cart) => {
    var total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].quantity;
    }
    return total;
  };

  onCheckoutBill = (cart, txtName, txtPhone, txtAddress, txtEmail, id_user) => {
    let { navigation } = this.props;

    let dateNow = new Date().toISOString().slice(0, 10);
    var uuid = require("uuid");
    var ID = uuid.v4();
    var ten = "bill-customer-";
    var ten_bill_info = "bill-info-";
    var bill = {
      id: ten + ID,
      order_date: dateNow,
      total: this.showTotalAmount(cart),
      status: 0,
      id_customer: id_user,
      name_customer: txtName,
      address: txtAddress,
      phone: txtPhone,
      email: txtEmail,
      total_quantity: this.showTotalProduct(cart),
    };

    var billInfo = cart.map((item, i) => ({
      id: ten_bill_info + uuid.v4(),
      id_bill: bill.id,
      id_product_info: item.product.id_product_info,
      into_money: item.product.priceSale
        ? item.product.priceSale
        : item.product.price,
      quantity: item.quantity,
    }));

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var billsSocket = {
      id: "message- "+uuid.v4(),
      content: "Có " + "Khách Hàng " + name + " Order Nè",
      time: date + " " + time,
    };

    if (bill && billInfo) {
      //////Test Web Socket
      var name = txtName;
      var quantity = 1;
      var today = new Date();
      //Khách hàng phát tín hiệu khi Order
      socket.emit("customer-order", { name, quantity, today });

      callApi("notifications", "POST", billsSocket);

      this.props.onCreateBill(bill);
      this.props.onCreateBillInfo(billInfo);
      this.props.onResetCart();
      navigation.navigate("Mua Hàng Thành Công");
    }
  };
  render() {
    var { txtName, txtPhone, txtAddress, txtEmail, id_user } = this.state;
    let { cart, navigation } = this.props;
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <View>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: "https://brandslogo.net/wp-content/uploads/2014/10/Uniqlo-logo.png",
                    }}
                  />
                  <Text style={styles.logoText}>Thông Tin Nhận Hàng</Text>
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({ txtName: text })}
                    placeholder="Họ và tên"
                    placeholderColor="#c4c3cb"
                    keyboardType="ascii-capable"
                    maxLength={30}
                    minLength={3}
                    textAlign={"center"}
                    style={styles.loginFormTextInput}
                    onChange={this.onChange}
                    value={txtName}
                  />
                  <Entypo
                    name="user"
                    size={25}
                    color="red"
                    style={styles.iconStyle}
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({ txtAddress: text })}
                    placeholder="Địa chỉ"
                    placeholderColor="#c4c3cb"
                    keyboardType="ascii-capable"
                    maxLength={100}
                    textAlign={"center"}
                    style={styles.loginFormTextInput}
                    onChange={this.onChange}
                    value={txtAddress}
                  />
                  <Entypo
                    name="address"
                    size={25}
                    color="red"
                    style={styles.iconStyle}
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({ txtPhone: text })}
                    placeholder="Số điện thoại"
                    placeholderColor="#c4c3cb"
                    keyboardType="numeric"
                    maxLength={11}
                    minLength={10}
                    textAlign={"center"}
                    style={styles.loginFormTextInput}
                    onChange={this.onChange}
                    value={txtPhone}
                  />
                  <Entypo
                    name="phone"
                    size={25}
                    color="red"
                    style={styles.iconStyle}
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({ txtEmail: text })}
                    placeholder="Email"
                    placeholderColor="#c4c3cb"
                    keyboardType="email-address"
                    textAlign={"center"}
                    style={styles.loginFormTextInput}
                    onChange={this.onChange}
                    value={txtEmail}
                  />
                  <Entypo
                    name="email"
                    size={25}
                    color="red"
                    style={styles.iconStyle}
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({ txtGhiChu: text })}
                    placeholder="Ghi Chú"
                    placeholderColor="#c4c3cb"
                    multiline
                    numberOfLines={4}
                    textAlign={"center"}
                    style={styles.loginFormTextInput}
                    secureTextEntry={true}
                    onChange={this.onChange}
                  />
                  {/* <Entypo name="key" size={25} color="red" style={styles.iconStyle} /> */}
                </View>
                <TouchableOpacity>
                  <View style={styles.footer}>
                    <Button
                      // navigation.navigate("Mua Hàng Thành Công");
                      style={styles.loginButton}
                      onPress={() => {
                        this.onCheckoutBill(
                          cart,
                          txtName,
                          txtPhone,
                          txtAddress,
                          txtEmail,
                          id_user
                        );
                      }}
                      title="Xác Nhận Thanh Toán"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginLeft: 120,
  },
  loginScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    position: "absolute",
    top: 15,
    left: 70,
  },
  logoText: {
    fontSize: 33,
    fontWeight: "800",
    marginBottom: 30,
    marginTop: -20,
    textAlign: "center",
  },
  logoText2: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: -30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 75,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    borderRadius: 25,
    marginLeft: 50,
    marginRight: 15,
    marginBottom: 5,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

  },
  loginButton: {
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginTop: 10,
    width: 300,
    // marginLeft: 50,
    // fontSize: 28,
    color: "red",
    // fontWeight: "bold",
    // textAlign: "center",
    // textTransform: "uppercase",
    // paddingLeft: 9,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent",
  },footer: {
    fontSize: 28,
    backgroundColor: "tomato",
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
var mapDispatchToProps = (dispatch, props) => {
  return {
    onCreateBill: (bills_customer) => {
      dispatch(actions.onAddBillCustomerResquest(bills_customer));
    },
    onCreateBillInfo: (bills_info_customer) => {
      dispatch(actions.onAddBillInfoCustomerResquest(bills_info_customer));
    },
    onResetCart: (product) => {
      dispatch(actions_cart.onRestCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutScreen);
