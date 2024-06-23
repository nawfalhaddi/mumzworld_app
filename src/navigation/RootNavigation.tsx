import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '@screens/ProductDetails';
import {FontNames} from '@ui/fonts/Gotham/fontsNames';
import {t} from 'i18next';
import React from 'react';
import {useTheme} from 'styled-components/native';
import {RootStackParamList} from '../customTypes/navigation';
import BottomTabNavigation from './BottomTabs/BottomTabNavigation';
import {RouteNames} from './routesNames';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Stack.Screen
        name={RouteNames.MainBottomTab}
        options={{headerShown: false}}
        component={BottomTabNavigation}
      />
      <Stack.Screen
        name={RouteNames.ProductDetailsScreen}
        component={ProductDetails}
        options={{
          title: t('txt_product_details'),
          headerBackTitleVisible: false,
          headerTintColor: theme.colors.semanticFgText,
          headerTitleStyle: {fontFamily: FontNames.GothamBold},
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
