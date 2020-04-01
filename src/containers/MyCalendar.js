import { connect } from 'react-redux'
import MyCalendar from "../components/MyCalendar";

const mapStateToProps = ({ events }) => ({
  events
})

const mapDispatchToProps = {}

export default connect(mapStateToProps,  mapDispatchToProps)(MyCalendar);