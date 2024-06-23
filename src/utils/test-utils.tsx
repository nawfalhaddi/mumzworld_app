import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import mumzWorldTheme from '@ui/theme';
import {ThemeProvider} from 'styled-components/native';
import '@translation/language-detector';

const render = (ui: any, {...options} = {}) => {
  // @ts-ignore
  const Wrapper = ({children}) => {
    return <ThemeProvider theme={mumzWorldTheme}>{children}</ThemeProvider>;
  };
  // @ts-ignore
  return rtlRender(ui, {wrapper: Wrapper, ...options});
};

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export {render};

export const useNavigationMock = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;
