import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const MyCalendar = props => (
    <div style={{
        'display': "grid",
        'grid-template-columns': '1fr 10fr 1fr'
    }}>
        <div />
        <Calendar
            localizer={localizer}
            defaultView="month"
            defaultDate={new Date()}
            views={{ month: true }}
            events={[
                {
                  start: moment().toDate(),
                  end: moment()
                    .add(1, "days")
                    .toDate(),
                  title: "Some title"
                }
              ]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh' }}
            
        />
        <div />
  </div>
)

export default MyCalendar