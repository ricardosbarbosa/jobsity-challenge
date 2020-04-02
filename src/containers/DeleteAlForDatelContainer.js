import { connect } from 'react-redux'
import DeleteAllEventsForDateButton from '../components/DeleteAllEventsForDateButton'
import { deleteAllEventForDate } from '../actions/events'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  onClickDeleleAllForDate: deleteAllEventForDate,
}

export default connect(mapStateToProps,  mapDispatchToProps)(DeleteAllEventsForDateButton)