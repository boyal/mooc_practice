/*jshint esversion:6*/
//合并所有的reducer,并且返回
import { combineReducers } from 'redux';
import { counter } from './index.redux';
import { auth } from './Auth.redux';

//export default combineReducers({counter,auth});
export default combineReducers({counter,auth});
