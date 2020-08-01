import AxiosApi from './axiosApi';
import FetchApi from './fetchApi';

const RestaurantApi = {
  getAllRestaurant: async () => {
    const data = await FetchApi.get('/restaurants');
    return data;
  },
  getRestaurantId: async (parameters) => {
    const data = await FetchApi.get(`/restaurants/${parameters}`);
    return data;
  },
};


export default RestaurantApi;
