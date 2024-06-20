import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import WelcomeView from './components/WelcomeView';

export interface WelcomeProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.WelcomeScreen> {}

export default function Welcome(props: WelcomeProps) {
  return <WelcomeView {...props} />;
}
