import styled from 'styled-components'

export const EventContainer = styled.div`
  background-color: ${props => props.color && '#22194D'};
  border-radius: 5px;
  padding: 2px;
  color: white;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const EventTitle = styled.span`
  font-weight: bold;
`