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
       if (value !== null){
        return this.props.navigation.navigate('Thông Tin Cá Nhân')
       }
       else {
        return this.props.navigation.navigate('Đăng Nhập')
      }
    } catch (error) {
      console.error();
    }
  }
  show = () =>{
    this.isCheckAccount("client").then(console.log);
  }
  render() {
    

    // var isCheckAccount =
    //   AsyncStorage.getItem("client").then(console.log) !== null ? (
    //     <View style={styles.textContainer}>
    //       <TouchableOpacity onPress={() => this.props.navigation.navigate('Thông Tin Cá Nhân')}>
    //         <Text style={styles.authText}>UNIQLO Kính Chào</Text>
    //       </TouchableOpacity>
    //     </View>       
    //   ) : (
    //     <View style={styles.textContainer}>
    //       <Text style={styles.welcomeText}>Chào mừng bạn đến với Uniqlo</Text>
    //       <TouchableOpacity onPress={() => this.props.navigation.navigate('Đăng Nhập')}>
    //         <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );
      
    return (
      <>
        {/* <Header
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: 'Thông Tin Cá Nhân', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        /> */}
        <View style={styles.screenContainer}>
          <StatusBar barStyle="light-content" />
          <View style={styles.bodyContainer}>
            <View style={styles.userContainer}>
              <View style={styles.avatarContainer}>
                <MaterialIcons name="person" size={26} color="#fff" />
              </View>

              {/* <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Chào mừng bạn đến với Uniqlo</Text>
                <TouchableOpacity onPress={this.show}>
                  <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
                </TouchableOpacity>
              </View> */}

              <View style={styles.textContainer}>
                <TouchableOpacity onPress={this.show}>
                  <Text style={styles.authText}>Thông Tin Cá Nhân</Text>
                </TouchableOpacity>
              </View>

              {/* {this.isCheckAccount()} */}
              <FontAwesome name="angle-right" size={26} color="#1e88e5" />
            </View>
            {/*  */}
            <View style={styles.divider} />
            <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Giỏ Hàng')}>
              <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
            </TouchableOpacity>
            <ProfileItem icon="eye-outline" name="Sản phẩm đã xem" />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorite')}>
              <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
            </TouchableOpacity>
            <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
            <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" />
            {/*  */}
            <View style={styles.divider} />
            <ProfileItem name="Ưu đãi cho chủ thẻ ngân hàng" />
            <ProfileItem name="Cài đặt" />
            {/*  */}
            <View style={styles.divider} />
            <ProfileItem icon="headphones" name="Hỗ trợ" />
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