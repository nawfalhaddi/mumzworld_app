import {RouteNames} from '@navigation/routesNames';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [RouteNames.ProductDetailsScreen]: undefined;
  [RouteNames.SettingsScreen]: undefined;
  [RouteNames.ProductsScreen]: undefined;
  [RouteNames.WelcomeScreen]: undefined;
  [RouteNames.HomeScreen]: undefined;
  [RouteNames.MainBottomTab]: undefined;
};
