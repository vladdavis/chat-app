import React, { Component } from 'react';

import './chat.css';
import Message from './Message';
import ChatForm from './ChatForm';

class Chat extends Component {

  messageContent = React.createRef();

  componentDidMount(){
    this.props.getMessages();
  }

  componentDidUpdate(prevProps){
    // Scroll messages down after the user received new messages
    if(this.props.messages.length !== prevProps.messages.length){
      const messageContent = this.messageContent.current;
      messageContent.scrollTop = messageContent.scrollHeight;
    }
  }

  render(){
    return (
      <div className="chat">
        <div className="chat__wrapper">
          <div ref={this.messageContent} className="chat__content">
            {this.props.messages.map(message => (
              <Message
                username={message.username}
                text={message.text}
                key={message.id}
              />
            ))}
          </div>
        </div>
        <ChatForm
          user={this.props.user}
          sendMessage={this.props.sendMessage}
          error={this.props.messagesError}
        />
      </div>
    )
  }
}
export default Chat;
