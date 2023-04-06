import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: `auth/login`,
        body,
        method: 'POST',
      }),
    }),
    getProducts: builder.query({
      query: _ => ({
        url: `products`,
      }),
    }),
  }),
});

export const {useLoginMutation, useGetProductsQuery} = mainApi;

export default mainApi;
