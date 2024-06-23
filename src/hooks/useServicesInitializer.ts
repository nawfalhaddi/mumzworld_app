import {FontNames} from '@ui/fonts/Gotham/fontsNames';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';

const useServicesInitializer = () => {
  const [isAppReadyToStart, setIsAppReadyToStart] = useState(false);
  /*****
   Load fonts and hide splash screen once the fonts are loaded
   ****/
  const [fontsLoaded, fontError] = useFonts({
    [FontNames.GothamBlack]: require('@ui/fonts/Gotham/Gotham-Black.otf'),
    [FontNames.GothamBlackItalic]: require('@ui/fonts/Gotham/Gotham-BlackItalic.otf'),
    [FontNames.GothamBold]: require('@ui/fonts/Gotham/Gotham-Bold.otf'),
    [FontNames.GothamBoldItalic]: require('@ui/fonts/Gotham/Gotham-BoldItalic.otf'),
    [FontNames.GothamBook]: require('@ui/fonts/Gotham/Gotham-Book.otf'),
    [FontNames.GothamBookItalic]: require('@ui/fonts/Gotham/Gotham-BookItalic.otf'),
    [FontNames.GothamLight]: require('@ui/fonts/Gotham/Gotham-Light.otf'),
    [FontNames.GothamLightItalic]: require('@ui/fonts/Gotham/Gotham-LightItalic.otf'),
    [FontNames.GothamMedium]: require('@ui/fonts/Gotham/Gotham-Medium.otf'),
    [FontNames.GothamMediumItalic]: require('@ui/fonts/Gotham/Gotham-MediumItalic.otf'),
    [FontNames.GothamThin]: require('@ui/fonts/Gotham/Gotham-Thin.otf'),
    [FontNames.GothamThinItalic]: require('@ui/fonts/Gotham/Gotham-ThinItalic.otf'),
    [FontNames.GothamUltra]: require('@ui/fonts/Gotham/Gotham-Ultra.otf'),
    [FontNames.GothamUltraItalic]: require('@ui/fonts/Gotham/Gotham-UltraItalic.otf'),
    [FontNames.GothamXLight]: require('@ui/fonts/Gotham/Gotham-XLight.otf'),
    [FontNames.GothamXLightItalic]: require('@ui/fonts/Gotham/Gotham-XLightItalic.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setIsAppReadyToStart(true);
      SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded]);
  /*********/
  return {
    isAppReadyToStart,
  };
};

export default useServicesInitializer;
