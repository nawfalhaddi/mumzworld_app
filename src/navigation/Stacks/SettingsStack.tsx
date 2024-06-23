import {RouteNames} from '@navigation/routesNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import Settings from '@screens/Settings';
import BaseAppHeader from '@ui/components/base/BaseAppHeader';
import React from 'react';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

const SettingsStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.SettingsScreen}
      screenOptions={{
        header: BaseAppHeader,
      }}>
      <Stack.Screen
        name={RouteNames.SettingsScreen}
        component={Settings}
        options={{title: t('txt_settings')}}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
