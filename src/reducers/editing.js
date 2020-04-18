import { SET_EDITING_EVENT, CLEAR_EDITING_EVENT } from '../actions/constants'

export default function editing(state = {}, action) {
  switch (action.type) {
    case CLEAR_EDITING_EVENT: return {}
    case SET_EDITING_EVENT: return action.payload
    default: return state
  }
}
  