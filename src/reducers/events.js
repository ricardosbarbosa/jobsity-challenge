import { ADD_EVENT_SUCCESS, DELETE_EVENT_SUCCESS, DELETE_ALL_EVENTS, UPDATE_EVENT_SUCCESS, DELETE_EVENT_FOR_DATE } from '../actions/constants'
import moment from 'moment'

export default function events(state = [], action) {
  switch (action.type) {
    case ADD_EVENT_SUCCESS: return [...state, action.payload]
    case UPDATE_EVENT_SUCCESS: return state.map(e => e.id === action.payload.id ? action.payload : e)
    case DELETE_EVENT_SUCCESS: return state.filter(e => e.id !== action.payload)
    case DELETE_ALL_EVENTS: return []
    case DELETE_EVENT_FOR_DATE: return state.filter(e => !moment(action.payload).isSame(e.start, 'day'))
    default: return state;
  }
}

