import { take, put} from 'redux-saga/effects'
import { UPDATE_EVENT } from "../actions/constants";
import { updateEventSuccess } from "../actions/events";
import { clearEvent } from "../actions/editing";

export function* updateEventSaga() {
  while (true) {
    const { payload } = yield take(UPDATE_EVENT)
    // intersept the UPDATING event to CLEAR the editing state
    yield put(updateEventSuccess(payload))
    yield put(clearEvent())
  }
}