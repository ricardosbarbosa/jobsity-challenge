import React from 'react';
import MyCalendar from './containers/MyCalendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventForm from './components/EventForm';

function App() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '3fr 9fr'
    }}>
      <div style={{ padding: 10}}>
        <EventForm />
      </div>
      
      <MyCalendar />
    </div>
  );
}

export default App;
