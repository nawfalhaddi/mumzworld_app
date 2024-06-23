import {useGetProductDetails} from '@hooks/apis/useGetProductDetails';
import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import ScreenLoader from '@ui/components/ScreenLoader';
import {scale} from '@ui/theme/scaling';
import React, {useState} from 'react';
import {Dimensions, I18nManager, Image, ScrollView, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {styled} from 'styled-components/native';
import CarouselIndexTracker from '../CarouselIndexTracker';
import ProductCallToAction from '../ProductCallToAction';
import ProductInfo from '../ProductInfo';
import BaseSpacer from '@ui/components/base/BaseSpacer';

export interface ProductDetailsViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.ProductDetailsScreen
  > {}

const windowWidth = Dimensions.get('window').width;

export default function ProductDetailsView({}: ProductDetailsViewProps) {
  const {data, isInitialLoading} = useGetProductDetails();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isInitialLoading) {
    return <ScreenLoader />;
  }
  return (
    <>
      <MainContainer>
        <ScrollView style={{}}>
          <Carousel
            loop
            width={windowWidth}
            autoPlayReverse={I18nManager.isRTL}
            height={scale(300)}
            data={data?.data?.product?.[1]?.media_gallery_entries ?? []}
            scrollAnimationDuration={1000}
            onSnapToItem={index => setActiveIndex(index)}
            renderItem={({item}) => (
              <Image
                source={{
                  uri:
                    'https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2' +
                    item?.file,
                }}
                height={scale(300)}
                width={windowWidth}
                resizeMode="cover"
              />
            )}
          />
          <CarouselTracker
            itemsCount={data?.data?.product?.[1]?.media_gallery_entries?.length}
            activeIndex={activeIndex}
          />
          <ProductInfo productDetails={data} />
          <BaseSpacer height={scale(100)} />
        </ScrollView>
      </MainContainer>
      <ProductCtas />
    </>
  );
}
const MainContainer = styled(View)(({}) => ({
  flex: 1,
  backgroundColor: '#f8f8f9',
  position: 'relative',
}));

const CarouselTracker = styled(CarouselIndexTracker)(
  ({theme: {spacingValues}}) => ({
    paddingTop: spacingValues.hMd,
  }),
);

const ProductCtas = styled(ProductCallToAction)(({theme: {}}) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 10,
}));
