import {scale} from './scaling';
import {DefaultTheme} from 'styled-components/native';

//Make sure whenever you update your theme
//Update also the typing in src/types/styled.d.ts

export const mumzWorldTheme: DefaultTheme = {
  spacingValues: {
    vXxs: scale(2) + 'px',
    vXs: scale(4) + 'px',
    vSm: scale(8) + 'px',
    vMd: scale(12) + 'px',
    vLg: scale(16) + 'px',
    vXl: scale(24) + 'px',
    v2xl: scale(32) + 'px',
    v3xl: scale(64) + 'px',
    hXxs: scale(2) + 'px',
    hXs: scale(4) + 'px',
    hSm: scale(8) + 'px',
    hMd: scale(12) + 'px',
    hLg: scale(16) + 'px',
    hXl: scale(24) + 'px',
    h2xl: scale(32) + 'px',
    h3xl: scale(64) + 'px',
  },
  colors: {
    //here you add your design-system colors
    semanticFgText: '#282828',
    semanticFgTextWeak: '#555555',
    semanticFgTextDisabled: '#828282',
    semanticFgTextInvert: '#ffffff',
    semanticFgIcon: '#0070be',
    semanticFgAccent: '#c30045',
    semanticFgLink: '#0583F2',
    semanticFgAttention: '#c88a04',
    semanticFgError: '#f67416',
    semanticBgMuted: '#dce1e5',
    semanticBgSubtle: '#f4f5f6',
    semanticBgWhite: '#ffffff',
    semanticBgPrimary: '#0070be',
    semanticBgPrimaryLight: '#dcebfe',
    semanticBgSecondary: '#c30045',
    semanticBgSecondaryLight: '#ffe5e7',
    semanticSupportCyan: '#09b6d6',
    semanticSupportCyanLight: '#cdfafe',
    semanticSupportCyanDark: '#165f75',
    semanticSupportLime: '#a1e632',
    semanticSupportLimeLight: '#ecfcca',
    semanticSupportLimeDark: '#406411',
    semanticSupportYellow: '#facd14',
    semanticSupportYellowLight: '#fff9c3',
    semanticSupportYellowDark: '#864e0e',
    feedbackErrorLight: '#ffebd4',
    feedbackError: '#fdac51',
    feedbackErrorDark: '#663d0e',
    feedbackSuccessLight: '#defce9',
    feedbackSuccess: '#19c157',
    feedbackSuccessDark: '#1d713c',
    feedbackWarningLight: '#fff9c3',
    feedbackWarning: '#e7b00b',
    feedbackWarningDark: '#864e0e',
    yellowTag: '#f8e851',
  },

  textType: {
    //here you add your design-system text types
    BodyXlBold: {
      fontWeight: 700,
      fontSize: scale(22) + 'px',
      lineHeight: scale(28) + 'px',
    },
    BodyXl: {
      fontWeight: 400,
      fontSize: scale(22) + 'px',
      lineHeight: scale(31) + 'px',
    },
    BodyLg: {
      fontWeight: 400,
      fontSize: scale(16) + 'px',
      lineHeight: scale(24) + 'px',
    },
    BodyLgBold: {
      fontWeight: 700,
      fontSize: scale(16) + 'px',
      lineHeight: scale(24) + 'px',
    },
    BodyMd: {
      fontWeight: 400,
      fontSize: scale(16) + 'px',
      lineHeight: scale(22) + 'px',
    },
    BodyMdBold: {
      fontWeight: 700,
      fontSize: scale(16) + 'px',
      lineHeight: scale(22) + 'px',
    },
    BodySm: {
      fontWeight: 400,
      fontSize: scale(14) + 'px',
      lineHeight: scale(25) + 'px',
    },
    BodySmBold: {
      fontWeight: 700,
      fontSize: scale(14) + 'px',
      lineHeight: scale(25) + 'px',
    },
    BodyXs: {
      fontWeight: 400,
      fontSize: scale(12) + 'px',
      lineHeight: scale(18) + 'px',
    },
    BodyXsBold: {
      fontWeight: 700,
      fontSize: scale(12) + 'px',
      lineHeight: scale(18) + 'px',
    },
    BodyXxsBold: {
      fontWeight: 700,
      fontSize: scale(10) + 'px',
      lineHeight: scale(15) + 'px',
    },
    BodyXxs: {
      fontWeight: 400,
      fontSize: scale(10) + 'px',
      lineHeight: scale(15) + 'px',
    },
    BodyXxxs: {
      fontWeight: 400,
      fontSize: scale(8) + 'px',
      lineHeight: scale(12) + 'px',
    },
    BodyXxxsBold: {
      fontWeight: 700,
      fontSize: scale(8) + 'px',
      lineHeight: scale(12) + 'px',
    },
    HeadingXl: {
      fontWeight: 700,
      fontSize: scale(18) + 'px',
      lineHeight: scale(23) + 'px',
    },
    HeadingLg: {
      fontWeight: 700,
      fontSize: scale(16) + 'px',
    },
    HeadingMd: {
      fontWeight: 700,
      fontSize: scale(30) + 'px',
      lineHeight: scale(39) + 'px',
    },
    HeadingSm: {
      fontWeight: 700,
      fontSize: scale(22) + 'px',
      lineHeight: scale(29) + 'px',
    },
    HeadingXs: {
      fontWeight: 700,
      fontSize: scale(18) + 'px',
    },
    ButtonLabelSm: {
      fontWeight: 700,
      fontSize: scale(12) + 'px',
      lineHeight: scale(18) + 'px',
    },
    ButtonLabelMd: {
      fontWeight: 700,
      fontSize: scale(14) + 'px',
      lineHeight: scale(19) + 'px',
    },
    default: {
      fontWeight: 400,
      fontSize: scale(14) + 'px',
      lineHeight: scale(25) + 'px',
    },
  },
};

export default mumzWorldTheme;
