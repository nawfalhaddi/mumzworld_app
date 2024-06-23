import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import {BaseText} from '@ui/components/base/BaseText';
import {scale} from '@ui/theme/scaling';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

export interface WelcomeViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.WelcomeScreen
  > {}

export default function WelcomeView({}: WelcomeViewProps) {
  const {t} = useTranslation();

  return (
    <MainContainer contentContainerStyle={styles.contentContainer}>
      <BaseText>
        {t('txt_hello_my_name_is')}
        <BaseText type="BodySmBold">{t('txt_nawfal_haddi')}</BaseText>{' '}
        {t('txt_and_i_am_a_software_engineer')}
        {'\n'}
      </BaseText>
      <BaseText>
        {t('txt_this_mobile_app_is_poc')}
        {'\n'}
      </BaseText>
      <BaseText>
        {t('txt_in_order_to_change_language')}
        {'\n'}
      </BaseText>
      <BaseText>
        {t('txt_feel_free_to_test_it')}
        {'\n'}
      </BaseText>

      <UnderlineText>{t('txt_here_are_my_contact')}</UnderlineText>
      <BaseText>
        <BaseText type="BodySmBold">{t('txt_email')}</BaseText>:
        nawfalhaddi@gmail.com
      </BaseText>
      <BaseText>
        <BaseText type="BodySmBold">{t('txt_linkedin')}</BaseText>:
        /in/nawfalhaddi
      </BaseText>
      <BaseText>
        <BaseText type="BodySmBold">{t('txt_mobile')}</BaseText>: +971544673454
      </BaseText>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(100),
  },
});
const MainContainer = styled(ScrollView)(({theme: {spacingValues}}) => ({
  flex: 1,
  backgroundColor: 'white',
  paddingTop: spacingValues.vLg,
}));
const UnderlineText = styled(BaseText)(({theme: {}}) => ({
  textDecoration: 'underline',
}));
