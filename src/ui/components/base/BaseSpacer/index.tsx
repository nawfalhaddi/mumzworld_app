import React from 'react';
import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface IBaseSpacerProps extends ViewProps {
  height?: number;
}

const BaseSpacer = ({height, ...rest}: IBaseSpacerProps) => {
  return <Root height={height ?? 0} {...rest} />;
};

export default BaseSpacer;

const Root = styled(View)<{height: number}>(({height}) => ({
  height,
}));
