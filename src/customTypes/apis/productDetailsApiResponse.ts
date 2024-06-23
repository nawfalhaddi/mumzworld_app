export interface ProductDetailsApiResponse {
  data: {
    product: ProductDetails[];
  };
}

export interface ProductDetails {
  language: string;
  redirect_code: number;
  relative_url: string;
  type: string;
  amrma_default_resolution_period: number;
  brand: number;
  brand_info: BrandInfo;
  categories: Category[];
  cautions: string;
  cross_border_product: CrossBorderProduct;
  description: ComplexTextValue;
  dimensions: string;
  features: string;
  id: number;
  is_yalla: any[];
  media_gallery_entries: MediaGalleryEntry[];
  meta_description: string;
  meta_title: string;
  name: string;
  pkgdimensions: string;
  price: ProductPrices;
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: PriceRange;
  product_label: ProductLabel;
  rating_summary: number;
  recom_age: string;
  review_count: number;
  reviews: ProductReviews;
  shipping_weight: string | null;
  sku: string;
  small_image: ProductImage;
  stock_status: string;
  uid: string;
  url_key: string;
  weight: number;
  __typename: string;
  options: any | null;
}

interface BrandInfo {
  img_src: string;
  title: string;
  url: string;
  __typename: string;
}

interface Category {
  breadcrumbs: Breadcrumb[] | null;
  level: number;
  id: number;
  name: string;
  url_path: string;
  url_key: string;
  __typename: string;
}

interface Breadcrumb {
  category_id: number;
  category_name: string;
  category_url_key: string;
  category_url_path: string;
  __typename: string;
}

interface CrossBorderProduct {
  is_allowed: boolean;
  disallow_countries: string;
  __typename: string;
}

interface ComplexTextValue {
  html: string;
  __typename: string;
}

interface MediaGalleryEntry {
  disabled: boolean;
  file: string;
  id: number;
  label: string | null;
  position: number;
  __typename: string;
}

interface ProductPrices {
  regularPrice: {
    amount: Money;
  };
  __typename: string;
}

interface PriceRange {
  minimum_price: ProductPrice;
  __typename: string;
}

interface ProductPrice {
  discount?: ProductDiscount;
  final_price: Money;
  regular_price: Money;
  __typename: string;
}

interface ProductDiscount {
  amount_off: number;
  percent_off: number;
  __typename: string;
}

interface Money {
  currency: string;
  value: number;
  __typename: string;
}

interface ProductLabel {
  active_from: string;
  active_to: string;
  background_color: string;
  label_id: string | null;
  label_text: string;
  name: string;
  text_color: string;
  __typename: string;
}

interface ProductReviews {
  items: any[];
  page_info: SearchResultPageInfo;
  __typename: string;
}

interface SearchResultPageInfo {
  page_size: number;
  total_pages: number;
  __typename: string;
}

interface ProductImage {
  url: string;
  __typename: string;
}
