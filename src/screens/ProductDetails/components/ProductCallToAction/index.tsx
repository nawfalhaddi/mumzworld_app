import {BaseText} from '@ui/components/base/BaseText';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import {scale} from '@ui/theme/scaling';
import {LinearGradient} from 'expo-linear-gradient';
import {t} from 'i18next';
import React from 'react';
import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface IProductCallToActionProps extends ViewProps {}

const ProductCallToAction = ({...rest}: IProductCallToActionProps) => {
  return (
    <MainContainer colors={['rgba(255,255,255,0.1)', '#fff']} {...rest}>
      <Container>
        <PayBtn onPress={() => {}}>
          <BaseText type="BodyXsBold">{t('txt_pay').toUpperCase()}</BaseText>
        </PayBtn>
        <AddToCartBtn onPress={() => {}}>
          <BaseText type="BodyXsBold" color="semanticBgWhite">
            {t('txt_add_to_cart').toUpperCase()}
          </BaseText>
        </AddToCartBtn>
      </Container>
    </MainContainer>
  );
};

export default ProductCallToAction;

const MainContainer = styled(LinearGradient)(({theme: {spacingValues}}) => ({
  width: '100%',
  paddingHorizontal: spacingValues.hMd,
  height: scale(60),
  justifyContent: 'flex-start',
}));
const Container = styled(View)(({theme: {}}) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: scale(8),
}));

const PayBtn = styled(BaseTouchableOpacity)(({theme: {colors}}) => ({
  flex: 1,
  height: scale(30),
  borderRadius: 5,
  backgroundColor: colors.semanticBgWhite,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
}));
const AddToCartBtn = styled(BaseTouchableOpacity)(({theme: {colors}}) => ({
  flex: 1,
  height: scale(30),
  borderRadius: 5,
  backgroundColor: colors.semanticBgSecondary,
  justifyContent: 'center',
  alignItems: 'center',
}));
