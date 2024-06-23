import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import React from 'react';
import {Text, View} from 'react-native';
import {styled} from 'styled-components/native';

export interface WelcomeViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.WelcomeScreen
  > {}

export default function WelcomeView({}: WelcomeViewProps) {
  return (
    <MainContainer>
      <Text>Welcome View</Text>
    </MainContainer>
  );
}
const MainContainer = styled(View)(({theme: {spacingValues}}) => ({
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: spacingValues.vLg,
  paddingHorizontal: spacingValues.hLg,
}));
