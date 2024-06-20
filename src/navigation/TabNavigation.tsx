import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '@screens/Products';
import Settings from '@screens/Settings';
import Welcome from '@screens/Welcome';
import React from 'react';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Tab.Screen name={RouteNames.WelcomeScreen} component={Welcome} />
      <Tab.Screen name={RouteNames.ProductsScreen} component={Products} />
      <Tab.Screen name={RouteNames.SettingsScreen} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
