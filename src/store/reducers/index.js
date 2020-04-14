import { combineReducers } from 'redux';
import questionReducer from './questions';
import interfaceReducer from './interface';

export default combineReducers({
	questions: questionReducer,
	interface: interfaceReducer
});
