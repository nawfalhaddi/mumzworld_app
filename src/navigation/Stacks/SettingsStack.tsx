import {RouteNames} from '@navigation/routesNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import Settings from '@screens/Settings';
import {t} from 'i18next';
import React from 'react';
import {useTheme} from 'styled-components/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const SettingsStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.SettingsScreen}
      screenOptions={{
        headerTintColor: theme.colors.semanticBgSecondary,
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
