import currentUserSage  from './currentUser.saga';

const sagas = [currentUserSage];

export const initSagas = (sagaMiddleWare) =>(
  Object.values(sagas).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
)
