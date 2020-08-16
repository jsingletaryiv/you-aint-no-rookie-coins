import authReducer from './auth-reducer';
import coinReducer from './coin-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  coin: coinReducer

});

export default rootReducer;