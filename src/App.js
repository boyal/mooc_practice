/*jshint esversion:6*/
import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync} from './index.redux';
/*import { addGUN } from './index.redux';*/

/*const mapStatetoProps = (state)=>{
	return {num:state}
}
const actionCreators = {addGun, removeGun, addGunAsync}*/

//App=connect(mapStatetoProps,actionCreators)(App)
@connect(
	//你要什么属性放到props里
	state=>({num:state.counter}),
	//你要什么方法放到props里面,会自动dispatch
	{addGun,removeGun,addGunAsync})


class App extends React.Component{
/*	constructor(props){
		super(props);
	}*/
	render(){
		return (
			<div>
			<h1>现在有机关枪{this.props.num}把</h1>
			<button onClick={this.props.addGun}>申请武器</button>
			<button onClick={this.props.removeGun}>上交武器</button>
			<button onClick={this.props.addGunAsync}>拖两天再给武器</button>
			</div>
			)

	}
}


export default App

