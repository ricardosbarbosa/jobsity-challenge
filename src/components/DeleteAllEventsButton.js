import * as React from 'react'
import { Button } from '@material-ui/core'

const DeleteAllEventsButton = ({ onClickDeleleAll = ()=>{} }) => (
  <div>
    <Button fullWidth variant='contained' color="secondary" margin="normal" onClick={onClickDeleleAll}>
      Delete all events
    </Button>
  </div>
)
export default DeleteAllEventsButton

