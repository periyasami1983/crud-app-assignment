import { combineReducers } from 'redux';
import carsListReducer from './car-list.reducer';
import addCarReducer from './add-car.reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  carsListState: carsListReducer,
  addCar: addCarReducer,
  router: routerReducer,
});

export default rootReducer;
