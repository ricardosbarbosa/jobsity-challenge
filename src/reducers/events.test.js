import { ADD_EVENT_SUCCESS, DELETE_EVENT_SUCCESS, DELETE_ALL_EVENTS, UPDATE_EVENT_SUCCESS, DELETE_EVENT_FOR_DATE } from '../actions/constants'
import { addEventSuccess, deleteAllEvent, deleteEvent, deleteAllEventForDate, updateEventSuccess, deleteEventSuccess} from '../actions/events'
import eventsReducer from "./events";

describe('events reducer', () => {
  it(ADD_EVENT_SUCCESS, () => {
    const state = []
    const payload = {}
    const action = addEventSuccess(payload)
    const newState = [payload]
    expect(eventsReducer(state, action)).toEqual(newState);
  })

  it(UPDATE_EVENT_SUCCESS, () => {
    const state = [{}, { id: 1, title: 'wrong'}, {}, {}]
    const payload = {id: 1, title: 'correct'}
    const action = updateEventSuccess(payload)
    const newState = [{}, payload, {}, {}]
    expect(eventsReducer(state, action)).toEqual(newState);
  })

  it(DELETE_EVENT_SUCCESS, () => {
    const state = [{id: 0}, {id: 1, title: 'wrong'}, {id: 2}]
    const payload = 1
    const action = deleteEventSuccess(payload)
    const newState = [{id: 0}, {id: 2}]
    expect(eventsReducer(state, action)).toEqual(newState);
  })

  it(DELETE_ALL_EVENTS, () => {
    const state = [{},{},{}]
    const action = deleteAllEvent()
    const newState = []
    expect(eventsReducer(state, action)).toEqual(newState);
  })

  it(DELETE_EVENT_FOR_DATE, () => {
    const state = []
    const payload = {}
    const action = deleteAllEventForDate(payload)
    const newState = []
    expect(eventsReducer(state, action)).toEqual(newState);
  })

})