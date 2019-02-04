export default function AsyncFunctionMiddleware({ dispatch, state }) {
  return next => action => {
    if(typeof action === 'function'){
      return action(dispatch, state);
    }
    return next(action);
  }
}
