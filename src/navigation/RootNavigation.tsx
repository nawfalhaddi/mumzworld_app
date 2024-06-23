import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '@screens/ProductDetails';
import ProductDetailsHeader from '@screens/ProductDetails/components/ProductDetailsHeader';
import React from 'react';
import {RootStackParamList} from '../customTypes/navigation';
import BottomTabNavigation from './BottomTabs/BottomTabNavigation';
import {RouteNames} from './routesNames';
import {useTranslation} from 'react-i18next';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName={RouteNames.MainBottomTab}>
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
          header: ProductDetailsHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
