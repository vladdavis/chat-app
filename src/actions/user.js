import { SIGN_IN, VALIDATION_ERROR_USERNAME } from '../constants/serverActions';
import { emit } from "../store/middleware/WebSocketMiddleware";
import { validateUsername } from '../helpers/validation';
import { getActionHendleError } from '../helpers/getActionHendleError';


export const signIn = (username) => dispatch => {
  const handleError = getActionHendleError(
    VALIDATION_ERROR_USERNAME,
    dispatch
  );

  if(validateUsername(username, handleError)){
    dispatch(emit(SIGN_IN, username));
  }
}
