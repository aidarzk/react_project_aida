import ConversationList from '../component/Conversation/ConversationList'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch })

export default connect(mapDispatchToProps)(ConversationList)
