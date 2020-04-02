import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions/constants'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  }, {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  },
  {
    id: uuidv4(),
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
    city: "London",
    color: '#22194D'
  }
]

export default function events(state = [], action) {
  switch (action.type) {
    case ADD_EVENT: return [...state, {  ...action.payload, id: uuidv4(), }]
    case UPDATE_EVENT: return state.map(e => e.id === action.payload.id ? action.payload : e)
    case DELETE_EVENT: return state.filter(e => e.id === action.payload)
    case DELETE_ALL_EVENTS: return []
    default: return state;
  }
}
  