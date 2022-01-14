import React, { Component } from "react";
import { Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-elements';

class BuySuccessScreen extends Component {

  constructor(props) {
    super(props);

  }



  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };


  render() {
    let { cart, navigation } = this.props;

    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <View style={styles.loginFormView1}>
                  <Image
                    style={styles.tinyLogo}
                    source={{ uri: 'https://brandslogo.net/wp-content/uploads/2014/10/Uniqlo-logo.png' }} />
                  <Text style={styles.logoText}>Cảm Ơn Quý Khách Đã Mua Sản Phẩm</Text>
                </View>
                <TouchableOpacity >
                  <View style={styles.footer}>
                    <Button
                      style={styles.loginButton}
                      onPress={() => navigation.navigate("Home")}
                      title="Quay Về Màn Hình Chính"
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
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  containerView: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginLeft: 150,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  loginScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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
    width: 300,
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
    marginLeft: 50,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },footer: {
    fontSize: 28,
    backgroundColor: "tomato",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    paddingLeft: 9,
  },
});



export default (BuySuccessScreen);
