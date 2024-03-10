import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    // Получаем данные, по умолчанию лимит 10 постов
    getPosts: builder.query({
      query: (limit: number = 10) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      }),
    }),
    // Получаем 1 пост по id
    getSinglePost: builder.query({
      query: (postId) => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostsQuery } = api;