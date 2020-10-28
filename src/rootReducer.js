import { combineReducers } from 'redux';
import todo from './containers/todo/Todo.reducer';
import post from './containers/Dashboard/Dashboard.reducer';

const rootReducer = combineReducers({
  todo,
  post,
});

export default rootReducer;
