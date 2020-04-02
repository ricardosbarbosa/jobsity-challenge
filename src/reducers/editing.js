import { SET_EDITING_EVENT, CLEAR_EDITING_EVENT, SET_DATE_EVENT} from '../actions/constants'

export default function editing(state = {}, action) {
  switch (action.type) {
    case CLEAR_EDITING_EVENT: return {}
    case SET_EDITING_EVENT: return action.payload
    case SET_DATE_EVENT: return { start: action.payload }
    default: return state
  }
}
  