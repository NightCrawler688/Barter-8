import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Setting from '../screens/Setting';
import { AppTabNavigator } from './AppNavigator'
import CustomSideBarMenu  from './customSideBarMenu';
import MyDonations from '../screens/MyDonation'
import Notification from '../screens/Notification';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    MyDonations:{
      screen: MyDonations
    },
    Notification:{
      screen:Notification
    },
    
Settings:{
    screen : Setting
    }
    
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })