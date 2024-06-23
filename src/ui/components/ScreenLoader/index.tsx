import {scale} from '@ui/theme/scaling';
import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const ScreenLoader = () => {
  return (
    <LoaderWrapper>
      <LottieView
        autoPlay
        loop
        style={{
          width: scale(70),
          height: scale(70),
        }}
        source={require('@root/assets/mz-smile.json')}
      />
    </LoaderWrapper>
  );
};

export default ScreenLoader;

const LoaderWrapper = styled(View)(({theme: {colors}}) => ({
  flex: 1,
  backgroundColor: colors.semanticBgWhite,
  alignItems: 'center',
  justifyContent: 'center',
}));
