import { 
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCESS,
  DELETE_EVENT,
  DELETE_EVENT_SUCCESS,
  DELETE_ALL_EVENTS,
  DELETE_EVENT_FOR_DATE,
  addEvent,
  addEventSuccess,
  updateEvent,
  updateEventSuccess,
  deleteEvent,
  deleteEventSuccess,
  deleteAllEvent,
  deleteAllEventForDate
} from './events'

describe('editing action creator', () => {
  
  	it('addEvent', () => {
      const payload = { id: 1 }
      const action = { type: ADD_EVENT, payload }
      expect(addEvent(payload)).toEqual(action)
    })
    
  	it('addEventSuccess', () => {
      const payload = { id: 1 }
      const action = { type: ADD_EVENT_SUCCESS, payload }
      expect(addEventSuccess(payload)).toEqual(action)
    })
    
  	it('updateEvent', () => {
      const payload = { id: 1 }
      const action = { type: UPDATE_EVENT, payload }
      expect(updateEvent(payload)).toEqual(action)
    })
    
  	it('updateEventSuccess', () => {
      const payload = { id: 1 }
      const action = { type: UPDATE_EVENT_SUCCESS, payload }
      expect(updateEventSuccess(payload)).toEqual(action)
    })
    
  	it('deleteEvent', () => {
      const payload = 1
      const action = { type: DELETE_EVENT, payload }
      expect(deleteEvent(payload)).toEqual(action)
    })

    it('deleteEventSuccess', () => {
      const payload = 1
      const action = { type: DELETE_EVENT_SUCCESS, payload }
      expect(deleteEventSuccess(payload)).toEqual(action)
    })
    
  	it('deleteAllEvent', () => {
      const action = { type: DELETE_ALL_EVENTS }
      expect(deleteAllEvent()).toEqual(action)
    })
    
  	it('deleteAllEventForDate', () => {
      const payload = new Date()
      const action = { type: DELETE_EVENT_FOR_DATE, payload }
      expect(deleteAllEventForDate(payload)).toEqual(action)
    })

})