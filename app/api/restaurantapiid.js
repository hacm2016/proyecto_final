import AxiosApi from './axiosApi';
import FetchApi from './fetchApi';

const RestaurantApiId = {

  getRestaurantId: async () => {
    const data = await FetchApi.get('/restaurantss');
    return data;
  },
};


export default RestaurantApiId;
