import { socket, serverTypesEvent } from '../../socket/socket';

const WEBSOCKET = 'WEBSOCKET';

export default function WebSocketMiddleware({ dispatch }){
  serverTypesEvent.forEach(eventType => {
    socket.on(eventType, data => {
      dispatch({
        type: eventType,
        payload: data
      });
    })
  })

  return next => action => {
    if(action.type === WEBSOCKET){
      const { eventType, data } = action.payload;
      return socket.emit(eventType, data);
    }
    return next(action);
  }
}

export function emit(eventType, data) {
  return {
    type: WEBSOCKET,
    payload: {
      eventType,
      data
    }
  }
}
