import {scale} from '@ui/theme/scaling';
import {render, screen} from '@utils/test-utils';
import React from 'react';
import {BaseText} from '../index';
import mumzWorldTheme from '@ui/theme';

describe('Testing BaseText component', () => {
  test('renders without errors', () => {
    render(<BaseText type="BodyMd">base text component</BaseText>);
  });

  test('text has correct styles', () => {
    render(
      <BaseText type="BodyXlBold" color="semanticFgText" testID="text_cmp">
        Test Text
      </BaseText>,
    );
    const textElement = screen.getByTestId('text_cmp');

    expect(textElement).toHaveStyle({
      color: mumzWorldTheme.colors.semanticFgText,
      fontSize: scale(22),
      lineHeight: scale(28),
    });
  });

  test('BaseText has correct text content', () => {
    render(
      <BaseText type="BodyXlBold" color="semanticFgText" testID="text_cmp">
        Test Text
      </BaseText>,
    );
    const textElement = screen.getByText('Test Text');
    expect(textElement).toBeTruthy();
  });
});
