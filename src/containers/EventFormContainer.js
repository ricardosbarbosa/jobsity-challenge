import { connect } from 'react-redux'
import EventForm from '../components/EventForm'
import { deleteEvent, addEvent, updateEvent } from '../actions/events'
import { clearEvent } from '../actions/editing'

const mapStateToProps = ({ editing }) => ({
  initialValues: editing
})

const mapDispatchToProps = {
  onClickDelele: deleteEvent,
  onAddEvent: addEvent,
  onUpdateEvent: updateEvent,
  onCancel: clearEvent
}

export default connect(mapStateToProps,  mapDispatchToProps)(EventForm)