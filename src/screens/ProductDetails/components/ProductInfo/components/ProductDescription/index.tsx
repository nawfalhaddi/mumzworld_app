import {ProductDetails} from '@customTypes/apis/productDetailsApiResponse';
import {BaseText} from '@ui/components/base/BaseText';
import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

interface IProductDescriptionProps {
  productDetails: ProductDetails | undefined;
}

const ProductDescription = ({productDetails}: IProductDescriptionProps) => {
  const featuresBulletPoints = productDetails?.features.trim().split('\n');
  return (
    <MainContainer>
      <BaseText type="BodySmBold">{t('txt_features')}</BaseText>
      {featuresBulletPoints?.map((feature, index) => (
        <BaseText key={index.toString()} type="BodyXxs">
          {'\u2022'} {feature}
        </BaseText>
      ))}
      <BaseText type="BodySmBold">{t('txt_description')}</BaseText>
      <BaseText type="BodyXxs">{productDetails?.meta_description}</BaseText>
    </MainContainer>
  );
};

export default ProductDescription;

const MainContainer = styled(View)(({theme: {spacingValues, colors}}) => ({
  width: '100%',
  paddingHorizontal: spacingValues.hMd,
  paddingVertical: spacingValues.hMd,
  backgroundColor: colors.semanticBgWhite,
}));
