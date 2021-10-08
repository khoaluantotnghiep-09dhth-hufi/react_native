
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FindScreen from './src/screens/FindScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CartScreen from './src/screens/CartScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import ProductInfoScreen from './src/screens/ProductInfoScreen';
import ProductByCategoryScreen from './src/screens/ProductByCategoryScreen';
import ProductByCategory from './src/components/ProductByCategory/ProductByCategory';
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const FindStack = createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const ProductInfoStack = createNativeStackNavigator();
const ProductByCategoryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trang Chủ"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <HomeStack.Navigator
            >
              <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
              />
              <CartStack.Screen name="Giỏ Hàng" component={CartScreen} />
              <ProductInfoStack.Screen name="Chi Tiết Sản Phẩm" component={ProductInfoScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Danh Mục"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <CategoryStack.Navigator>
              <CategoryStack.Screen name="Category" component={CategoryScreen}
                options={{
                  headerShown: false
                }}
              />
              <ProductByCategoryStack.Screen name="ProductByCategory" component={ProductByCategoryScreen}
              // options={{
              //   headerShown: false
              // }}
              />
            </CategoryStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Tìm Kiếm"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <FindStack.Navigator>
              <FindStack.Screen name="Find" component={FindScreen}
                options={{
                  headerShown: false
                }}
              />
            </FindStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Yêu Thích"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="heart" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <FavoriteStack.Navigator>
              <FavoriteStack.Screen name="Favorite" component={FavoriteScreen}
                options={{
                  headerShown: false
                }}
              />
            </FavoriteStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Cá Nhân"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            ),
          }}
        >
          {() => (
            <ProfileStack.Navigator>
              <ProfileStack.Screen name="Profile" component={ProfileScreen}
                options={{
                  headerShown: false
                }}
              />
              <LoginStack.Screen name="Đăng Nhập" component={LoginScreen}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
