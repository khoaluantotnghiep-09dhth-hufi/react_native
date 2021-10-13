import React, { Component } from "react";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Image, TouchableOpacity, Platform, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Entypo } from '@expo/vector-icons';
import * as actions from "../../actions/Customer/CustomerAction";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage";
class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtPhone: "",
      txtPassword: "",
      isCheckLogin: false,
    }
  }
  
  componentDidMount() {
    this.props.onFetchUsers();
  }

  componentWillUnmount() {
    
  }

  onLoginPress = (users) => (event) => {
    event.preventDefault();
    var { txtPhone, txtPassword } = this.state;
    console.log("data user",users)
    // var result = null;
    // result = users.find((users) => users.id);
    //for (let i = 0; i < users.find((users) => users.id); i++) 
    for (let i = 0; i < users.length(); i++){
      if (users[i].phone !== txtPhone){
        toast.error(<div>Đăng nhập thất bại.<br />Tài khoản không tồn tại!</div>, {autoClose: 2500} , { position: toast.POSITION.UPPER_RIGHT });
        return;
      }
      if (users[i].phone === txtPhone && users[i].password !== txtPassword){
        toast.error(<div>Đăng nhập thất bại.<br />Mật khẩu không chính xác!</div>, {autoClose: 2500} , { position: toast.POSITION.UPPER_RIGHT });
        return;
      }  
      if (users[i].phone === txtPhone && users[i].password === txtPassword) {
        var user = {
          id_user: users[i].id,
          name: users[i].name,
          address: users[i].address,
          phone: users[i].phone,
          image: users[i].image,
          email: users[i].email,
          gender: users[i].gender,
          cmnn_cccc: users[i].cmnn_cccc,
          score: users[i].score,
          password: users[i].password,
        };
        this.setState({
          isCheckLogin: true,
        });
        AsyncStorage.setItem("client", JSON.stringify(user));
      } else {       
        this.setState({
          isCheckLogin: false,
        });       
      }
    }
  }

  onRegisterPress(){
    
  }

  render() {
    var { users } = this.props;
    var { isCheckLogin } = this.state;
    console.log(isCheckLogin);
    return (
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
                  name="txtPhone"
                  id="txtPhone"
                  placeholder="Số điện thoại"
                  placeholderColor="#c4c3cb"
                  keyboardType="numeric"
                  maxLength={11}
                  minLength={10}
                  textAlign={'center'}
                  style={styles.loginFormTextInput} />
                <Entypo name="phone" size={25} color="red" style={styles.iconStyle} />
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
                  secureTextEntry={true} />
                <Entypo name="key" size={25} color="red" style={styles.iconStyle} />
              </View>
              <View>
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={this.onLoginPress(users)}
                  title="Đăng Nhập"
                />
              </View>
              <View>
              <Button
                  buttonStyle={styles.loginButton}
                  onPress={() => this.onRegisterPress()}
                  title="Đăng Ký"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    users: state.users,
    cart: state.cart,
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchUsers: () => {
      return dispatch(actions.fetchUserRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
