import TypingArea from '../component/Conversation/TypingArea'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch })
export default connect(mapDispatchToProps)(TypingArea)
