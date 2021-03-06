import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"


import {AntDesign,MaterialIcons} from "@expo/vector-icons";

import ResellerHomeScreen from '../screens/resellersScreens/resellerHomeScreen';
import MarketerHomeScreen from '../screens/marketersScreens/marketerHomeScreen';


import LoginScreen from '../screens/authentification/login';
import SignupScreen from '../screens/authentification/signup';
import MarketerProfile from '../screens/marketersScreens/marketerProfile';
import MarketerParameters from '../screens/marketersScreens/marketerParameters';
import MyResellers from '../screens/marketersScreens/myResellers';
import AddReseller from '../screens/marketersScreens/addReseller';
import ResellerBmsStore from '../screens/productsScreens/resellerBmsStore';
import AllProductsScreen from '../screens/productsScreens/allProductsScreen';
import PlacesListScreen from '../screens/resellersScreens/PlacesListScreen';
import PlaceDetailScreen from '../screens/resellersScreens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/resellersScreens/NewPlaceScreen';
import MapScreen from '../screens/resellersScreens/MapScreen';
import ResellerProfile from '../screens/resellersScreens/resellerProfile';

import NewReseller from '../screens/resellersScreens/newReseller';
import ManageProduct from '../screens/productsScreens/manageProduct';

const marketerHomeElements = {
    Accueil : {
            screen : MarketerHomeScreen ,
            navigationOptions : {
              tabBarLabel : "Accueil" ,
              tabBarColor : "#fff",
              tabBarIcon : ({tintColor}) => {
                return( <AntDesign name="home"  
                size = {22} color ={tintColor}/>);
                  },  
          },
         
  
            
    } ,

    Profile : {
      screen : MarketerProfile ,
      navigationOptions : {
        tabBarLabel : "Profile" ,
        tabBarColor : "#fff",
        tabBarIcon : ({tintColor}) => {
          return( <MaterialIcons name="person-outline"  
          size = {22} color ={tintColor}/>);
            },  
    },
   

      
} ,

MyResellers : {
  screen : MyResellers ,
  navigationOptions : {
    tabBarLabel : "Mes Revenderus" ,
    tabBarColor : "#fff",
    tabBarIcon : ({tintColor}) => {
      return( <AntDesign name="home"  
      size = {22} color ={tintColor}/>);
        },  
},


}

  };

  
  //Home page with Bottom Navigation Tab

const marketerHomeTabs = createMaterialBottomTabNavigator(marketerHomeElements, 
      
    {
      navigationOptions : {
        title :"",
        headerBackTitle : " " ,
        headerTintColor: Platform.OS === "android"? '#007184' : "rgba(53, 53, 53,1)" ,
        headerStyle:{
          backgroundColor: "transparent",
      },
      headerTransparent: true
      } ,
    activeColor: '#007184',
    inactiveColor : "#9d9da1",
    shifting : false ,
    labeled  : true,
    barStyle : {
        borderTopWidth : 0.5 ,
     backgroundColor : '#fff'
    
    },
    
    
    
    } ) ;


//Main Stack Navigator
const BmsNavigation = createStackNavigator({
    
    MarketerHome : marketerHomeTabs ,
    ResellerHomeScreen ,
    ResellerBmsStore  ,
    AllProductsScreen ,
    ManageProduct,
    MarketerParameters : MarketerParameters,
    NewReseller: NewReseller,
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
    ResellerProfile:ResellerProfile
 },
 );

 
 const MainNavigation = createSwitchNavigator({
  Main: LoginScreen,
  Signup:SignupScreen,
     navigation : BmsNavigation ,
        
 })
 

export default createAppContainer(MainNavigation);
