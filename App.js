import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import NotificationScreen from './src/screen/NotificationScreen';
import FindScreen from './src/screen/FindScreen';
import CategoryScreen from './src/screen/CategoryScreen';
// import LoginScreen from './src/screen/Login/Login';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <LoginScreen />
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#8b0000',
          inactiveTintColor: '#000000',
        }}>
        <Tab.Screen
          name="Trang Chủ"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Danh Mục"
          component={CategoryScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Danh Mục',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="list" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tìm Kiếm"
          component={FindScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Tìm Kiếm',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Thông Báo"
          component={NotificationScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="notifications" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cá Nhân"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
