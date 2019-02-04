import { connect } from 'react-redux';

import Login from '../components/login/Login';
import { signIn } from '../actions/user';


const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { signIn })(Login);
