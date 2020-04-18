import React from "react";
import moment from 'moment'
import { DateView, DayHeader, DayView, DayContainer } from "./styles";
import Event from "../Event";

const Day = ({ events = [], date, onSelectEvent }) => {

  const _events = events
    .filter(e => moment(e.start).isSame(date, 'day'))
    .sort((a, b) => moment(a).diff(moment(b)))

  return (
    <DayView>
      <DayHeader>
        <DateView>{date.format('DD')}</DateView>
      </DayHeader>
      <DayContainer >
        {_events.map(e => <Event key={e.id} event={e} onSelectEvent={onSelectEvent}/>)}
      </DayContainer>
    </DayView>
  )
}
export default Day