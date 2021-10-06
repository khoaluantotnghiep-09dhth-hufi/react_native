// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/HomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import FindScreen from './src/screens/FindScreen';
// import CategoryScreen from './src/screens/CategoryScreen';
// import FavoriteScreen from './src/screens/FavoriteScreen';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { createStackNavigator } from '@react-navigation/stack';
// import CartScreen from './src/screens/CartScreen';
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <>
//       <NavigationContainer style={{ backgroundColor: 'white' }}>
//         <Tab.Navigator>
//           <Tab.Screen name="Trang Chủ" component={HomeScreen} options={{
//             headerShown: false,
//             tabBarLabel: 'Trang Chủ',
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="home" size={26} color={color} />
//             ),
//           }} />
//           <Tab.Screen name="Danh Mục" component={CategoryScreen} options={{
//             headerShown: false,
//             tabBarLabel: 'Danh Mục',
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="list" size={26} color={color} />
//             ),
//           }} />
//           <Tab.Screen name="Yêu Thích" component={FavoriteScreen} options={{
//             headerShown: false,
//             tabBarLabel: 'Yêu Thích',
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="heart" size={26} color={color} />
//             ),
//           }} />
//           <Tab.Screen name="Tìm Kiếm" component={FindScreen} options={{
//             headerShown: false,
//             tabBarLabel: 'Tìm Kiếm',
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="search" size={26} color={color} />
//             ),
//           }} />
//           <Tab.Screen name="Thông Tin" component={ProfileScreen} options={{
//             headerShown: false,
//             tabBarLabel: 'Thông Tin',
//             tabBarIcon: ({ color }) => (
//               <FontAwesome name="user" size={26} color={color} />
//             ),
//           }} />

//         </Tab.Navigator>
//         {/* <Stack.Navigator>
//           <Stack.Screen name="Cart" component={CartScreen} />
//           <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//         </Stack.Navigator> */}
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

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
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const FindStack = createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
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
              <CartStack.Screen name="Cart" component={CartScreen}
              // options={{
              //   headerShown: false
              // }}
              />
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
              <LoginStack.Screen name="Login" component={LoginScreen}
                options={{
                  headerShown: false
                }}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
