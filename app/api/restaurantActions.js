import Actions from '../api/actions';
import Api from '../api/restaurantApi';

const getRestaurantsSuccess = (data) => {
  return {
    type: Actions.FETCHING_RESTAURANTS_SUCCESS,
    data,
  };
};

const getRestaurantsFailure = (errors) => {
  return {
    type: Actions.FETCHING_RESTAURANTS_FAILURE,
    errors,
  };
};

const getRestaurants = () => {
  return async (dispatch, getState) => {
    // const products = getState().productReducer;
    const result = await Api.getAllRestaurant;
    if (result.errors) {
      dispatch(getRestaurantsFailure(result.errors));
    } else {
      dispatch(getRestaurantsSuccess(result));
    }
  };
};

export default {
    getRestaurants,
};

