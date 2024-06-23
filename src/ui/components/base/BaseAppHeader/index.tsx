import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import BaseSpacer from '@ui/components/base/BaseSpacer';
import {BaseText} from '@ui/components/base/BaseText';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import mumzWorldTheme from '@ui/theme';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface BaseAppHeader extends NativeStackHeaderProps {}

const BaseAppHeader = (props: BaseAppHeader) => {
  const {top} = useSafeAreaInsets();

  return (
    <MainContainer>
      <BaseSpacer height={top} />
      <RowContainer style={styles.shadowStyling}>
        <LeftContainer />
        <MiddleContainer>
          <BaseText type="BodySmBold" color="semanticFgText">
            {props?.options?.title}
          </BaseText>
        </MiddleContainer>
        <RightContainer />
      </RowContainer>
    </MainContainer>
  );
};

export default BaseAppHeader;

const styles = StyleSheet.create({
  shadowStyling: {
    shadowColor: '#efefef',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.33,
    shadowRadius: 4.62,
    elevation: 1,
    borderBottomWidth: 1,
    borderBottomColor: mumzWorldTheme.colors.semanticFgTextInvert,
  },
});

const MainContainer = styled(View)(({theme: {colors}}) => ({
  width: '100%',
  backgroundColor: colors.semanticBgWhite,
}));
const RowContainer = styled(View)(({theme: {colors}}) => ({
  height: scale(50),
  width: '100%',
  backgroundColor: colors.semanticBgWhite,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
}));

const LeftContainer = styled(BaseTouchableOpacity)(
  ({theme: {spacingValues}}) => ({
    flex: 1,
    height: scale(50),
    paddingLeft: spacingValues.hSm,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }),
);

const MiddleContainer = styled(View)(({}) => ({
  flex: 5,
  height: scale(50),
  alignItems: 'center',
  justifyContent: 'center',
}));

const RightContainer = styled(View)(({theme: {spacingValues}}) => ({
  flex: 1,
  height: scale(50),
  paddingRight: spacingValues.hSm,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
}));
