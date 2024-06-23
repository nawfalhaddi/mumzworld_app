module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],
  // This is needed to mock the react-native-gesture-handler
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@navigation/(.*)': '<rootDir>/src/navigation/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    '@store': '<rootDir>/src/store/index',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@ui/(.*)': '<rootDir>/src/ui/$1',
    '@translation/(.*)': '<rootDir>/src/translation/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@root/(.*)': './$1',
    '@customTypes/(.*)': '<rootDir>/src/customTypes/$1',
  },
  collectCoverageFrom: ['<rootDir>/src/**', '!**/node_modules/**'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-webview|react-native-extended-stylesheet|@react-native|react-native-flipper|@sentry|react-native-date-picker|react-native-vector-icons|react-native-iphone-x-helper|@react-native-firebase|@fortawesome)/)',
  ],
  transform: {},
  moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js'],
  coverageThreshold: {
    global: {
      branches: 35,
      functions: 35,
      lines: 35,
      statements: -10,
    },
  },
};
