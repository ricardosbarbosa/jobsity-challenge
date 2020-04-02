import { connect } from 'react-redux'
import MyCalendar from "../components/MyCalendar";
import { setEvent } from "../actions/editing";

const mapStateToProps = ({ events }) => ({
  events
})

const mapDispatchToProps = {
  onSelectEvent: setEvent
}

export default connect(mapStateToProps,  mapDispatchToProps)(MyCalendar);