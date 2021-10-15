import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";

class CustomerInfoScreen extends Component{
  onLogout = () =>{
    AsyncStorage.clear();
    //AsyncStorage.clear("client");
    this.props.navigation.navigate('Đăng Nhập');
  }
    render(){
      return(
        <View>
          <Button
            onPress={this.onLogout}
            title="Đăng xuất"
          />
        </View>
      );
  }
}
export default CustomerInfoScreen;