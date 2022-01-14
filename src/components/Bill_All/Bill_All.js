import React, { Component } from "react";

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { io } from "socket.io-client";
import callApi from "../../constants/CallAPI";
const socket = io("http://10.0.3.2:3008");

export default class Bill_All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
    };
    this.getData();
  }
  getData = async () => {
    try {
      const asyncUser = await AsyncStorage.getItem("client");
      const data = JSON.parse(asyncUser);

      this.setState({
        txtName: data.name,
      });
    } catch (error) {
      console.error();
    }
  };

  onHandleCancelBill = (data, txtName) => {
    console.log(txtName);

    //Tạo Object BillReturn để Lưu Xuống DB Notificastion
    var uuid = require("uuid");
    var ID = uuid.v4();
    var reasons = "Không Muốn Mua Nữa";
    var name = txtName;

    var id_bill = data.id;
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var billReturn = {
      id: "message- " + ID,
      content:
        "Có " +
        "Khách Hàng " +
        name +
        " Hủy Đơn " +
        id_bill +
        " Nè",
      time: date + " " + time,
    };
    //Lưu Thông Báo Xuống DB Lát lên WEb ADMIN lấy lại
    callApi("notifications", "POST", billReturn);
    // Phát Event Lên Socket Server
    socket.emit("customer-request-cancel-bill", {
      name,
      id_bill,
      today,
      reasons,
    });
    JSON.stringify(data.id);
    callApi("bills-exchange-update", "put", data).then((response) => {
      if (response.status === 200) {
        Alert.alert("Thông báo", "Yêu cầu thành công !", [{ text: "OK" }]);
      } else {
        Alert.alert("Thông báo", "Yêu cầu đổi thất bại. Vui lòng thử lại !", [
          { text: "OK" },
        ]);
      }
    });
  };

  render() {
    const { data, onPress } = this.props;
    var { txtName } = this.state;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPress}
          style={styles.container3}
        >
          <View style={styles.container}>
            <Image
              source={{ uri: data.image }}
              style={styles.productImage}
            ></Image>
            <Text style={styles.title}>{data.name}</Text>
          </View>
          <View style={styles.styleBot}>
            <Text style={styles.price}>Số lượng: {data.quantity}</Text>
            <Text style={styles.price}>Size: {data.nameSize}</Text>
            <Text style={styles.price}>Màu: {data.nameColor}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.onHandleCancelBill(data, txtName)}
            >
              <Text style={styles.styleBot2}>Huỷ Đơn</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  styleBot: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
  },
  styleBot2: {
    fontSize: 20,
    textAlign: "center",
    color: "tomato",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "gray",
    width: "20%",
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  container3: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    width: "100%",
  },
  container2: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    textAlign: "right",
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#ff4500",
    paddingLeft: 10,
    paddingTop: 0,
    width: 300,
  },
  price: {
    marginBottom: 8,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
    paddingTop: 0,
    paddingLeft: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 30 / 2,
  },
  wrapper: {
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: "#ff4500",
  },
});
