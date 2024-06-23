import {BaseText} from '@ui/components/base/BaseText';
import StarIcon from '@ui/components/icons/StarIcon';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const getRandomRating = () => {
  // Generate a random rating number between 1 and 5
  let randomNum = Math.random() * (5.0 - 1.0) + 1.0;
  // Round the number to one decimal place
  return Math.round(randomNum * 10) / 10;
};

const getRandomReviewsNumber = () => {
  // Generate random reviews number between 10 and 599
  return Math.floor(Math.random() * (600 - 10)) + 10;
};

const getNumberOfFilledStars = (numberOfStars: number) => {
  let decimalPart = numberOfStars % 1;
  if (decimalPart >= 0.5) {
    return Math.ceil(numberOfStars);
  } else {
    return Math.floor(numberOfStars);
  }
};

const ProductReviews = () => {
  const reviewsRating = getRandomRating();
  const numberOfFilledStars = getNumberOfFilledStars(reviewsRating);
  return (
    <MainContainer>
      <StarsContainer>
        {[...new Array(5).keys()].map((_, index) => (
          <StarIcon
            key={index.toString()}
            height={10}
            width={10}
            fill={Number(index + 1) <= numberOfFilledStars ? '#f9b42c' : 'none'}
          />
        ))}
      </StarsContainer>
      <BaseText type="BodyXxxs">
        {' '}
        {reviewsRating} ({getRandomReviewsNumber()})
      </BaseText>
    </MainContainer>
  );
};

export default ProductReviews;

const MainContainer = styled(View)(({}) => ({
  flexDirection: 'row',
  alignItems: 'center',
}));
const StarsContainer = styled(View)(({}) => ({
  flexDirection: 'row',
}));
