import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Home from './src/Pages/User/Home';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import SearchPage from './src/Pages/User/SearchPage';
import User from './src/Pages/User/User';
import Review from './src/Pages/User/Review';
import Post from './src/Pages/Admin/Post';
import HomeAdmin from './src/Pages/Admin/HomeAdmin';
import SearchAdmin from './src/Pages/Admin/SearchAdmin';
import Initial from './src/Pages/Initial'
import UserListPage from './src/Pages/Admin/Users';
import ReviewAdmin from './src/Pages/Admin/ReviewAdmin';
import LoginAdm from './src/Pages/Admin/LoginAdm';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial" options={{ headerShown: false }}> 
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginAdmin" component={LoginAdm} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeAdmin" component={HomeAdmin} options={{ headerShown: false }}/> 
        <Stack.Screen name="User" component={User} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SearchAdmin" component={SearchAdmin} options={{ headerShown: false }}/>  
        <Stack.Screen name="Review" component={Review} options={{ headerShown: false }}/> 
        <Stack.Screen name="ReviewAdm" component={ReviewAdmin} options={{ headerShown: false }}/> 
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }}/> 
        <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }}/> 
        <Stack.Screen name="Users" component={UserListPage} options={{ headerShown: false }}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
