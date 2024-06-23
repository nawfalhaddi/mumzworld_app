// BaseTouchableOpacity.test.tsx
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {Text} from 'react-native';
import BaseTouchableOpacity from '..';

describe('BaseTouchableOpacity Component', () => {
  test('renders children correctly', () => {
    render(
      <BaseTouchableOpacity>
        <Text>Press Me</Text>
      </BaseTouchableOpacity>,
    );

    const buttonText = screen.getByText('Press Me');
    expect(buttonText).toBeTruthy();
  });

  test('calls onPress callback when pressed', () => {
    const onPressMock = jest.fn();
    render(
      <BaseTouchableOpacity onPress={onPressMock} testID="base-touchable">
        <Text>Press Me</Text>
      </BaseTouchableOpacity>,
    );

    const touchableElement = screen.getByTestId('base-touchable');
    fireEvent.press(touchableElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('sets activeOpacity prop correctly', () => {
    render(
      <BaseTouchableOpacity testID="base-touchable">
        <Text>Press Me</Text>
      </BaseTouchableOpacity>,
    );

    const touchableElement = screen.getByTestId('base-touchable');
    expect(touchableElement).toHaveStyle({opacity: 1});
  });
});
