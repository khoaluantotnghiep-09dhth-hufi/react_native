import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Button } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actions from "./../actions/Customer/CustomerAction";
import { connect } from "react-redux";


class CustomerInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.isCheckAccount();
    this.state = {
      name: "",
      address: "",
      phone: "",
      image: "",
      email: "",
      gender: "",
      password: "",
      score: "",
      ImgPrivew: "",

    };
  }
  isCheckAccount = async () => {
    try {
      const asyncUser = await AsyncStorage.getItem("client");
      const data = JSON.parse(asyncUser);
      this.setState({
        name: data.name,
        address: data.address,
        phone: data.phone,
        image: data.image,
        email: data.email,
        gender: data.gender,
        password: data.password,
        score: data.score,
      })
    } catch (error) {
      console.error();
    }
  }
  onLogout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Đăng Nhập');
  }
  render() {
    var { name, address, phone, image, email, gender, score, ImgPrivew } = this.state;
    return (
      <>
        <ScrollView ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
          <ImageBackground style={styles.header} source={{ uri: 'http://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' }}>
            <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{ uri: image && image !== '' ? image : 'http://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' }} />
              <Text style={styles.name}></Text>
              <Text style={styles.userInfo}>{name} </Text>
              <Text style={styles.address}><Entypo name="address" size={25} color="red" style={styles.iconStyle} /> {address}</Text>
              <Text style={styles.address}><Entypo name="phone" size={25} color="red" style={styles.iconStyle} /> {phone}</Text>
              <Text style={styles.address}><Entypo name="email" size={25} color="red" style={styles.iconStyle} /> {email}</Text>
            </View>
          </ImageBackground>
          <TouchableOpacity style={styles.footer}>
            <Button
              style={styles.footer2}
              onPress={this.onLogout}
              title="Đăng xuất"
            />
          </TouchableOpacity>
        </ScrollView>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 64,
    color: "tomato",
    fontWeight: "bold",
    textAlign: "center",
  },
  ButtonLogout: {
    paddingTop: 15
  },
  iconStyle: {
    position: "absolute",
    top: 30,
    left: 35,
  },
  address: {
    height: 55,
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#0033CC",
    backgroundColor: "#F8F8FF",
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    paddingTop: 15,
    paddingLeft: 20,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: 'transparent',
    height: 600
  },
  body2: {
    backgroundColor: 'transparent',
    marginTop: 5
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    marginTop: 20,
    width: 180,
    height: 180,
    borderRadius: 73,
    borderWidth: 4,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  userInfo: {
    fontWeight: '600',
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  body: {
    height: 400,
    borderRadius: 25,
    alignItems: 'center',
  },
  footer: {
    fontSize: 28,
    backgroundColor: "tomato",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    paddingLeft: 9,
  },
  footer2: {
    fontSize: 28,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    paddingLeft: 9,
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  }
});

var mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateItemCustomer: (customer) => {
      return dispatch(actions.onUpdateCustomersClientResquest(customer));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfoScreen);
