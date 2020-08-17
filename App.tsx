/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {TabNavigator, StackNavigator} from './src/config/navigation'
import { Switch } from 'react-native-gesture-handler';
// declare const global: {HermesInternal: null | {}};

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
          <TabNavigator />
      </NavigationContainer>
    )
  }
}
