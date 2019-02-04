import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render(){
    return (
      this.props.isSignIn ? (
        <Route {...this.props} />
      ) : (
        <Redirect to="/login"/>
      )
    )
  }
}

const mapStateToProps = state => ({
  isSignIn: state.user.isSignIn
})

export default connect(mapStateToProps)(PrivateRoute);
