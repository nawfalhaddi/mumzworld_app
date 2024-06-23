import {server} from './__mock__/server';
import '@testing-library/jest-native/extend-expect';
import {jest, beforeAll, beforeEach, afterEach, afterAll} from '@jest/globals';

// surpressing warning resulted by useLinking due to usage of NavigationContainer
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({getInitialState: {then: () => null}}),
  __esModule: true,
}));

global.jest = jest;

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('expo-localization', () => {
  return {
    getLocales: () => [{languageCode: 'en'}],
  };
});

//establish api mocking before all tests
beforeAll(() => server.listen());

beforeEach(() => {
  global.fetch = jest.fn((...args) => {
    console.warn('global.fetch needs to be mocked in tests', ...args);
    throw new Error('global.fetch needs to be mocked in tests');
  });
});

//clean up after the tests are finished
afterAll(() => server.close());

afterEach(() => {
  global.fetch.mockRestore();
  //reset any requests handlers that we may add during the tests,
  //so they don't affect other tests.
  server.resetHandlers();
});
