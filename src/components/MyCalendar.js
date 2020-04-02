import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const eventStyleGetter = (event, start, end, isSelected) => {
  var backgroundColor = event.color;
  var style = {
      backgroundColor: backgroundColor,
      borderRadius: '5px',
      color: 'white',
      display: 'block'
  };
  return {
      style: style
  };
}

const MyCalendar = ({ events = [], onSelectEvent = () => {} }) => (
  <Calendar
    localizer={localizer}
    defaultView="month"
    defaultDate={new Date()}
    views={{ month: true, day: true }}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: '100vh' }}
    onSelectSlot={(a,b,c) => console.log(a,b,c)}
    onSelectEvent={onSelectEvent}
    eventPropGetter={eventStyleGetter}
  />
)

export default MyCalendar