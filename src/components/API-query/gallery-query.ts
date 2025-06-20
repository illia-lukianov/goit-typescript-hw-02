import axios, { AxiosResponse } from 'axios';
import { UnsplashResponse } from './gallery-query.types';

export default async function galleryQuery(
  query: string,
  page: number,
): Promise<UnsplashResponse> {
  const responce = await axios.get<UnsplashResponse>(
    'https://api.unsplash.com/search/photos',
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: 'Client-ID yEI0mmPOQ40yIt2J-DfNzDpJ1elh5mQs4_V8-PTqK0o',
      },
    },
  );
  return responce.data;
}
