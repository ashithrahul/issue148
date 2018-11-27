import delay from 'redux-saga'
import { call, cancel, fork, take } from 'redux-saga/effects';


export function* currentUser() {
    yield delay(100000);
    console.log('loop is finished')
}

export function* currentUserWatcher() {
  while (true) {
    yield call(currentUser, yield take('ACTION_GET_CURRENT_USER'));
  }
}

export default function* currentUserSage() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(currentUserWatcher);

  // Suspend execution until location changes
  yield take('ACTION_LEAVE_CURRENT_USER');
  yield cancel(watcher);
}
