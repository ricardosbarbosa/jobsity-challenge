import { take, put, call, apply} from 'redux-saga/effects'
import { ADD_EVENT } from "../actions/constants";
import { getWeatherByCityAndDate } from '../api/weatherapi';


export function* getWheatherWhenAddEvent() {
  while (true) {
    const { payload } = yield take(ADD_EVENT)
    const { city, start } = payload
    const wheather = yield call(getWeatherByCityAndDate,city, start);
    
    yield put(setWheather(wheather))
  }
}