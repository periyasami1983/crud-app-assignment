import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_CARS, DELETE_CAR } from '../actionTypes/cars-list';
import { ADD_CAR, GET_CAR } from '../actionTypes/add-car';
import { getCarsListSuccess, getCarsListFailure } from './../actionCreators/cars-list';
import { addCarSuccess, addCarFailure, getCarSuccess, getCarFailure, deleteCar } from './../actionCreators/add-car';
import { push } from 'react-router-redux';
import history from '../history';

const url = 'http://localhost:4000/cars';

function* getCars() {
  try {
    const carsListData = yield fetch(url).then(r => r.json());
    yield put(getCarsListSuccess(carsListData));
  } catch (error) {
    yield put(getCarsListFailure(error));
  }
}

function* getCar(param) {
  const { id } = param;
  try {
    const carsListData = yield fetch(`${url}/${id}`).then(r => r.json());
    yield put(getCarSuccess(carsListData));
  } catch (error) {
    yield put(getCarFailure(error));
  }
}

function* deleteCarSaga(param) {
  const { id } = param;
  try {
    const carsListData = yield fetch(`${url}/${id}`, { method: 'DELETE' }).then(r => r.json());
    yield call(getCars);
  } catch (error) {
    yield put(getCarFailure(error));
  }
}


/* send POST request to add New car data */

function* addNewCar(param) {
  const { payload, id } = param;
  let urlPostCar;
  if (!id) {
    urlPostCar = '';
  } else {
    urlPostCar = `/${id}`;
  }
  try {
    const response = yield fetch(url + urlPostCar, {
      method: (!id) ? 'POST' : 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.carName,
        model: payload.carModel,
        year: payload.carModelYear,
      }),
    });
    yield put(addCarSuccess(response));
    yield call(history.push, '/');
  } catch (error) {
    yield put(addCarFailure(error));
  }
}

export default function* rootSaga() {
  yield [
    takeEvery(GET_CARS, getCars),
    takeEvery(ADD_CAR, addNewCar),
    takeEvery(GET_CAR, getCar),
    takeEvery(DELETE_CAR, deleteCarSaga),
  ];
}
