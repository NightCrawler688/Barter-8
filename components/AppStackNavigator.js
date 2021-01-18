import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/Home';

import ReceiverDetailsScreen  from '../screens/ReceiverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  DonateList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'DonateList'
  }
);
