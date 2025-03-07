
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shoppingApi = createApi({
  reducerPath: 'shoppingApi', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.frontendeval.com', 
  }),
  endpoints: (builder) => ({
    
    getFoodData: builder.query<string[], string>({ 
      query: (search: string) => `fake/food/${search}`, 
    }),
  }),
});

export const { useGetFoodDataQuery } = shoppingApi;
