import { take, put} from 'redux-saga/effects'

export function* addEventSaga() {
    const { event } = yield take("ADD_EVENT_SAGA")
    yield put({type: "ADD_SAGA", event})
}