import { combineReducers } from 'redux'

import { TestReducer } from './StateNames/TestReducer.js'

//最終的なreducerを生成
export default combineReducers({
  TestReducer,
})
