import {BaseText} from '@ui/components/base/BaseText';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import styled from 'styled-components/native';

const DeliveryEstimate = () => {
  const {t} = useTranslation();

  return (
    <MainContainer>
      <BaseText type="BodyXs">{t('txt_order_within_8hrs_and_30min')}</BaseText>
      <BaseText type="BodyXsBold">
        {t('txt_get_it_by_june_25')}{' '}
        <BaseText type="BodyXsBold" color="semanticBgPrimary">
          {t('txt_dubai')}
        </BaseText>
      </BaseText>
    </MainContainer>
  );
};

export default DeliveryEstimate;

const MainContainer = styled(View)(({theme: {spacingValues}}) => ({
  width: '100%',
  backgroundColor: '#f6f6f8',
  padding: spacingValues.hSm,
  borderRadius: scale(6),
}));
