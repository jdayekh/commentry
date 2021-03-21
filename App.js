/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import './global.js';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Landing from './screens/Landing';
// import { MomentProvider } from './MomentContext';
import {
  NavigationContainer
} from '@react-navigation/native';

const App = ({navigation}) => {
  return (
   
      // <NavigationContainer>
      //     <HomeScreen navigation={navigation} />
      // </NavigationContainer>

      <Landing />
      
   
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
