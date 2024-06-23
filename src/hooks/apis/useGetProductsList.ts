// https://storage.googleapis.com/mumzrn/product-list-lite

import ReactQueryKeys from '@constants/reactQueryKeys';
import {ProductsApiResponse} from '@customTypes/apis/productsApiResponse';
import axiosInstance from '@lib/axios';
import {QueryKey, useQuery, UseQueryOptions} from '@tanstack/react-query';

type OutputError = ErrorConstructor;

export const useGetProductsList = (
  options: Omit<
    UseQueryOptions<
      ProductsApiResponse,
      OutputError,
      ProductsApiResponse,
      QueryKey
    >,
    'queryKey' | 'queryFn'
  > = {},
) => {
  return useQuery<ProductsApiResponse, OutputError>(
    [ReactQueryKeys.ProductDetails],
    () =>
      axiosInstance
        .get<ProductsApiResponse>('product-list-lite')
        .then(response => {
          return response?.data;
        })
        .catch(error => {
          throw new Error(error?.message);
        }),
    {...options},
  );
};
