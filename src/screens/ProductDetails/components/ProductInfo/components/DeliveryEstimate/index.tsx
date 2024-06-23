import {BaseText} from '@ui/components/base/BaseText';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const DeliveryEstimate = () => {
  return (
    <MainContainer>
      <BaseText type="BodyXs">Order within 8 hrs and 30 min</BaseText>
      <BaseText type="BodyXsBold">
        Get it by June 25:{' '}
        <BaseText type="BodyXsBold" color="semanticBgPrimary">
          Dubai
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
