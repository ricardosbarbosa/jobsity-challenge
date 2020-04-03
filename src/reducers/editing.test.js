import { CLEAR_EDITING_EVENT, SET_EDITING_EVENT, SET_DATE_EVENT } from '../actions/constants'
import { clearEvent, setDateEvent, setEvent } from '../actions/editing'
import eventsReducer from "./editing";

describe('editing reducer', () => {
  it(CLEAR_EDITING_EVENT, () => {
    const state = {id: 1}
    const action = clearEvent()
    const newState = {}
    expect(eventsReducer(state, action)).toEqual(newState);
  })

  it(SET_EDITING_EVENT, () => {
    const state = {}
    const payload = {id: 1, title: 'correct'}
    const action = setEvent(payload)
    const newState = payload
    expect(eventsReducer(state, action)).toEqual(newState);
  })

  it(SET_DATE_EVENT, () => {
    const state = {}
    const payload = new Date('2000-01-02')
    const action = setDateEvent(payload)
    const newState = {start: payload}
    expect(eventsReducer(state, action)).toEqual(newState);
  })

})