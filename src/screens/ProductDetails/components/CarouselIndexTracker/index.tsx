import {scale} from '@ui/theme/scaling';
import React from 'react';
import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ICarouselIndexTrackerProps extends ViewProps {
  activeIndex: number;
  itemsCount?: number;
}

const CarouselIndexTracker = ({
  activeIndex,
  itemsCount,
  ...rest
}: ICarouselIndexTrackerProps) => {
  if (!itemsCount) {
    return null;
  }
  return (
    <MainContainer {...rest}>
      {[...new Array(itemsCount).keys()].map((_, index) => (
        <TrackerItem key={index.toString()} isActive={activeIndex === index} />
      ))}
    </MainContainer>
  );
};

export default CarouselIndexTracker;

const MainContainer = styled(View)(({theme: {spacingValues}}) => ({
  flex: 1,
  backgroundColor: 'white',
  flexDirection: 'row',
  width: '100%',
  gap: scale(2),
  paddingHorizontal: spacingValues.hMd,
}));

const TrackerItem = styled(View)<{isActive: boolean}>(
  ({theme: {colors}, isActive}) => ({
    height: scale(2),
    flex: 1,
    borderRadius: scale(10),
    backgroundColor: isActive
      ? colors.semanticBgSecondary
      : colors.semanticBgMuted,
  }),
);
