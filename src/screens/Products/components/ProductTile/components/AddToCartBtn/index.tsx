import React from 'react';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import {DefaultTheme, useTheme} from 'styled-components/native';
import {scale} from '@ui/theme/scaling';
import PlusIcon from '@ui/components/icons/PlusIcon';
import {StyleSheet, TouchableOpacityProps} from 'react-native';

interface IAddToCartBtnProps extends TouchableOpacityProps {}

const AddToCartBtn = ({style, ...rest}: IAddToCartBtnProps) => {
  const theme = useTheme();
  return (
    <BaseTouchableOpacity
      style={[getStyles(theme).containerStyle, style]}
      {...rest}>
      <PlusIcon
        fill={theme.colors.semanticBgWhite}
        height={scale(15)}
        width={scale(15)}
      />
    </BaseTouchableOpacity>
  );
};

export default AddToCartBtn;

const getStyles = (theme: DefaultTheme) =>
  StyleSheet.create({
    containerStyle: {
      height: scale(22),
      width: scale(22),
      backgroundColor: theme.colors.semanticBgSecondary,
      borderRadius: scale(15),
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: theme.colors.semanticBgSecondary,
      shadowOffset: {
        width: 0.5,
        height: 1,
      },
      shadowOpacity: 0.43,
      shadowRadius: 2.62,
      elevation: 4,
    },
  });
