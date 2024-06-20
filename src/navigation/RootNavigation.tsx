import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home';
import React from 'react';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Stack.Screen
        name={RouteNames.MainBottomTab}
        options={{headerShown: false}}
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
