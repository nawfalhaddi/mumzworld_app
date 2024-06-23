import React from 'react';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import {DefaultTheme, useTheme} from 'styled-components/native';
import {scale} from '@ui/theme/scaling';
import {StyleSheet, TouchableOpacityProps} from 'react-native';
import HeartIconOutline from '@ui/components/icons/HeartIconOutline';

interface IAddToWhishListBtnProps extends TouchableOpacityProps {}

const AddToWhishListBtn = ({style, ...rest}: IAddToWhishListBtnProps) => {
  const theme = useTheme();
  return (
    <BaseTouchableOpacity
      style={[getStyles(theme).containerStyle, style]}
      {...rest}>
      <HeartIconOutline
        fill={theme.colors.semanticBgSecondary}
        fillOpacity={0.5}
        height={scale(15)}
        width={scale(15)}
      />
    </BaseTouchableOpacity>
  );
};

export default AddToWhishListBtn;

const getStyles = (theme: DefaultTheme) =>
  StyleSheet.create({
    containerStyle: {
      height: scale(22),
      width: scale(22),
      backgroundColor: theme.colors.semanticBgWhite,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
  });
