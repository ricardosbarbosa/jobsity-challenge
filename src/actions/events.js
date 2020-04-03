export const ADD_EVENT = "ADD_EVENT"
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS"
export const UPDATE_EVENT = "UPDATE_EVENT"
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS"
export const DELETE_EVENT = "DELETE_EVENT"
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"
export const DELETE_ALL_EVENTS = "DELETE_ALL_EVENTS"
export const DELETE_EVENT_FOR_DATE = "DELETE_EVENT_FOR_DATE"

export const addEvent = (payload) => ({ type: ADD_EVENT, payload })
export const addEventSuccess = (payload) => ({ type: ADD_EVENT_SUCCESS, payload })
export const updateEvent = (payload) => ({ type: UPDATE_EVENT, payload })
export const updateEventSuccess = (payload) => ({ type: UPDATE_EVENT_SUCCESS, payload })
export const deleteEvent = (payload) => ({ type: DELETE_EVENT, payload })
export const deleteEventSuccess = (payload) => ({ type: DELETE_EVENT_SUCCESS, payload })
export const deleteAllEvent = () => ({ type: DELETE_ALL_EVENTS })
export const deleteAllEventForDate = (payload) => ({ type: DELETE_EVENT_FOR_DATE, payload})