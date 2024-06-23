import {RouteNames} from '@navigation/routesNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import Welcome from '@screens/Welcome';
import {t} from 'i18next';
import React from 'react';
import {useTheme} from 'styled-components/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const WelcomeStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.WelcomeScreen}
      screenOptions={{
        headerTintColor: theme.colors.semanticBgSecondary,
      }}>
      <Stack.Screen
        name={RouteNames.WelcomeScreen}
        component={Welcome}
        options={{title: t('txt_welcome')}}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
