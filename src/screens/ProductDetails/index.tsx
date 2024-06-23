import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import React from 'react';
import ProductDetailsView from './components/ProductDetailsView';

export interface ProductDetailsProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.ProductDetailsScreen
  > {}

export default function ProductDetails(props: ProductDetailsProps) {
  return <ProductDetailsView {...props} />;
}
