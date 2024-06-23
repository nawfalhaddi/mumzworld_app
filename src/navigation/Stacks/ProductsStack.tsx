import {RouteNames} from '@navigation/routesNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import ProductDetails from '@screens/ProductDetails';
import Products from '@screens/Products';
import ProductListHeader from '@screens/Products/components/ProductListHeader';
import {FontNames} from '@ui/fonts/Gotham/fontsNames';
import {t} from 'i18next';
import React from 'react';
import {useTheme} from 'styled-components/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProductsStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.ProductsScreen}
      screenOptions={{
        headerTintColor: theme.colors.semanticBgSecondary,
      }}>
      <Stack.Screen
        name={RouteNames.ProductsScreen}
        component={Products}
        options={{
          title: t('txt_products'),
          header: ProductListHeader,
        }}
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

export default ProductsStack;
