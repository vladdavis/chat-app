import React, { Component } from 'react';

import ValidationError from '../../helpers/ValidationError';

class ChatForm extends Component {

  message = React.createRef();

  sendMessage = e => {
    e.preventDefault();
    const userId = this.props.user.userId;
    const message = this.message.current.value;

    const isSended = this.props.sendMessage({
      userId,
      text: message
    });

    if(isSended) this.message.current.value = '';
  }

  render(){
    return (
      <div>
        <form className="chat__form" onSubmit={this.sendMessage}>
          <input type="text" ref={this.message} placeholder="Message" />
          <button>Send</button>
        </form>
        <ValidationError error={this.props.error} />
      </div>
    )
  }
}
export default ChatForm;
