import styled from 'styled-components'

export const DayView = styled.div`
  overflow-y: scroll;
  border: 1px solid grey;
  background-color: ${props => props.disabled ? 'grey' : ''};
`
export const DayContainer = styled.div`
  padding: 5px;
`
export const DayHeader = styled.div`
  padding-right: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
`
export const DateView = styled.div`
  flex: 1 1;
  min-width: 0;
  padding-right: 5px;
  text-align: right;
`