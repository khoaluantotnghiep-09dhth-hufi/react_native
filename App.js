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
          name="Trang Ch???"
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
              <CartStack.Screen name="Gi??? H??ng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh To??n"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="????ng Nh???p" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua H??ng Th??nh C??ng"
                component={BuySuccessScreen}
              />

              <ProductByCategoryStack.Screen
                name="S???n Ph???m Theo Danh M???c"
                component={ProductByCategoryScreen}
              />
              <ProductInfoStack.Screen
                name="Chi Ti???t S???n Ph???m"
                component={ProductInfoScreen}
              />
              <RatingStack.Screen
                name="????nh Gi??"
                component={RatingScreen} />
              <SearchStack.Screen
                name="T??m Ki???m"
                component={SearchScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Danh M???c"
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
              <CartStack.Screen name="Gi??? H??ng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh To??n"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="????ng Nh???p" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua H??ng Th??nh C??ng"
                component={BuySuccessScreen}
              />
              <SectorByObjectStack.Screen
                name="Danh M???c Theo ?????i T?????ng"
                component={SectorByObjectScreen}
              />
              <CategoryBySectorStack.Screen
                name="Danh M???c Theo Khu V???c"
                component={CategoryBySectorScreen}
              />
              <ProductByCategoryStack.Screen
                name="S???n Ph???m Theo Danh M???c"
                component={ProductByCategoryScreen}
              // options={{
              //   headerShown: false
              // }}
              />
              <ProductInfoStack.Screen
                name="Chi Ti???t S???n Ph???m"
                component={ProductInfoScreen}
              />

            </ObjectStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Tin T???c"
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
              <NewsDetailStack.Screen name='Chi Ti???t Tin T???c' component={NewsDetailScreen} />
              <CartStack.Screen name="Gi??? H??ng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh To??n"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="????ng Nh???p" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua H??ng Th??nh C??ng"
                component={BuySuccessScreen}
              />
            </FindStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Y??u Th??ch"
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
              <CartStack.Screen name="Gi??? H??ng" component={CartScreen} />
              <CheckOutStack.Screen
                name="Thanh To??n"
                component={CheckOutScreen}
              />
              <LoginStack.Screen name="????ng Nh???p" component={LoginScreen} />
              <BuySuccessStack.Screen
                name="Mua H??ng Th??nh C??ng"
                component={BuySuccessScreen}
              />
            </FavoriteStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="C?? Nh??n"
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
              <BillStack.Screen name="T???t C??? ????n H??ng" component={BillScreen} />
              <WaitBuyStack.Screen name="????n H??ng ??ang ?????t" component={WaitBuyScreen} />
              <BillDeliveringStack.Screen name="????n H??ng ??ang Giao" component={BillDeliveringScreen} />
              <BillDeliveredStack.Screen name="????n H??ng ???? Giao" component={BillDeliveredScreen} />
              <BillExchangeRequestStack.Screen name="Y??u C???u ?????i/Tr???" component={BillExchangeRequestScreen} />
              <LoginStack.Screen name="????ng Nh???p" component={LoginScreen} />
              <RegisterStack.Screen name="????ng K??" component={RegisterScreen} />
              <SupportStack.Screen name="H??? Tr???" component={SupportScreen} />
              <CustomerInfoStack.Screen
                name="Th??ng Tin C?? Nh??n"
                component={CustomerInfoScreen}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
