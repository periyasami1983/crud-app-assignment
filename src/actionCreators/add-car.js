import { ADD_CAR, ADD_CAR_SUCCESS, ADD_CAR_FAILURE, GET_CAR, GET_CAR_SUCCESS, GET_CAR_FAILURE, DELETE_CAR } from '../actionTypes/add-car';

export function addCar(payload, id) {
  return {
    type: ADD_CAR,
    payload,
    id,
  };
}
export function addCarSuccess(response) {
  return {
    type: ADD_CAR_SUCCESS,
    response,
  };
}
export function addCarFailure(error) {
  return {
    type: ADD_CAR_FAILURE,
    error,
  };
}

export function getCar(id) {
  return {
    type: GET_CAR,
    id,
  };
}

export function getCarSuccess(response) {
  return {
    type: GET_CAR_SUCCESS,
    response,
  };
}

export function getCarFailure(error) {
  return {
    type: GET_CAR_FAILURE,
    error,
  };
}

