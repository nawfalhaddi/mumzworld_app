import {Product} from '@customTypes/apis/productsApiResponse';
import {BaseText} from '@ui/components/base/BaseText';
import BaseTouchableOpacity from '@ui/components/base/BaseTouchableOpacity';
import {scale} from '@ui/theme/scaling';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import AddToCartBtn from './components/AddToCartBtn';
import AddToWhishListBtn from './components/AddToWhishListBtn';
import DiscountLabel from './components/DiscountLabel';
import YallaTag from '@ui/components/YallaTag';
import BaseSpacer from '@ui/components/base/BaseSpacer';
import StarIcon from '@ui/components/icons/StarIcon';
import ProductReviews from './components/ProductReviews';

interface IProductTileProps extends TouchableOpacityProps {
  productInfo: Product;
}

const ProductTile = ({productInfo, ...rest}: IProductTileProps) => {
  const theme = useTheme();
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const productPercentOff = Number(
    productInfo?.price_range?.minimum_price?.discount?.percent_off,
  );
  const currency = productInfo?.price?.regularPrice?.amount?.currency;
  const finalPrice =
    productInfo?.price_range?.minimum_price?.final_price?.value;

  const regularPrice =
    productInfo?.price_range?.minimum_price?.regular_price?.value;
  return (
    <MainContainer {...rest}>
      <ProductImageWrapper>
        <ProductImage
          source={{uri: productInfo?.small_image?.url}}
          resizeMode="contain"
          onLoadStart={() => {
            setImageIsLoading(true);
          }}
          onLoadEnd={() => {
            setImageIsLoading(false);
          }}
        />
        {imageIsLoading ? (
          <LoaderWrapper>
            <ActivityIndicator
              size={'small'}
              color={theme.colors.semanticBgSecondary}
            />
          </LoaderWrapper>
        ) : null}
        <AddToCartCta />
        <AddToWishListCta />
        <DiscountLabelPercentage
          percentageAmount={
            productPercentOff > 3 ? productPercentOff?.toFixed(0) : undefined
          }
        />
      </ProductImageWrapper>
      <BaseText numberOfLines={2} lineBreakMode="tail" type="BodyXxs">
        {productInfo.name}
      </BaseText>
      <ProductReviews />
      {/* Product pricing  */}
      <BaseText type="BodyXxsBold">
        {currency} {finalPrice?.toFixed(2)}{' '}
        {productPercentOff > 3 ? (
          <OriginalPrice type="BodyXxs">
            {regularPrice?.toFixed(2)}
          </OriginalPrice>
        ) : null}
      </BaseText>
      {/* ******* */}
      <BaseSpacer height={scale(4)} />
      <YallaTag />
    </MainContainer>
  );
};

export default ProductTile;

const MainContainer = styled(BaseTouchableOpacity)(
  ({theme: {colors, spacingValues}}) => ({
    backgroundColor: colors.semanticBgWhite,
    height: scale(240),
    flex: 1,
    paddingHorizontal: spacingValues.hMd,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.semanticBgSecondaryLight,
  }),
);

const ProductImage = styled(Image)(({}) => ({
  height: scale(150),
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
}));

const ProductImageWrapper = styled(View)(({}) => ({
  height: scale(150),
  width: '100%',
  position: 'relative',
}));
const AddToCartCta = styled(AddToCartBtn)(({}) => ({
  position: 'absolute',
  bottom: scale(10),
  right: scale(0),
  zIndex: 2,
}));
const AddToWishListCta = styled(AddToWhishListBtn)(({}) => ({
  position: 'absolute',
  top: scale(10),
  right: scale(0),
  zIndex: 2,
}));
const DiscountLabelPercentage = styled(DiscountLabel)(({}) => ({
  position: 'absolute',
  top: scale(10),
  left: scale(0),
  zIndex: 2,
}));

const LoaderWrapper = styled(View)(({theme: {colors}}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: scale(150),
  width: '100%',
  backgroundColor: colors.semanticBgWhite,
  zIndex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));
const OriginalPrice = styled(BaseText)(({theme: {}}) => ({
  textDecoration: 'line-through',
}));
