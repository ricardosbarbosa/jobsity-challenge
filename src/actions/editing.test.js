import { clearEvent, setEvent, setDateEvent, CLEAR_EDITING_EVENT, SET_DATE_EVENT, SET_EDITING_EVENT } from './editing'

describe('editing action creator', () => {
  	it('clearEvent', () => {
      const action = {type: CLEAR_EDITING_EVENT}
      expect(clearEvent()).toEqual(action);
    }) 

  	it('setEvent', () => {
      const payload = { id: 1 }
      const action = {type: SET_EDITING_EVENT, payload}
      expect(setEvent(payload)).toEqual(action);
    }) 

  	it('setDateEvent', () => {
      const payload = new Date()
      const action = {type: SET_DATE_EVENT, payload}
      expect(setDateEvent(payload)).toEqual(action);
    }) 

})