import { connect } from 'react-redux'
import EventForm from '../components/EventForm'
import { deleteAllEvent, deleteEvent, addEvent } from '../actions/events'
import { clearEvent } from '../actions/editing'

const mapStateToProps = ({ editing }) => ({
  initialValues: editing
})

const mapDispatchToProps = {
  onClickDeleleAll: deleteAllEvent,
  onClickDelele: deleteEvent,
  onSubmitForm: addEvent,
  onCancel: clearEvent
}

export default connect(mapStateToProps,  mapDispatchToProps)(EventForm)