import '../global.js';

import Landing from './Landing';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: global.primary_color,
          shadowColor: global.dark_gray, // iOS
          elevation: 4, // Android
        },
        headerTintColor: global.background_color,
        headerTitleStyle: {
          color: global.background_color,
        },
      }}>
      <HomeStack.Screen
        name="Landing"
        component={Landing}
        options={({route}) => ({
          title: 'Live commentary',
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />

      
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
