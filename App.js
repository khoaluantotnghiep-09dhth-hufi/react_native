import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Toast from 'react-native-toast-message';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BillDeliveredScreen from "./src/screens/BillDeliveredScreen";
import BillDeliveringScreen from "./src/screens/BillDeliveringScreen";
import BillExchangeRequestScreen from "./src/screens/BillExchangeRequestScreen";
import BillScreen from "./src/screens/BillScreen";
import BuySuccessScreen from "./src/screens/BuySuccessScreen";
import CartScreen from "./src/screens/CartScreen";
import CategoryBySectorScreen from "./src/screens/CategoryBySectorScreen";
import CheckOutScreen from "./src/screens/CheckOutScreen";
import CustomerInfoScreen from "./src/screens/CustomerInfoScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import FindScreen from "./src/screens/FindScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/Login/LoginScreen";
import RegisterScreen from "./src/screens/Login/RegisterSceen";
import NewsDetailScreen from "./src/screens/NewsDetailScreen";
import ObjectScreen from "./src/screens/ObjectScreen";
import ProductByCategoryScreen from "./src/screens/ProductByCategoryScreen";
import ProductInfoScreen from "./src/screens/ProductInfoScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RatingScreen from "./src/screens/RatingScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SectorByObjectScreen from "./src/screens/SectorByObjectScreen";
import SupportScreen from "./src/screens/SupportScreen";
import WaitBuyScreen from "./src/screens/WaitBuyScreen";

const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const ObjectStack = createNativeStackNavigator();
const FindStack = createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const CustomerInfoStack = createBottomTabNavigator();
const ProductInfoStack = createNativeStackNavigator();
const ProductByCategoryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const CheckOutStack = createNativeStackNavigator();
const BuySuccessStack = createNativeStackNavigator();
const SectorByObjectStack = createNativeStackNavigator();
const CategoryBySectorStack = createNativeStackNavigator();
const BillStack = createNativeStackNavigator();
const NewsDetailStack = createNativeStackNavigator();
const RatingStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const WaitBuyStack = createNativeStackNavigator();
const BillDeliveredStack = createNativeStackNavigator();
const BillDeliveringStack = createNativeStackNavigator();
const BillExchangeRequestStack = createNativeStackNavigator();
const SupportStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Tab.Navigator
        screenOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Trang Chủ"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <CartStack.Screen name="Giỏ Hàng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh Toán"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="Đăng Nhập" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua Hàng Thành Công"
                component={BuySuccessScreen}
              />

              <ProductByCategoryStack.Screen
                name="Sản Phẩm Theo Danh Mục"
                component={ProductByCategoryScreen}
              />
              <ProductInfoStack.Screen
                name="Chi Tiết Sản Phẩm"
                component={ProductInfoScreen}
              />
              <RatingStack.Screen
                name="Đánh Giá"
                component={RatingScreen} />
              <SearchStack.Screen
                name="Tìm Kiếm"
                component={SearchScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Danh Mục"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <ObjectStack.Navigator>
              <ObjectStack.Screen
                name="Category"
                component={ObjectScreen}
                options={{
                  headerShown: false,
                }}
              />
              <CartStack.Screen name="Giỏ Hàng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh Toán"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="Đăng Nhập" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua Hàng Thành Công"
                component={BuySuccessScreen}
              />
              <SectorByObjectStack.Screen
                name="Danh Mục Theo Đối Tượng"
                component={SectorByObjectScreen}
              />
              <CategoryBySectorStack.Screen
                name="Danh Mục Theo Khu Vực"
                component={CategoryBySectorScreen}
              />
              <ProductByCategoryStack.Screen
                name="Sản Phẩm Theo Danh Mục"
                component={ProductByCategoryScreen}
              // options={{
              //   headerShown: false
              // }}
              />
              <ProductInfoStack.Screen
                name="Chi Tiết Sản Phẩm"
                component={ProductInfoScreen}
              />

            </ObjectStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Tin Tức"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="newspaper-o" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <FindStack.Navigator>
              <FindStack.Screen
                name="Find"
                component={FindScreen}
                options={{
                  headerShown: false,
                }}
              />
              <NewsDetailStack.Screen name='Chi Tiết Tin Tức' component={NewsDetailScreen} />
              <CartStack.Screen name="Giỏ Hàng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh Toán"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="Đăng Nhập" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua Hàng Thành Công"
                component={BuySuccessScreen}
              />
            </FindStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Yêu Thích"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="heart" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <FavoriteStack.Navigator>
              <FavoriteStack.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                  headerShown: false,
                }}
              />
              <CartStack.Screen name="Giỏ Hàng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh Toán"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="Đăng Nhập" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua Hàng Thành Công"
                component={BuySuccessScreen}
              />
            </FavoriteStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Cá Nhân"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <ProfileStack.Navigator>
              <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerShown: false,
                }}
              />
              <BillStack.Screen name="Tất Cả Đơn Hàng" component={BillScreen} />
              <WaitBuyStack.Screen name="Đơn Hàng Đang Đặt" component={WaitBuyScreen} />
              <BillDeliveringStack.Screen name="Đơn Hàng Đang Giao" component={BillDeliveringScreen} />
              <BillDeliveredStack.Screen name="Đơn Hàng Đã Giao" component={BillDeliveredScreen} />
              <BillExchangeRequestStack.Screen name="Yêu Cầu Đổi/Trả" component={BillExchangeRequestScreen} />
              <LoginStack.Screen name="Đăng Nhập" component={LoginScreen} />
              <RegisterStack.Screen name="Đăng Ký" component={RegisterScreen} />
              <SupportStack.Screen name="Hỗ Trợ" component={SupportScreen} />
              <CustomerInfoStack.Screen
                name="Thông Tin Cá Nhân"
                component={CustomerInfoScreen}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
