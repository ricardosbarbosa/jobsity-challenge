import { take, put} from 'redux-saga/effects'
import { ADD_EVENT } from "../actions/constants";
import { addEventSuccess } from "../actions/events";
import { v4 as uuidv4 } from 'uuid';

export function* addEventSaga() {
  while (true) {
    const { payload } = yield take(ADD_EVENT)
    // intersept the adding event to include the id
    const event = {
      ...payload,
      id: uuidv4()
    }
    yield put(addEventSuccess(event))
  }
}