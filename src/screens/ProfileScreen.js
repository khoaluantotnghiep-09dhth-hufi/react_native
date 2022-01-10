import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar, ButtonGroup, Header } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileItem = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);

class ProfileScreen extends React.Component {
  isCheckAccount = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return this.props.navigation.navigate('Thông Tin Cá Nhân')
      }
      else {
        return this.props.navigation.navigate('Đăng Nhập')
      }
    } catch (error) {
      console.error();
    }
  }
  show = () => {
    this.isCheckAccount("client").then(console.log);
  }
  render() {
    return (
      <>
        <View style={styles.screenContainer}>
          <StatusBar barStyle="light-content" />
          <View style={styles.bodyContainer}>
            <View style={styles.userContainer}>
              <View style={styles.avatarContainer}>
                <MaterialIcons name="person" size={26} color="#fff" />
              </View>
              <View style={styles.textContainer}>
                <TouchableOpacity onPress={this.show}>
                  <Text style={styles.authText}>Thông Tin Cá Nhân</Text>
                </TouchableOpacity>
              </View>
              {/* {this.show} */}
              <FontAwesome name="angle-right" size={26} color="#1e88e5" />
            </View>
            {/*  */}
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Yêu Thích')}>
              <ProfileItem icon="heart-outline" name="Sản Phẩm Yêu Thích" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Tất Cả Đơn Hàng')}>
              <ProfileItem icon="calendar-multiple-check" name="Tất Cả Đơn Hàng" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Đơn Hàng Đang Đặt')}>
              <ProfileItem icon="calendar-multiple-check" name="Đơn Hàng Đang Đặt" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Đơn Hàng Đang Giao')}>
              <ProfileItem icon="bike-fast" name="Đơn Hàng Đang Giao" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Đơn Hàng Đã Giao')}>
              <ProfileItem icon="check-bold" name="Đơn Hàng Đã Giao" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Yêu Cầu Đổi/Trả')}>
              <ProfileItem icon="phone-return" name="Yêu Cầu Đổi/Trả" />
            </TouchableOpacity>
            {/* <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
            <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" /> */}
            {/*  */}
            <View style={styles.divider} />
            {/* <ProfileItem name="Ưu đãi cho chủ thẻ ngân hàng" />
            <ProfileItem name="Cài đặt" /> */}
            {/*  */}
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Hỗ Trợ')}>
              <ProfileItem icon="headphones" name="Hỗ trợ" />
            </TouchableOpacity>

          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
});

export default ProfileScreen;