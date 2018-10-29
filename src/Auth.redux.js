/*jshint esversion:6*/
//然后,这一部分定义数据的流转
import axios from 'axios';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA'
const initState = {
	isAuth:false,
	user:'李云龙',
	age:20
}

/*
export function auth(state={isAuth:false,user:'李云龙'},action){
	switch(action.type){
		case 'LOGIN':
			return {...state, isAuth:true}
		case 'LOGOUT':
			return {...state, isAuth:false}
		dafault:
			return state === undefined ? null:state;
 }
}*/

export function auth(state=initState,action){
	 console.log(state,action)
	switch (action.type){
		case LOGIN:
			return {...state, isAuth:true};
		case LOGOUT:
			return {...state, isAuth:false};
		case USER_DATA:
			//return {...state, ...action.payload}
			  return {...state,user:action.payload.user,age:action.payload.age}
		default:
			return state;
	}
}

/*export function auth(state={isAuth:false,user:'李云龙'},action){
	switch(action.type){
		case LOGIN:
			return {isAuth:false,user:'李云龙'}
		case LOGOUT:
			return {isAuth:false,user:'李云龙'}
		dafault:
			return {isAuth:false,user:'李云龙'}
 }
}*/

export function getUserData(){
	//不要走神,也就是我定义好了,然后,就是要去那个地址去找,不要去抄代码,要按照自己的逻辑开始走,
	return dispatch=>{
		axios.get('/data')
		  .then(res=>{
		  	if(res.status==200){
		  		dispatch(userData(res.data))
		  		{/*this.setState({data:res.data})*/}
		  	}
		})
	}
}

export function userData(data){
	return {type:USER_DATA,payload:data}
}

export function login(){
	return {type:LOGIN}
}
export function logout(){
	return {type:LOGOUT}
}