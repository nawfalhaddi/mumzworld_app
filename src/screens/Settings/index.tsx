import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import SettingsView from './components/SettingsView';

export interface SettingsProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.SettingsScreen> {}

export default function Settings(props: SettingsProps) {
  return <SettingsView {...props} />;
}
