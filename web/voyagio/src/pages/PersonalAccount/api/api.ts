import axios from 'axios';

export interface FavouriteDTO {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
  address: {
    lat: number;
    lon: number;
    city: {
      id: string;
      name: string;
    };
    value: string;
  };
  image_url: string;
  rating: number;
}

export interface CollectionDTO {
  id: string;
  name: string;
  image_url: string;
}

type FavouritesDTO = FavouriteDTO[];
type CollectionsDTO = CollectionDTO[];

export const getFavourites = async (): Promise<FavouritesDTO> => {
  const response = await axios.get<FavouritesDTO>(
    `${import.meta.env.VITE_API_URL}/v1/collections/favourites`,
    { withCredentials: true }
  );
  return response.data;
};

export const getUserCollections = async (): Promise<CollectionsDTO> => {
  const response = await axios.get<CollectionsDTO>(
    `${import.meta.env.VITE_API_URL}/v1/collections`,
    { withCredentials: true }
  );
  return response.data;
};
