import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/customTypes/navigation';
import {BaseText} from '@ui/components/base/BaseText';
import React from 'react';
import {ScrollView} from 'react-native';
import {styled} from 'styled-components/native';

export interface WelcomeViewProps
  extends NativeStackScreenProps<
    RootStackParamList,
    RouteNames.WelcomeScreen
  > {}

export default function WelcomeView({}: WelcomeViewProps) {
  return (
    <MainContainer>
      <BaseText>
        Hello, my name is <BaseText type="BodySmBold">Nawfal Haddi</BaseText>{' '}
        and I am a software engineer passionate about developing mobile
        applications.
        {'\n'}
      </BaseText>
      <BaseText>
        This mobile app is a proof of concept, showcasing potential UX
        enhancements for the MumzWorld mobile application.{'\n'}
      </BaseText>
      <BaseText>
        In order to change language please Go to Settings {'->'} Press on Change
        language text
        {'\n'}
      </BaseText>
      <BaseText>
        Feel free to test it. If you have any questions or would like to discuss
        these suggestions in more detail, I would be delighted to have a call
        with you. {'\n'}
      </BaseText>

      <UnderlineText>Here are my contact details:</UnderlineText>
      <BaseText>
        <BaseText type="BodySmBold">Email</BaseText>: nawfalhaddi@gmail.com
      </BaseText>
      <BaseText>
        <BaseText type="BodySmBold">Linkedin</BaseText>: /in/nawfalhaddi
      </BaseText>
      <BaseText>
        <BaseText type="BodySmBold">Mobile</BaseText>: +971544673454
      </BaseText>
    </MainContainer>
  );
}
const MainContainer = styled(ScrollView)(({theme: {spacingValues}}) => ({
  flex: 1,
  backgroundColor: 'white',
  paddingVertical: spacingValues.vLg,
  paddingHorizontal: spacingValues.hLg,
}));
const UnderlineText = styled(BaseText)(({theme: {}}) => ({
  textDecoration: 'underline',
}));
