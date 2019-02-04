import React, { Component } from 'react';

import ValidationError from '../../helpers/ValidationError';

class LoginForm extends Component {

  username = React.createRef();

  signIn = e => {
    e.preventDefault();
    const username = this.username.current.value;
    this.props.signIn(username);
  }

  render(){
    return (
      <form className="login__form" onSubmit={this.signIn}>
        <div className="login__field">
          <div>Username</div>
          <input type="text" ref={this.username} />
        </div>
        <div className="login__error">
          <ValidationError error={this.props.error} />
        </div>
        <button>Sign in</button>
      </form>
    )
  }
}

export default LoginForm;
