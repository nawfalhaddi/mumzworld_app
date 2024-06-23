import {ProductDetailsApiResponse} from '@customTypes/apis/productDetailsApiResponse';
import {BaseText} from '@ui/components/base/BaseText';
import StarIcon from '@ui/components/icons/StarIcon';
import {scale} from '@ui/theme/scaling';
import i18next from 'i18next';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

interface IProps {
  productDetails: ProductDetailsApiResponse | undefined;
}
const ProductInfo = ({productDetails}: IProps) => {
  const productInfoWithCurrentLanguage = useMemo(
    () =>
      productDetails?.data?.product.find(
        i => i.language === i18next.language,
      ) ?? productDetails?.data?.product?.[1],
    [productDetails?.data?.product],
  );

  const finalPrice = useMemo(
    () =>
      productInfoWithCurrentLanguage?.price_range?.minimum_price?.final_price,
    [productInfoWithCurrentLanguage?.price_range?.minimum_price?.final_price],
  );

  const regularPrice = useMemo(
    () =>
      productInfoWithCurrentLanguage?.price_range?.minimum_price?.regular_price,
    [productInfoWithCurrentLanguage?.price_range?.minimum_price?.regular_price],
  );
  return (
    <MainContainer>
      <BaseText type="BodySm" numberOfLines={2} ellipsizeMode="tail">
        {productInfoWithCurrentLanguage?.name}
      </BaseText>
      <ReviewsContainer>
        {[...new Array(5).keys()].map((_, index) => (
          <StarIcon
            key={index.toString()}
            height={scale(15)}
            width={scale(15)}
          />
        ))}
        <BaseText type="BodyXxsBold" color="semanticFgTextWeak">
          {' '}
          4.7
        </BaseText>
        <BaseText type="BodyXxs" color="semanticFgTextWeak">
          {' '}
          (230 reviews)
        </BaseText>
      </ReviewsContainer>
      <BaseText type="BodyMdBold">
        {finalPrice?.currency} {finalPrice?.value?.toFixed(2)}{' '}
      </BaseText>
      <BaseText type="BodyXxs" color="semanticFgTextDisabled">
        <CrossedText type="BodyXxs" color="semanticFgTextDisabled">
          {regularPrice?.value?.toFixed(2)}{' '}
        </CrossedText>{' '}
        including VAT
      </BaseText>
    </MainContainer>
  );
};

export default ProductInfo;

const MainContainer = styled(View)(({theme: {spacingValues}}) => ({
  width: '100%',
  paddingHorizontal: spacingValues.hMd,
}));

const ReviewsContainer = styled(View)(({theme: {spacingValues}}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: spacingValues.hXs,
  marginTop: spacingValues.hXs,
}));

const CrossedText = styled(BaseText)(({theme: {}}) => ({
  textDecoration: 'line-through',
}));
