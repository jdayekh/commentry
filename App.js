/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import './global.js';

import Landing from './screens/Landing';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const App = () => {
  return <Landing />;
};
export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
