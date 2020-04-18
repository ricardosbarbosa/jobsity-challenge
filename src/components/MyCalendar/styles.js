import styled from 'styled-components'

export const Container = styled.div`
  /* display: grid; */
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;
export const MonthContainer = styled.div`
  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: ${props => `repeat(${props.weeks}, 1fr)`};
`;
export const Header = styled.div`
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WeekHeader = styled.div`
  height: 20px;
  border: 1px solid #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const MonthTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`
export const DayTitle = styled.div`
  width: 40px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`
export const DayView = styled.div`
  border: 1px solid grey;
  background-color: ${props => props.disabled ? 'grey' : ''};
`