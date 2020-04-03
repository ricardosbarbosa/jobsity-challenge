import { take, put, call } from 'redux-saga/effects'
import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions/constants";
import { addEventSuccess, updateEventSuccess, deleteEventSuccess, } from "../actions/events";
import { clearEvent } from "../actions/editing";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { getWeatherByCityAndDate } from "../api/weatherapi";

function* getWeather(event) {
  let weather = {}
    try {
      const { city, start } = event
      weather = yield call(getWeatherByCityAndDate, city, start);
    }
    catch(error) {
      console.log(error)
    }
    return weather
}

export function* addEventSaga() {
  while (true) {
    const { payload } = yield take(ADD_EVENT)
    let weather = yield getWeather(payload)
    
    const event = {
      ...payload,
      start: moment(payload.start).toDate(),
      end: moment(payload.start).toDate(),
      id: uuidv4(),
      weather
    }
    yield put(addEventSuccess(event))
  }
}

export function* updateEventSaga() {
  while (true) {
    const { payload } = yield take(UPDATE_EVENT)
    let weather = yield getWeather(payload)

    const event = {
      ...payload,
      start: moment(payload.start).toDate(),
      end: moment(payload.start).toDate(),
      weather
    }

    yield put(updateEventSuccess(event))
    yield put(clearEvent())
  }
}

export function* deleteEventSaga() {
  while (true) {
    const { payload } = yield take(DELETE_EVENT)
    yield put(deleteEventSuccess(payload))
    yield put(clearEvent())
  }
}