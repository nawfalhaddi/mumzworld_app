import {FontNames} from '@ui/fonts/Gotham/fontsNames';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextProps} from 'react-native';
import styled, {DefaultTheme} from 'styled-components/native';

const getFontFamily = (type: IBaseTextProps['type']) => {
  switch (type) {
    case 'BodyXl':
    case 'BodyLg':
    case 'BodyMd':
    case 'BodySm':
    case 'BodyXs':
    case 'HeadingXl':
    case 'HeadingLg':
    case 'HeadingMd':
    case 'HeadingSm':
    case 'HeadingXs':
      return FontNames.GothamBook;
    case 'BodyXxs':
    case 'BodyXxxs':
      return FontNames.GothamLight;
    case 'BodyXxsBold':
    case 'BodyXxxsBold':
    case 'BodyLgBold':
    case 'BodyMdBold':
    case 'BodySmBold':
    case 'BodyXsBold':
    case 'BodyXlBold':
      return FontNames.GothamBold;

    default:
      return FontNames.GothamBook;
  }
};

interface IBaseTextProps extends TextProps {
  type?: keyof DefaultTheme['textType'];
  color?: keyof DefaultTheme['colors'];
}

export const BaseText = ({type, color, children, ...rest}: IBaseTextProps) => {
  const {i18n} = useTranslation();

  return (
    <Root type={type} lang={i18n?.language} color={color} {...rest}>
      {children}
    </Root>
  );
};

const Root = styled(Text)<{
  type: IBaseTextProps['type'];
  color: IBaseTextProps['color'];
  lang: string;
}>(
  ({
    theme: {colors, textType},
    type = 'default',
    color = 'semanticFgText',
  }) => ({
    ...textType[type],
    color: colors[color],
    textAlign: 'left',
    fontFamily: getFontFamily(type),
  }),
);
