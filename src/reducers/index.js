import { combineReducers } from 'redux';
import appInitialized from 'reducers/appInitialized';
import loggedIn from 'reducers/loggedIn';

export default combineReducers({
  appInitialized,
  loggedIn
});
