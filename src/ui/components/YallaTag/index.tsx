import React from 'react';
import {StyleSheet, View} from 'react-native';
import {styled} from 'styled-components/native';
import {BaseText} from '../base/BaseText';
import {scale} from '@ui/theme/scaling';

const YallaTag = () => {
  return (
    <MainContainer>
      <BaseText type="BodyXxsBold" style={styles.tagText}>
        Yalla
      </BaseText>
    </MainContainer>
  );
};

export default YallaTag;

const styles = StyleSheet.create({
  tagText: {
    fontFamily: 'Gotham-BoldItalic',
  },
});
const MainContainer = styled(View)(({theme: {colors, spacingValues}}) => ({
  backgroundColor: colors.yellowTag,
  paddingHorizontal: spacingValues.hXs,
  borderRadius: scale(10),
  width: scale(40),
  alignItems: 'center',
}));
