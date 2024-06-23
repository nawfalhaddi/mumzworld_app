import ProductsStack from '@navigation/Stacks/ProductsStack';
import SettingsStack from '@navigation/Stacks/SettingsStack';
import WelcomeStack from '@navigation/Stacks/WeclomStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIconOutline from '@ui/components/icons/HomeIconOutline';
import HomeIconSolid from '@ui/components/icons/HomeIconSolid';
import SettingsIconOutline from '@ui/components/icons/SettingsIconOutline';
import SettingsIconSolid from '@ui/components/icons/SettingsIconSolid';
import ShopIconOutline from '@ui/components/icons/ShopIconOutline';
import ShopIconSolid from '@ui/components/icons/ShopIconSolid';
import {FontNames} from '@ui/fonts/Gotham/fontsNames';
import {t} from 'i18next';
import React from 'react';
import {useTheme} from 'styled-components/native';
import {RootStackParamList} from '../../customTypes/navigation';
import {RouteNames} from '../routesNames';
const Tab = createBottomTabNavigator<RootStackParamList>();

const getTabIcon = (
  {size, color, focused}: {focused: boolean; color: string; size: number},
  routeName: string,
) => {
  switch (routeName) {
    case RouteNames.WelcomeScreen:
      return focused ? (
        <HomeIconSolid height={size} width={size} fill={color} stroke={color} />
      ) : (
        <HomeIconOutline
          height={size}
          width={size}
          fill={'white'}
          stroke={color}
        />
      );
    case RouteNames.ProductsScreen:
      return focused ? (
        <ShopIconSolid height={size} width={size} fill={color} />
      ) : (
        <ShopIconOutline
          height={size}
          width={size}
          fill={'white'}
          stroke={color}
        />
      );
    case RouteNames.SettingsScreen:
      return focused ? (
        <SettingsIconSolid height={size} width={size} fill={color} />
      ) : (
        <SettingsIconOutline height={size} width={size} stroke={color} />
      );

    default:
      return null;
  }
};

const TabNavigation = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      id="bottomTab"
      initialRouteName={RouteNames.WelcomeStack}
      screenOptions={{
        tabBarActiveTintColor: theme?.colors?.semanticBgSecondary,
        tabBarInactiveTintColor: theme.colors.semanticFgTextDisabled,
        tabBarLabelStyle: {fontFamily: FontNames.GothamMedium},
      }}>
      <Tab.Screen
        name={RouteNames.WelcomeStack}
        component={WelcomeStack}
        options={{
          title: t('txt_welcome'),
          tabBarIcon: props => getTabIcon(props, RouteNames.WelcomeScreen),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={RouteNames.ProductsStack}
        component={ProductsStack}
        options={{
          title: t('txt_products'),
          tabBarIcon: props => getTabIcon(props, RouteNames.ProductsScreen),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={RouteNames.SettingsStack}
        component={SettingsStack}
        options={{
          title: t('txt_settings'),
          tabBarIcon: props => getTabIcon(props, RouteNames.SettingsScreen),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
