import {ProductDetailsApiResponse} from '@customTypes/apis/productDetailsApiResponse';
import BaseSpacer from '@ui/components/base/BaseSpacer';
import {BaseText} from '@ui/components/base/BaseText';
import StarIcon from '@ui/components/icons/StarIcon';
import TamaraIcon from '@ui/components/icons/Tamara';
import {scale} from '@ui/theme/scaling';
import i18next, {t} from 'i18next';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import DeliveryEstimate from './components/DeliveryEstimate';
import ProductDescription from './components/ProductDescription';

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

  const {bottom} = useSafeAreaInsets();
  return (
    <>
      <Container>
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
            (230 {t('txt_reviews')})
          </BaseText>
        </ReviewsContainer>
        <BaseText type="BodyMdBold">
          {finalPrice?.currency} {finalPrice?.value?.toFixed(2)}{' '}
        </BaseText>
        <BaseText type="BodyXxs" color="semanticFgTextDisabled">
          <CrossedText type="BodyXxs" color="semanticFgTextDisabled">
            {regularPrice?.value?.toFixed(2)}{' '}
          </CrossedText>{' '}
          {t('txt_including_vat')}
        </BaseText>
        <BaseSpacer height={scale(8)} />
        <DeliveryEstimate />
      </Container>
      <BaseSpacer height={scale(8)} />
      <Container>
        <BaseText type="BodyXsBold">{t('txt_emi_option_available')}</BaseText>
        <RowContainer>
          <Tamara />
          <BaseText type="BodyXxxs">
            {t('txt_pay_in_4_installments')}{' '}
            <UnderlineText type="BodyXxxs">{t('txt_learn_more')}</UnderlineText>
          </BaseText>
        </RowContainer>
      </Container>
      <BaseSpacer height={scale(8)} />
      <ProductDescription productDetails={productInfoWithCurrentLanguage} />
      <BaseSpacer height={scale(bottom)} />
    </>
  );
};

export default ProductInfo;

const Container = styled(View)(({theme: {spacingValues, colors}}) => ({
  width: '100%',
  paddingHorizontal: spacingValues.hMd,
  paddingVertical: spacingValues.hMd,
  backgroundColor: colors.semanticBgWhite,
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
const UnderlineText = styled(BaseText)(({theme: {}}) => ({
  textDecoration: 'underline',
}));
const RowContainer = styled(View)(({theme: {spacingValues}}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: spacingValues.hXs,
}));
const Tamara = styled(TamaraIcon)(({theme: {spacingValues}}) => ({
  marginRight: spacingValues.hXs,
}));
