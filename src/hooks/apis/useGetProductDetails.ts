import ReactQueryKeys from '@constants/reactQueryKeys';
import {ProductDetailsApiResponse} from '@customTypes/apis/productDetailsApiResponse';
import axiosInstance from '@lib/axios';
import {QueryKey, useQuery, UseQueryOptions} from '@tanstack/react-query';

type OutputError = ErrorConstructor;

export const useGetProductDetails = (
  options: Omit<
    UseQueryOptions<
      ProductDetailsApiResponse,
      OutputError,
      ProductDetailsApiResponse,
      QueryKey
    >,
    'queryKey' | 'queryFn'
  > = {},
) => {
  return useQuery<ProductDetailsApiResponse, OutputError>(
    [ReactQueryKeys.ProductsList],
    () =>
      axiosInstance
        .get<ProductDetailsApiResponse>('product')
        .then(response => {
          return response?.data;
        })
        .catch(error => {
          throw new Error(error?.message);
        }),
    {...options},
  );
};
