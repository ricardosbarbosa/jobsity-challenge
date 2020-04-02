export const SET_EDITING_EVENT = "SET_EDITING_EVENT"
export const CLEAR_EDITING_EVENT = "CLEAR_EDITING_EVENT"

export const setEvent = (payload) => ({ type: SET_EDITING_EVENT, payload })
export const clearEvent = () => ({ type: CLEAR_EDITING_EVENT })