import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';
import LoginForm from './LoginForm';

class Login extends Component {
  render(){
    const { user, signIn } = this.props;
    
    return (
      user.isSignIn ? (
        <Redirect to="/"/>
      ) : (
        <div className="login">
          <LoginForm error={user.error} signIn={signIn} />
        </div>
      )
    )
  }
}

export default Login;
