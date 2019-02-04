export function getActionHendleError(eventType, dispatch){
  return error => {
    dispatch({
      type: eventType,
      payload :{
        error: error
      }
    });
  }
}
