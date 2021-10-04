import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FindScreen from './src/screens/FindScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: 'white' }}>
      <Tab.Navigator>
        <Tab.Screen name="Trang Chủ" component={HomeScreen} options={{
          headerShown: false,
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ light }) => (
            <FontAwesome name="home" size={26} color={light} />
          ),
        }} />
        <Tab.Screen name="Danh Mục" component={CategoryScreen} options={{
          headerShown: false,
          tabBarLabel: 'Danh Mục',
          tabBarIcon: ({ light }) => (
            <FontAwesome name="list" size={26} color={light} />
          ),
        }} />
        <Tab.Screen name="Yêu Thích" component={FavoriteScreen} options={{
          headerShown: false,
          tabBarLabel: 'Yêu Thích',
          tabBarIcon: ({ light }) => (
            <FontAwesome name="heart" size={26} color={light} />
          ),
        }} />
        <Tab.Screen name="Tìm Kiếm" component={FindScreen} options={{
          headerShown: false,
          tabBarLabel: 'Tìm Kiếm',
          tabBarIcon: ({ light }) => (
            <FontAwesome name="search" size={26} color={light} />
          ),
        }} />
        <Tab.Screen name="Thông Tin" component={ProfileScreen} options={{
          headerShown: false,
          tabBarLabel: 'Thông Tin',
          tabBarIcon: ({ light }) => (
            <FontAwesome name="user" size={26} color={light} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
