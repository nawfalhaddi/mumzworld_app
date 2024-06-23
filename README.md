# MumzWorld POC App

This project is using the following libraries:

- Expo Framework
- styled-components: to handle design system including colors pallet, typography and spacing.
- axios and react-query: to handle network requests and manage the caching
- react-navigation: to handle navigation
- react-i18next: to handle translation
- Async-storage: to use phone storage
- react-native-svg: to use svg content inside the mobile application
- react-redux and @reduxjs/toolkit: to manage global state inside the application
- @testing-library/react-native and Jest for Unit / Integration testing
- husky: for commit linting and verify the testing still working before pushing new changes.

## Installation

To run the project locally, follow these instructions:

1. Run `npx expo install`

2. After installation is done, Run `npx expo start`

3. Press on `s` to get Expo Go QR code

4. Make sure your device has Expo Go application

5. If you want to run the application on iOS device: Open the camera of the phone and scan the QR code. Otherwise if you are using Android, open Expo Go app and Click on scan QR code.

## Project Structure

```
.husky it contains commands that we want to run before every commit

src
|
|── _mock_ => This folder contains files related to mock tests.
|
|── .husky => This folder contains all githooks we want to run with the help of husky.
|
|── config => In this folder, we include the configuration that our app needs,
| such as jest setup and env setup.
|
|── constants => In this folder, we put all constants that we need inside
| our application, like react-query-keys and accessibilityIds.
|
|── hooks => In this folder, we put all hooks we may be using globally
| | inside our application, for example, useIsNetworkEnabled, useApiHeaders... etc.
| |
| ├── api => In this folder, we put all hooks of our API calls.
| └── ..other hooks
|
|── lib => In this folder, we put the integration of other services, such as sentry,
| google analytics... etc
|
|── navigation => This folder includes all kinds of navigation, such as
| drawer navigation, tab navigation, and stack navigation.
|
|── screens
| └── screen1 => each screen contains multiple folders that contains specifically
|  the elements that belong to it.
|        |
|        ├── components
|        ├── _tests_
|        ├── hooks
|        └── index.tsx
|
|── scripts => In this folder, we put all scripts that we need to run, for example,
| We have a script that automatically creates a new screen, `gen-screen.ts`
|
|── store => In this folder, we put all reducers that we need to use for redux.
|
|── translation => In this folder, we put all files related to translation.
|
|── types => This folder contains all types that we want to declare.
|
└── ui
   ├── components => Here we put all common components that are used across the application
   ├── fonts => Fonts for our application
   ├── icons => Here we put all icons
   ├── images => Here we put all images
   └── theme => Here we define our theme
```

## Resources

Read my articles on [Medium](https://medium.com/@nawfalhaddi).

## Contact

Connect with me on [LinkedIn](https://www.linkedin.com/in/nawfalhaddi/).
