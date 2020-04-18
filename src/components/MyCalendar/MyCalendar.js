import React, { useState } from "react";
import moment from 'moment'
import { Button, ButtonGroup } from '@material-ui/core'
import Day from "../Day";
import { Container, Header, MonthContainer, MonthTitle, DayTitle, DayView, WeekHeader } from "./styles";

const MyCalendar = ({ events = [], onSelectEvent }) => {

  const [month, setMonth] = useState(moment())

  const startOfMonth = month.startOf('month').format('YYYY-MM-DD hh:mm');

  const today = () => setMonth(moment())
  const nextMonth = () => setMonth(moment(month).add(1, 'M'))
  const previousMonth = () => setMonth(moment(month).subtract(1, 'M'))

  return (
    <Container events={events}>
      <Header>
        <ButtonGroup>
          <Button color='secondary' variant='contained' onClick={previousMonth}>Previous</Button>
          <Button color='primary'  variant='contained'  onClick={today}>Today</Button>
          <Button color='secondary'  variant='contained'  onClick={nextMonth}>Next</Button>
        </ButtonGroup>
        <MonthTitle>
          {month.format('MMMM')}
        </MonthTitle>
      </Header>
      <WeekHeader>
        <DayTitle>Sun</DayTitle>
        <DayTitle>Mon</DayTitle>
        <DayTitle>Tue</DayTitle>
        <DayTitle>Wen</DayTitle>
        <DayTitle>Thu</DayTitle>
        <DayTitle>Fri</DayTitle>
        <DayTitle>Sat</DayTitle>
      </WeekHeader>
      <MonthContainer weeks={ 1 + month.endOf('month').weeks() - month.startOf('month').weeks()}>
        {Array(month.startOf('month').day()).fill().map((_, i)=>(<DayView disabled />))}
        {Array(month.daysInMonth()).fill().map((_, i)=> <Day key={i} date={moment(startOfMonth).add(i, 'day')} events={events} onSelectEvent={onSelectEvent} /> )}
        {Array(6 - month.endOf('month').day()).fill().map((_, i)=>(<DayView disabled />))}
      </MonthContainer>
    </Container>
  )
}
export default MyCalendar