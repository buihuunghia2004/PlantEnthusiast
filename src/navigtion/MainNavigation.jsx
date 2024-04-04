import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Home from '../screens/nav/Home';
import Search from '../screens/nav/Search';
import Profile from '../screens/nav/Profile';
import Notification from '../screens/nav/Notification';

import Cart from '../screens/tabs/Cart';
import EditProfile from '../screens/tabs/EditProfile';
import ProductCategory from '../screens/tabs/ProductCategory';  
import ProductDetails from '../screens/tabs/ProductDetails';
import Payment from '../screens/tabs/Payment';


const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />

      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="ProductCategory" component={ProductCategory} />
    </Stack.Navigator>
  )
}

export default MainNavigation