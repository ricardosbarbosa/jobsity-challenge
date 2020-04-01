import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const MyCalendar = ({ events = [] }) => (
  <Calendar
    localizer={localizer}
    defaultView="month"
    defaultDate={new Date()}
    views={{ month: true, day: true }}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: '100vh' }}
  />
)

export default MyCalendar