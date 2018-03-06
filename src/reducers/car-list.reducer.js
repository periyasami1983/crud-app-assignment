import {
  GET_CARS,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
} from './../actionTypes/cars-list';

const initialState = {
  isLoading: false,
  carsList: [],
  error: [],
};

const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        carsList: action.cars,
      };
    case GET_CARS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: {
      return state;
    }
  }
};

export default productsListReducer;
