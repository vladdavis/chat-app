export function validateUsername(username, handleError) {
  if(!username.length){
    handleError('short_username');
    return false;
  }
  if(username.length > 32){
    handleError('long_username');
    return false;
  }

  return true;
}

export function validateMessage(message, handleError) {
  if(!message.length){
    handleError('short_message');
    return false;
  }
  if(message.length > 255){
    handleError('long_message');
    return false;
  }

  return true;
}
