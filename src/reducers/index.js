import { combineReducers } from 'redux';

import user from './user.js';
import messages from './messages.js';

const rootReducer = combineReducers({ user, messages });

export default rootReducer;
