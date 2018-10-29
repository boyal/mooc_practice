/*jshint esversion:6*/
import React from 'react';
import { connect } from 'react-redux';
import { login,getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
//现在是有两个reducer,页面的index是一个,还有auth页面还有一个,这两个模块都需要redux来处理的,每一个reducer.都有一个state,感觉是不可以共享的
@connect(
	state=>state.auth,
	{login,getUserData}
	)
	
//我有点好奇,这个进行设置state的东西还是用起来很容易的,但是,要将这个东西,用到这个redux上也是说得过去的,很是很简便的
class Auth extends React.Component{
/*	constructor(props){
	   super(props);
	   this.state={
	      data:{}
	   }
	}
*/
	componentDidMount(){
		this.props.getUserData();
		/*axios.get('/data')
		.then(res=>{
			if(res.status==200){
			  this.setState({data:res.data});
			  console.log('success');
			}
			console.log(res.data.user)
		})*/
	}



	render(){
		return (
        <div>
          <h2>我的名字是{this.props.user}年龄是{this.props.age}</h2>
          { this.props.isAuth? <Redirect to = '/dashboard'/> : null       }
          <h2>Auth page:你没有权限,你需要登陆才能查看该信息</h2>
          <button onClick={this.props.login}>登陆</button>
        	
        </div>)
}
}
export default Auth