import React from 'react';
import { 
  Text, 
  View
} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Coach from './screens/coach';
import Profile from './screens/profile';
import Team from './screens/team';

export default createBottomTabNavigator(
  {
    Team: Team,
    Coach: Coach,
    Profile: Profile
  },
  {
    initialRouteName: 'Profile'
  }
);