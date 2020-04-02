export const ADD_EVENT = "ADD_EVENT"
export const UPDATE_EVENT = "UPDATE_EVENT"
export const DELETE_EVENT = "DELETE_EVENT"
export const DELETE_ALL_EVENTS = "DELETE_ALL_EVENTS"

export const addEvent = (payload) => ({ type: ADD_EVENT, payload })
export const updateEvent = (payload) => ({ type: UPDATE_EVENT, payload })
export const deleteEvent = (payload) => ({ type: DELETE_EVENT, payload })
export const deleteAllEvent = () => ({ type: DELETE_ALL_EVENTS })