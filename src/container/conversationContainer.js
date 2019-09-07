import Conv from '../component/Conversation/Conv'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch })

export default connect(mapDispatchToProps)(Conv)
