import {RouteNames} from '@navigation/routesNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import Welcome from '@screens/Welcome';
import BaseAppHeader from '@ui/components/base/BaseAppHeader';
import React from 'react';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

const WelcomeStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={RouteNames.WelcomeScreen}
      screenOptions={{
        header: BaseAppHeader,
      }}>
      <Stack.Screen
        name={RouteNames.WelcomeScreen}
        component={Welcome}
        options={{
          title: t('txt_welcome'),
        }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
