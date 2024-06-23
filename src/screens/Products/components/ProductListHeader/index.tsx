import {useGetProductsList} from '@hooks/apis/useGetProductsList';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import BaseSpacer from '@ui/components/base/BaseSpacer';
import {BaseText} from '@ui/components/base/BaseText';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import CartIcon from '@ui/components/icons/CartIcon';
import FilterIcon from '@ui/components/icons/FilterIcon';
import mumzWorldTheme from '@ui/theme';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled, {useTheme} from 'styled-components/native';

interface ProductListHeader extends NativeStackHeaderProps {}

const ProductListHeader = ({}: ProductListHeader) => {
  const {top} = useSafeAreaInsets();
  const theme = useTheme();
  const isFocused = useIsFocused();
  const {data} = useGetProductsList({
    enabled: isFocused,
  });

  return (
    <MainContainer>
      <BaseSpacer height={top} />
      <RowContainer style={styles.shadowStyling}>
        <LeftContainer>
          <FilterIcon
            stroke={theme.colors.semanticFgText}
            height={scale(20)}
            width={scale(20)}
          />
          <BaseText type="BodyXxs" color="semanticFgText">
            {' '}
            (2)
          </BaseText>
        </LeftContainer>
        <MiddleContainer>
          <BaseText type="BodyXsBold" color="semanticFgText">
            Category name / Search
          </BaseText>
          <BaseText type="BodyXxs" color="semanticFgText">
            ({data?.data?.products?.total_count})
          </BaseText>
        </MiddleContainer>
        <RightContainer>
          <CartIcon
            stroke={theme.colors.semanticFgText}
            height={scale(20)}
            width={scale(20)}
          />
        </RightContainer>
      </RowContainer>
    </MainContainer>
  );
};

export default ProductListHeader;

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
    justifyContent: 'center',
    flexDirection: 'row',
  }),
);

const MiddleContainer = styled(View)(({theme: {}}) => ({
  flex: 5,
  height: scale(50),
  alignItems: 'center',
  justifyContent: 'center',
}));

const RightContainer = styled(View)(({theme: {spacingValues}}) => ({
  //   borderWidth: 1,
  flex: 1,
  height: scale(50),
  paddingRight: spacingValues.hSm,
  justifyContent: 'center',
  alignItems: 'flex-end',
}));
