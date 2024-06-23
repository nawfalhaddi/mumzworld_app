import {BaseText} from '@ui/components/base/BaseText';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {DefaultTheme, useTheme} from 'styled-components/native';

interface IDiscountLabelProps extends ViewProps {
  percentageAmount?: string;
}

const DiscountLabel = ({
  style,
  percentageAmount,
  ...rest
}: IDiscountLabelProps) => {
  const theme = useTheme();
  if (!percentageAmount) {
    return null;
  }
  return (
    <View style={[getStyles(theme).containerStyle, style]} {...rest}>
      <BaseText type="BodyXxsBold" color="semanticBgWhite">
        -{percentageAmount}%
      </BaseText>
    </View>
  );
};

export default DiscountLabel;

const getStyles = (theme: DefaultTheme) =>
  StyleSheet.create({
    containerStyle: {
      height: scale(17),
      width: scale(32),
      backgroundColor: theme.colors.semanticSupportCyan,
      borderRadius: scale(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
