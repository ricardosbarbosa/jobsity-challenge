import React, { useCallback } from "react";
import { EventContainer, EventTitle } from "./styles";

const Event = ({ event, onSelectEvent }) => {
  const city = event.city ? `: ${event.city}` : ''
  const weatherText = event.weather.text ? `: ${event.weather.text}` : ''
  const weatherIcon = event.weather.icon && <img src={event.weather.icon} height={18} title={event.weather.text} alt={event.weather.text}/>

  const handleOnClick = useCallback(() => { onSelectEvent && onSelectEvent(event)}, [onSelectEvent, event])

  return (
    <EventContainer title={event.title + city + weatherText} color={event.color} onClick={handleOnClick}>
        {weatherIcon}
        <EventTitle>{event.title}</EventTitle>
        {city}
        {weatherText}
    </EventContainer>
  )
}

export default Event