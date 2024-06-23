import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import BaseSpacer from '@ui/components/base/BaseSpacer';
import {BaseText} from '@ui/components/base/BaseText';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import ChevronLeft from '@ui/components/icons/ChevronLeft';
import HeartIconOutline from '@ui/components/icons/HeartIconOutline';
import ShareIcon from '@ui/components/icons/ShareIcon';
import mumzWorldTheme from '@ui/theme';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {I18nManager, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled, {useTheme} from 'styled-components/native';

interface ProductDetailsHeader extends NativeStackHeaderProps {}

const ProductDetailsHeader = (props: ProductDetailsHeader) => {
  const {top} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <MainContainer>
      <BaseSpacer height={top} />
      <RowContainer style={styles.shadowStyling}>
        <LeftContainer
          onPress={() => {
            props.navigation.goBack();
          }}>
          <ChevronLeft
            stroke={theme.colors.semanticFgText}
            height={scale(18)}
            width={scale(18)}
            style={I18nManager.isRTL ? {transform: [{scaleX: -1}]} : {}}
          />
        </LeftContainer>
        <MiddleContainer>
          <BaseText type="BodyXsBold" color="semanticFgText">
            {props?.options?.title}
          </BaseText>
        </MiddleContainer>
        <RightContainer>
          <ShareIcon
            stroke={theme.colors.semanticFgText}
            height={scale(20)}
            width={scale(20)}
          />
          <HeartIconOutline
            stroke={theme.colors.semanticFgText}
            height={scale(18)}
            width={scale(18)}
          />
        </RightContainer>
      </RowContainer>
    </MainContainer>
  );
};

export default ProductDetailsHeader;

const styles = StyleSheet.create({
  shadowStyling: {
    shadowColor: '#efefef',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.33,
    shadowRadius: 4.62,
    elevation: 4,
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
