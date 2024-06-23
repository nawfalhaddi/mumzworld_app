// BaseSpacer.test.tsx
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import BaseSpacer from '..';

describe('BaseSpacer Component', () => {
  test('renders with specified height', () => {
    render(<BaseSpacer height={50} testID="base-spacer" />);
    const spacerElement = screen.getByTestId('base-spacer');

    expect(spacerElement).toHaveStyle({height: 50});
  });

  test('renders with default height if height prop is not provided', () => {
    render(<BaseSpacer testID="base-spacer" />);
    const spacerElement = screen.getByTestId('base-spacer');

    expect(spacerElement).toHaveStyle({height: 0}); // Assuming default height is 0
  });

  test('renders with updated height when height prop changes', () => {
    render(<BaseSpacer height={50} testID="base-spacer" />);
    let spacerElement = screen.getByTestId('base-spacer');

    expect(spacerElement).toHaveStyle({height: 50});

    render(<BaseSpacer height={100} testID="base-spacer" />);
    spacerElement = screen.getByTestId('base-spacer');

    expect(spacerElement).toHaveStyle({height: 100});
  });
});
