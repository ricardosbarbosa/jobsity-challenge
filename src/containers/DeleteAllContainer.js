import { connect } from 'react-redux'
import DeleteAllEventsButton from '../components/DeleteAllEventsButton'
import { deleteAllEvent } from '../actions/events'


const mapStateToProps = () => ({})

const mapDispatchToProps = {
  onClickDeleleAll: deleteAllEvent,
}

export default connect(mapStateToProps,  mapDispatchToProps)(DeleteAllEventsButton)