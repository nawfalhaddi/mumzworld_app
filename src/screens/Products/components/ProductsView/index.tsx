import {Product} from '@customTypes/apis/productsApiResponse';
import {useGetProductsList} from '@hooks/apis/useGetProductsList';
import {RouteNames} from '@navigation/routesNames';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import {FlashList} from '@shopify/flash-list';
import {scale} from '@ui/theme/scaling';
import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {styled} from 'styled-components/native';
import ProductTile from '../ProductTile';

export interface ProductsViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.ProductsScreen
  > {}

export default function ProductsView({navigation}: ProductsViewProps) {
  const isFocused = useIsFocused();
  const {data, isInitialLoading, refetch, isRefetching} = useGetProductsList({
    enabled: isFocused,
    cacheTime: Infinity,
  });

  const renderItem = ({item}: {item: Product}) => {
    return (
      <ProductTile
        productInfo={item}
        onPress={() => {
          navigation.navigate(RouteNames.ProductDetailsScreen);
        }}
      />
    );
  };

  if (isInitialLoading) {
    return (
      <LoaderWrapper>
        <LottieView
          autoPlay
          loop
          style={{
            width: scale(200),
            height: scale(200),
          }}
          source={require('@root/assets/mz-smile.json')}
        />
      </LoaderWrapper>
    );
  }

  return (
    <MainContainer>
      <FlashList
        onRefresh={refetch}
        refreshing={isRefetching}
        data={data?.data?.products?.items}
        renderItem={renderItem}
        estimatedItemSize={scale(250)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </MainContainer>
  );
}
const MainContainer = styled(View)(({theme: {colors}}) => ({
  flex: 1,
  backgroundColor: colors.semanticBgWhite,
}));
const LoaderWrapper = styled(View)(({theme: {colors}}) => ({
  flex: 1,
  backgroundColor: colors.semanticBgWhite,
  alignItems: 'center',
  justifyContent: 'center',
}));
