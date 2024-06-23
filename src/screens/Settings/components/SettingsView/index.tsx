import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import {styled} from 'styled-components/native';
import React from 'react';
import {Text, View} from 'react-native';

export interface SettingsViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.SettingsScreen
  > {}

export default function SettingsView({navigation}: SettingsViewProps) {
  return (
    <MainContainer>
      <Text>Settings View</Text>
    </MainContainer>
  );
}
const MainContainer = styled(View)(
  ({theme: {colors, textType, spacingValues}}) => ({
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacingValues.vLg,
    paddingHorizontal: spacingValues.hLg,
  }),
);
