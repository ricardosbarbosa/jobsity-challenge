import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { CircularProgress } from "@material-ui/core";

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

function Event({ event }) {
  console.log(event.weather)
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        {event.weather.icon && <img src={event.weather.icon} height={18} title={event.weather.text}/>}
        <strong>{event.title}</strong>
        {event.city && ':  ' + event.city}
        {event.weather.text && ':  ' + event.weather.text}
      </div>
      {/* <CircularProgress size={15} color={"secondary"} /> */}
      
    </div>
  )
}

const MyCalendar = ({ events = [], onSelectEvent = () => {}, onSelectSlot = () => {}}) => (
  <Calendar
    selectable
    popup
    localizer={localizer}
    defaultView="month"
    defaultDate={new Date()}
    views={{ month: true }}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: '100vh' }}
    onSelectSlot={(e) => onSelectSlot(e.start)}
    onSelectEvent={onSelectEvent}
    eventPropGetter={eventStyleGetter}
    components={{
      event: Event,
    }}
  />
)

export default MyCalendar