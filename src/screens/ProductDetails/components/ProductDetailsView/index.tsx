import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import {styled} from 'styled-components/native';
import React, {useState} from 'react';
import {Dimensions, I18nManager, Image, ScrollView} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useGetProductDetails} from '@hooks/apis/useGetProductDetails';
import CarouselIndexTracker from '../CarouselIndexTracker';
import {scale} from '@ui/theme/scaling';
import ProductInfo from '../ProductInfo';

export interface ProductDetailsViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.ProductDetailsScreen
  > {}

const windowWidth = Dimensions.get('window').width;

export default function ProductDetailsView({}: ProductDetailsViewProps) {
  const {data} = useGetProductDetails();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <MainContainer>
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
    </MainContainer>
  );
}
const MainContainer = styled(ScrollView)(({theme: {colors}}) => ({
  flex: 1,
  backgroundColor: '#f8f8f9',
}));
const CarouselTracker = styled(CarouselIndexTracker)(
  ({theme: {spacingValues}}) => ({
    paddingTop: spacingValues.hMd,
  }),
);
