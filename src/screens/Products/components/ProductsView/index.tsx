import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import {styled} from 'styled-components/native';
import React from 'react';
import {Text, View} from 'react-native';

export interface ProductsViewProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.ProductsScreen> {}

export default function ProductsView({navigation}: ProductsViewProps) {
  return (
    <MainContainer>
      <Text>Products View</Text>
    </MainContainer>
  );
}
const MainContainer = styled(View)(
  ({theme: {colors, textType, spacingValues}}) => ({
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacingValues.vLg,
    paddingHorizontal: spacingValues.hLg,
  }),
);
