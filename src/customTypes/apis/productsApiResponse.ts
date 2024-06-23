export interface ProductsApiResponse {
  data: {
    products: {
      items: Product[];
      page_info: {
        total_pages: number;
        __typename: string;
      };
      total_count: number;
      yalla_total_count: number;
      __typename: string;
    };
  };
}

export interface Product {
  brand: number;
  brand_info: BrandInfo;
  categories: CategoryTree[];
  id: number;
  is_yalla: string[];
  low_stock_qty: number | null;
  name: string;
  price: ProductPrices;
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: PriceRange;
  product_label: ProductLabel;
  sku: string;
  small_image: ProductImage;
  stock_status: string;
  type_id: string;
  uid: string;
  url_key: string;
  url_suffix: string;
  __typename: string;
}

export interface BrandInfo {
  title: string;
  __typename: string;
}

export interface CategoryTree {
  name: string;
  __typename: string;
}

export interface ProductPrices {
  regularPrice: Price;
  __typename: string;
}

export interface Price {
  amount: Money;
  __typename: string;
}

export interface Money {
  currency: string;
  value: number;
  __typename: string;
}

export interface PriceRange {
  minimum_price: ProductPrice;
  __typename: string;
}

export interface ProductPrice {
  discount?: ProductDiscount;
  final_price: Money;
  regular_price: Money;
  __typename: string;
}

export interface ProductDiscount {
  amount_off: number;
  percent_off: number;
  __typename: string;
}

export interface ProductLabel {
  active_from: string;
  active_to: string;
  background_color: string;
  label_id: number | null;
  label_text: string;
  name: string;
  text_color: string;
  __typename: string;
}

export interface ProductImage {
  url: string;
  __typename: string;
}
