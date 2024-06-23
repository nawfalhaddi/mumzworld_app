import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

interface IBaseSpacerProps {
  height: number;
}

const BaseSpacer = (props: IBaseSpacerProps) => {
  return <Root height={props?.height} />;
};

export default BaseSpacer;

const Root = styled(View)<{height: number}>(({height}) => ({
  height,
}));
