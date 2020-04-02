import { connect } from 'react-redux'
import MyCalendar from "../components/MyCalendar";
import { setEvent, setDateEvent } from "../actions/editing";

const mapStateToProps = ({ events }) => ({
  events
})

const mapDispatchToProps = {
  onSelectEvent: setEvent,
  onSelectSlot: setDateEvent
}

export default connect(mapStateToProps,  mapDispatchToProps)(MyCalendar);