import { SET_EDITING_EVENT, CLEAR_EDITING_EVENT} from '../actions/constants'

export default function editing(state = {}, action) {
  switch (action.type) {
    case SET_EDITING_EVENT: return action.payload
    case CLEAR_EDITING_EVENT: return {}
    default: return state
  }
}
  