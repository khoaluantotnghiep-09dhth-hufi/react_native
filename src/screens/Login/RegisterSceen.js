import React, { Component } from "react";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Alert, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import * as actions from "../../actions/Customer/CustomerAction";
import { connect } from "react-redux";
import {toast} from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        idItem: "",
        txtName:"",
        txtAddress:"",
        txtPhone:"",
        txtImage:"",
        txtPassword: "",
        txtEmail: "",
    }
  }

  // validateEmail = (email) => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  //   };

  // onSubmit = () => {
  //   if (this.state.txtPassword.trim().length < 8) {
  //       Alert.alert('Alert', 'Password must be minimum 8 characters');
  //       return;
  //   }
  //   //Do your stuff if condition meet.
  // }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onRegisterPress = (event) => {
    event.preventDefault();
    var{
      txtName,
      txtAddress,
      txtPhone,
      txtImage,
      txtPassword,
      txtEmail,
    }= this.state;
    var uuid = require("uuid");
    var ID = uuid.v4();
    var ten = "customer-";
    var customer = {
      id: ten + ID,
      name: txtName,
      address: txtAddress,
      phone: txtPhone,
      image: txtImage,
      password: txtPassword,
      email: txtEmail,
    };
    var { users } = this.props;
    for (let i = 0; i < users.length; i++) {
      if (users[i].phone === txtPhone && users[i].email === txtEmail) {
        // toast.error({
        //   type: 'error',
        //   text1: 'Số điện thoại và Email đã tồn tại.',
        //   text2: 'Bạn cần nhập lại thông tin khác!',
        // });
        Alert.alert("Đăng ký thất bại.");
        return;
      }
      if (users[i].phone === txtPhone) {
        // toast.error({
        //   type: 'error',
        //   text1: 'Số điện thoại đã tồn tại.',
        //   text2: 'Bạn cần nhập lại số khác!',
        // });
        Alert.alert("Đăng ký thất bại.");
        return;
      }
      if(users[i].email === txtEmail){
        // toast.error({
        //   type: 'error',
        //   text1: 'Email đã tồn tại.',
        //   text2: 'Bạn cần nhập lại email khác!',
        // });
        Alert.alert("Đăng ký thất bại.");
        return;
      }
      console.log("data user",users)
    }
    if(txtName === "" && txtAddress === "" && txtPhone === "" && txtEmail === "" && txtPassword === ""){
      // toast.error({
      //   type: 'error',
      //   text1: 'Đăng ký thất bại.',
      //   text2: 'Bạn cần nhập đủ thông tin!',
      // });
      Alert.alert("Đăng ký thất bại.");
    }
    else{
      this.props.onAddItemCustomerClient(customer);
      // toast.success({
      //   type: 'success',
      //   text1: 'Đăng ký thành công.',
      // });
      //this.onField();   
      Alert.alert("Đăng ký thành công");
      console.log(customer);
    }
  };

  render() {     
    var { isCheckLogin } = this.state;
    console.log(isCheckLogin);
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss }>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <View>
                  <Image  
                    style={styles.tinyLogo}
                    source={{uri: 'https://brandslogo.net/wp-content/uploads/2014/10/Uniqlo-logo.png'}} />
                  <Text style={styles.logoText}>UNIQLO</Text>
                  <Text style={styles.logoText2}>This is <Text style={{color:"red"}}>LifeWear</Text></Text>
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({txtName:text})}
                    placeholder="Họ và tên"
                    placeholderColor="#c4c3cb"
                    keyboardType="ascii-capable"
                    maxLength={30}
                    minLength={3}
                    textAlign={'center'}
                    style={styles.loginFormTextInput} 
                    onChange={this.onChange}
                    />
                  <Entypo name="user" size={25} color="red" style={styles.iconStyle} />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({txtAddress:text})}
                    placeholder="Địa chỉ"
                    placeholderColor="#c4c3cb"
                    keyboardType="ascii-capable"
                    maxLength={100}
                    textAlign={'center'}
                    style={styles.loginFormTextInput} 
                    onChange={this.onChange}
                    />
                  <Entypo name="address" size={25} color="red" style={styles.iconStyle} />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({txtPhone:text})}
                    placeholder="Số điện thoại"
                    placeholderColor="#c4c3cb"
                    keyboardType="numeric"
                    maxLength={11}
                    minLength={10}
                    textAlign={'center'}
                    style={styles.loginFormTextInput} 
                    onChange={this.onChange}
                    />
                  <Entypo name="phone" size={25} color="red" style={styles.iconStyle} />
                </View>
                <View>
                  <TextInput                   
                    onChangeText={(text) => this.setState({txtEmail:text})}
                    placeholder="Email"
                    placeholderColor="#c4c3cb"
                    keyboardType="email-address"
                    textAlign={'center'}
                    style={styles.loginFormTextInput} 
                    onChange={this.onChange}
                    
                    />
                  <Entypo name="email" size={25} color="red" style={styles.iconStyle} />
                </View>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({txtPassword:text})}
                    placeholder="Mật khẩu"
                    placeholderColor="#c4c3cb"
                    pattern="^[0-9]*$"
                    password={true} 
                    textAlign={'center'}
                    style={styles.loginFormTextInput}
                    secureTextEntry={true} 
                    onChange={this.onChange}
                    />
                  <Entypo name="key" size={25} color="red" style={styles.iconStyle} />
                </View>
                <TouchableOpacity >
                <View>            
                <Button
                    buttonStyle={styles.loginButton}
                    onPress={this.onRegisterPress}
                    //onPress={() => this.props.navigation.navigate('Đăng Ký')}
                    title="Đăng Ký"
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
  },
  iconStyle:{
    position:"absolute",
    top: 15,
    left: 70,
  },
  logoText: {
      fontSize: 33,
      fontWeight: "800",
      marginBottom: 30,
      marginTop: -20,      
      textAlign: 'center',
  },
  logoText2: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: -30,      
    textAlign: 'center',
},
  loginFormView: {
      flex: 1
  },
  loginFormTextInput: {
      height: 55,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#eaeaea',
      backgroundColor: '#fafafa',
      borderRadius: 25,
      marginLeft: 50,
      marginRight: 15,
      marginBottom: 5,
      width:300,
      alignItems: 'center',
      justifyContent: 'center',
  },
  loginButton: {
      backgroundColor: 'red',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      marginTop: 10,
      width: 300,
      marginLeft:50,
  },
  fbLoginButton: {
      height: 45,
      marginTop: 10,
      backgroundColor: 'transparent',
  },
});

var mapStateToProps = (state) => {
    return {
      customer: state.customer,
      users: state.users,
    };
  };
  var mapDispatchToProps = (dispatch, props) => {
    return {
      onAddItemCustomerClient: (customer) => {
        dispatch(actions.onAddCustomerClientResquest(customer));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
