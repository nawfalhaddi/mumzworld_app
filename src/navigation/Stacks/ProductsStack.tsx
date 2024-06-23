import {RouteNames} from '@navigation/routesNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import Products from '@screens/Products';
import ProductListHeader from '@screens/Products/components/ProductListHeader';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProductsStack = () => {
  const theme = useTheme();
  const {t} = useTranslation();

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
    </Stack.Navigator>
  );
};

export default ProductsStack;
