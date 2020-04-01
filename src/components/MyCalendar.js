import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const MyCalendar = ({ events = [] }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 10fr 1fr'
  }}>
    <div />
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
    <div />
  </div>
)

export default MyCalendar