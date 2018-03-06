import {
  ADD_CAR,
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILURE,
  GET_CAR,
  GET_CAR_SUCCESS,
  GET_CAR_FAILURE,
} from './../actionTypes/add-car';

const initialState = {
  car: [],
  error: [],
  editedCar: {},
};

const addCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        carsList: action.response,
      };
    case ADD_CAR_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case GET_CAR:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editedCar: action.response,
      };
    case GET_CAR_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: {
      return state;
    }
  }
};

export default addCarReducer;

