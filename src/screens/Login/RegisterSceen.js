import React, { Component } from "react";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Platform, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import * as actions from "../../actions/Customer/CustomerAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";
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

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onRegisterPress = () => {
    var{
      txtName,
      txtAddress,
      txtPhone,
      txtImage,
      txtPassword,
      txtEmail,
    }= this.state;
    
    var customer = {
      id: uuid.v4("customer-"),
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
        toast.error(<div>Số điện thoại và Email đã tồn tại.<br /> Bạn cần nhập lại thông tin khác!</div>, {autoClose: 2500} , { position: toast.POSITION.UPPER_RIGHT });
        return;
      }
      if (users[i].phone === txtPhone) {
        toast.error(<div>Số điện thoại đã tồn tại.<br /> Bạn cần nhập lại số khác!</div>, {autoClose: 2500} , { position: toast.POSITION.UPPER_RIGHT });
        return;
      }
      if(users[i].email === txtEmail){
        toast.error(<div>Email đã tồn tại.<br /> Bạn cần nhập lại email khác!</div>, {autoClose: 2500} , { position: toast.POSITION.UPPER_RIGHT });
        return;
      }
    }
    if(txtName === "" && txtAddress === "" && txtPhone === "" && txtEmail === "" && txtPassword === ""){
      toast.error(<div>Đăng ký thất bại.<br /> Bạn cần nhập đủ thông tin!</div>, {autoClose: 2500} , { position: toast.POSITION.UPPER_RIGHT });
    }
    else{
      this.props.onAddItemCustomerClient(customer);
      //this.onField();   
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
                  name="txtName"
                  id="txtName"
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
                  name="txtAddress"
                  id="txtAddress"
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
                  name="txtPhone"
                  id="txtPhone"
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
                  name="txtEmail"
                  id="txtEmail"
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
                  name="txtPassword"
                  id="txtPassword"
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
                  onPress={() => this.onRegisterPress()}
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
