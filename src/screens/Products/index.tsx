import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import React from 'react';
import ProductsView from './components/ProductsView';

export interface ProductsProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.ProductsScreen
  > {}

export default function Products(props: ProductsProps) {
  return <ProductsView {...props} />;
}
