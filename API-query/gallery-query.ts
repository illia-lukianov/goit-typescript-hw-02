import axios from 'axios';

export default async function galleryQuery(query: string, page: number) {
  const responce = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: 'Client-ID yEI0mmPOQ40yIt2J-DfNzDpJ1elh5mQs4_V8-PTqK0o',
    },
  });
  return responce;
}
