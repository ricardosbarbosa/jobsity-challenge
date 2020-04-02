import * as React from 'react'
import { Button } from '@material-ui/core'
import { DatePicker} from '@material-ui/pickers'
import moment from 'moment'

const DeleteAllEventsForDateButton = ({ onClickDeleleAllForDate = ()=>{} }) => {
  const [date, setDate] = React.useState()
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10, alignItems: 'center'}}>
      <DatePicker required 
        value={date}
        onChange={(date) => {
          setDate(moment(date))
        }}  
        showTodayButton 
        label="Date" inputVariant="outlined" margin="dense"  InputLabelProps={{ shrink: true }}  />
      <Button color="secondary" variant='contained'  size='medium' onClick={() => onClickDeleleAllForDate(date)}>
        Delete all
      </Button>
      <span style={{textAlign: "center", gridColumn: '1 / span 2'}}>Select a date to delete all events on it</span>
    </div>
  )
}
export default DeleteAllEventsForDateButton

