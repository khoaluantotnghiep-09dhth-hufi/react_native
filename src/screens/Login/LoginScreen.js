import React, { Component } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Image } from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class LoginScreen extends Component {

  render() {
    return (
      <>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ877ZrGb6pm9tr8T_9SmYyDZeQbg7biO--eA&usqp=CAU'}}/>
              <Text style={styles.logoText}>LOGIN</Text>
              <TextInput 
                placeholder="Số điện thoại" 
                placeholderColor="#c4c3cb" 
                style={styles.loginFormTextInput} />
              <TextInput 
                placeholder="Mật khẩu" 
                placeholderColor="#c4c3cb" 
                maxlength={11}
                minlength={10}
                pattern="^[0-9]*$"
                style={styles.loginFormTextInput} 
                secureTextEntry={true} />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Đăng Nhập"
              />
              {/* <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.onFbLoginPress()}
                title="Login with Facebook"
                color="#3897f1"
              /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}
