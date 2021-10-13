import React, { Component } from "react";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Image, TouchableOpacity, Platform, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Entypo } from '@expo/vector-icons';

export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  onPress={() => this.onLoginPress()}
                  title="Đăng Nhập"
                />
              </View>
              <View>
              <Button
                  buttonStyle={styles.loginButton}
                  onPress={() => this.onLoginPress()}
                  title="Đăng Ký"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

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
