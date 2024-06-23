import {RouteNames} from '@navigation/routesNames';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [RouteNames.ProductDetailsScreen]: undefined;
  [RouteNames.SettingsScreen]: undefined;
  [RouteNames.ProductsScreen]: {itemsCount?: number} | undefined;
  [RouteNames.WelcomeScreen]: undefined;
  [RouteNames.MainBottomTab]: undefined;
  [RouteNames.WelcomeStack]: undefined;
  [RouteNames.ProductsStack]: undefined;
  [RouteNames.SettingsStack]: undefined;
};
