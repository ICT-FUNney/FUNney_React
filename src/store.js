import { createStore } from 'redux';

import combineReducers from './reducers/CreateReducers.js';

//storeの生成
const store = createStore(combineReducers);

export default store;
