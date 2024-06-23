import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import {BaseText} from '@ui/components/base/BaseText';
import * as Updates from 'expo-updates';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, View} from 'react-native';
import {styled} from 'styled-components/native';

export interface SettingsViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.SettingsScreen
  > {}

export default function SettingsView({}: SettingsViewProps) {
  const {t, i18n} = useTranslation();
  return (
    <MainContainer>
      <RowContainer>
        <CenteredText
          onPress={() => {
            i18n
              .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
              .then(async () => {
                let shouldBeRTL = i18n.dir() === 'rtl';

                if (shouldBeRTL !== I18nManager.isRTL) {
                  await I18nManager.allowRTL(shouldBeRTL);
                  await I18nManager.forceRTL(shouldBeRTL);
                  Updates.reloadAsync();
                }
              });
          }}>
          {t('txt_switch_language_to')}{' '}
          {i18n.language === 'en' ? t('txt_arabic') : t('txt_english')}
        </CenteredText>
      </RowContainer>
    </MainContainer>
  );
}
const MainContainer = styled(View)(({theme: {spacingValues}}) => ({
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  paddingVertical: spacingValues.vLg,
  paddingHorizontal: spacingValues.hMd,
}));
const RowContainer = styled(View)(({}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));
const CenteredText = styled(BaseText)(({}) => ({
  textAlign: 'center',
  textDecoration: 'underline',
}));
