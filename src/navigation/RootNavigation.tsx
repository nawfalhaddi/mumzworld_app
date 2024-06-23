import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home';
import React from 'react';
import {RootStackParamList} from '../customTypes/navigation';
import {RouteNames} from './routesNames';
import BottomTabNavigation from './BottomTabs/BottomTabNavigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Stack.Screen
        name={RouteNames.MainBottomTab}
        options={{headerShown: false}}
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
