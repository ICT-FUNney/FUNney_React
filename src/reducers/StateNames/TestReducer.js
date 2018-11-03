import * as actionTypes from '../../actions/ActionTypes.js';

//Testに対するreducerを定義
export const TestReducer = (state = {test: 0}, action) => {
  if (action.type === actionTypes.ADD_TEST){
    return Object.assign({}, state, {
      test: state.test+1,
    });
  }
  return state;
}
