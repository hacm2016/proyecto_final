import AxiosApi from './axiosApi';

const RestaurantApi = {
  getAllRestaurant: async () => {
    const data = await AxiosApi.get('/restaurants');
    return data;
  },
};

export default RestaurantApi;
