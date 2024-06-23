import 'styled-components/native';

declare module 'styled-components/native' {
  interface ITextType {
    'font-weight': string | number;
    'font-size': string | number;
    'line-height'?: string | number;
    'letter-spacing'?: string | number;
  }

  export interface DefaultTheme {
    spacingValues: {
      vXxs: string | number;
      vXs: string | number;
      vSm: string | number;
      vMd: string | number;
      vLg: string | number;
      vXl: string | number;
      v2xl: string | number;
      v3xl: string | number;
      hXxs: string | number;
      hXs: string | number;
      hSm: string | number;
      hMd: string | number;
      hLg: string | number;
      hXl: string | number;
      h2xl: string | number;
      h3xl: string | number;
    };
    colors: {
      //here you add your design-system colors
      semanticFgText: string;
      semanticFgTextWeak: string;
      semanticFgTextDisabled: string;
      semanticFgTextInvert: string;
      semanticFgIcon: string;
      semanticFgAccent: string;
      semanticFgLink: string;
      semanticFgAttention: string;
      semanticFgError: string;
      semanticBgMuted: string;
      semanticBgSubtle: string;
      semanticBgWhite: string;
      semanticBgPrimary: string;
      semanticBgPrimaryLight: string;
      semanticBgSecondary: string;
      semanticBgSecondaryLight: string;
      semanticSupportCyan: string;
      semanticSupportCyanLight: string;
      semanticSupportCyanDark: string;
      semanticSupportLime: string;
      semanticSupportLimeLight: string;
      semanticSupportLimeDark: string;
      semanticSupportYellow: string;
      semanticSupportYellowLight: string;
      semanticSupportYellowDark: string;
      feedbackErrorLight: string;
      feedbackError: string;
      feedbackErrorDark: string;
      feedbackSuccessLight: string;
      feedbackSuccess: string;
      feedbackSuccessDark: string;
      feedbackWarningLight: string;
      feedbackWarning: string;
      feedbackWarningDark: string;
      yellowTag: string;
    };
    textType: {
      //here you add your design-system text types
      BodyXlBold: CSSObject;
      BodyXl: CSSObject;
      BodyLg: CSSObject;
      BodyLgBold: CSSObject;
      BodyMd: CSSObject;
      BodyMdBold: CSSObject;
      BodySmBold: CSSObject;
      BodySm: CSSObject;
      BodyXsBold: CSSObject;
      BodyXs: CSSObject;
      BodyXxsBold: CSSObject;
      BodyXxs: CSSObject;
      BodyXxxs: CSSObject;
      BodyXxxsBold: CSSObject;
      HeadingXl: CSSObject;
      HeadingLg: CSSObject;
      HeadingMd: CSSObject;
      HeadingSm: CSSObject;
      HeadingXs: CSSObject;
      ButtonLabelSm: CSSObject;
      ButtonLabelMd: CSSObject;
      default: CSSObject;
    };
  }
}
