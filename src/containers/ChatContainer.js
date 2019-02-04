import { connect } from 'react-redux';

import Chat from '../components/chat/Chat';
import { getMessages, sendMessage } from "../actions/messages";


const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages.data,
  messagesError: state.messages.error
})

export default connect(mapStateToProps, { getMessages, sendMessage })(Chat);
