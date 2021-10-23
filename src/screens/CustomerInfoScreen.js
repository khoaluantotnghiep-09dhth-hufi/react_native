import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actions from "./../actions/Customer/CustomerAction";
import { connect } from "react-redux";


class CustomerInfoScreen extends Component { 
  constructor(props) {
    super(props);
    this.isCheckAccount();
    this.state = {
      name:"",
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
  // componentDidMount() {
  //   this.isCheckAccount();
  // }
  isCheckAccount = async () => {
    try {
       const asyncUser = await AsyncStorage.getItem("client");
       const data = JSON.parse(asyncUser);
       console.log("Session dang lay: "+data.name);
       //Lấy được data set vào State
      this.setState({
        name: data.name,
        address: data.address,
        phone: data.phone,
        image: data.image,
        email: data.email,
        gender: data.gender,
        //cmnn_cccc: data.cmnn_cccc,
        password: data.password,
        score: data.score,
        ImgPrivew: data.image,
      })
    } catch (error) {
      console.error();
    }
  }
//   constructor(props) {
//     super(props);
//     this.state = {
//         name: sessionUser.name,
//         address: sessionUser.address,
//         phone: sessionUser.phone,
//         image: sessionUser.image,
//         email: sessionUser.email,
//         gender: sessionUser.gender,
//         //cmnn_cccc: sessionUser.cmnn_cccc,
//         password: sessionUser.password,
//         score: sessionUser.score,
//         ImgPrivew: sessionUser.image,
//         isOpen: false,
//     }
// }

// onHandleSubmitLogin = (e) => {
//   e.preventDefault();
//   var { history } = this.props;
//   var { name, address, phone, image, email, gender, cmnn_cccc, score, password, ImgPrivew } = this.state;
//   var profile = {
//       id: sessionUser.id_user,
//       name: name,
//       address: address,
//       phone: phone,
//       image: image,
//       email: email,
//       gender: gender,
//       password: password,
//       //cmnn_cccc: cmnn_cccc,
//       //score: score,            
//   }
//   this.props.onUpdateItemCustomer(profile);
//   //history.goBack();
// }
  onLogout = () =>{
    AsyncStorage.clear();
    //AsyncStorage.clear("client");
    this.props.navigation.navigate('Đăng Nhập');
  }
  render() {
    //var {isCheckAccount} = this.props;
    var { name, address, phone, image, email, gender, cmnn_cccc, score, ImgPrivew } = this.state;
    console.log("Session Sau khi Lay: "+name);
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
        <ImageBackground style={styles.header} source={{uri: 'http://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'}}>
          <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

              <Text style={styles.name}></Text>
              <Text style={styles.userInfo}>{name} </Text>
          </View>
        </ImageBackground>
        <View style={styles.body}>
          
        </View>
        <View style={styles.footer}>
          <Button
            onPress={this.onLogout}
            title="Đăng xuất"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#f5f5f5',
    borderRadius:64,
   },
  header:{
    backgroundColor: 'transparent',
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:24,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  userInfo:{
    fontWeight:'600',
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  body:{
    height:400,
    borderRadius:25,
    alignItems:'center',
  },
  footer:{
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
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
