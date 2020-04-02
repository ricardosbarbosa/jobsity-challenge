import React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
import MyCalendarContainer from './containers/MyCalendarContainer';
import EventFormContainer from './containers/EventFormContainer';
import DeleteAllContainer from './containers/DeleteAllContainer';
import DeleteAlForDatelContainer from './containers/DeleteAlForDatelContainer';

function App() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '3fr 9fr'
    }}>
      <div style={{ padding: 10}}>
        <EventFormContainer />
        <hr />
        <DeleteAlForDatelContainer />
        <hr />
        <DeleteAllContainer />
      </div>
      
      <MyCalendarContainer />
    </div>
  );
}

export default App;
