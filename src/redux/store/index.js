// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import userDataReducer from '../reducers/userDataReducer';


const rootReducer = combineReducers({
  userData: userDataReducer,
});

const store = createStore(rootReducer);

export default store;
