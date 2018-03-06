import { GET_CARS, GET_CARS_SUCCESS, GET_CARS_FAILURE, DELETE_CAR } from '../actionTypes/cars-list';

export function getCarList() {
  return {
    type: GET_CARS,
  };
}

export function getCarsListSuccess(cars) {
  return {
    type: GET_CARS_SUCCESS,
    cars,
  };
}

export function getCarsListFailure(error) {
  return {
    type: GET_CARS_FAILURE,
    error,
  };
}

export function deleteCar(id) {
  return {
    type: DELETE_CAR,
    id,
  };
}
