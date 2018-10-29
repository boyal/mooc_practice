/*jshint esversion:6*/
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';

/*import { counter,addGun,removeGun,addGunAsync } from './index.redux';*/
/*import App from './App';*/
/*import { counter } from './index.redux';*/
//import { auth } from './Auth.redux';
import reducers from './reducer';


import Auth from './Auth.js';
import Dashboard from './Dashboard.js';
import './config';
import 'antd-mobile/dist/antd-mobile.css';

const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	));

//console.log(store.getState());

/*function render(){
	ReactDom.render(<App store = {store} addGunAsync={addGunAsync} addGun={addGun} removeGun={removeGun} />,document.getElementById('root'));
}

render();
store.subscribe(render);*/



/*class Text extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		//this.props.history.push('/')
		return <h2>测试Text组件{this.props.location.pathname}</h2>
	}
}*/

ReactDom.render(
	<Provider store = {store}>
	<BrowserRouter>
	<Switch>
		 <Route path='/login' exact component={Auth}></Route>
	     <Route path='/dashboard' component={Dashboard}></Route>
		 <Redirect to ='/dashboard'></Redirect>
	</Switch>
	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
	)

//<Route path='/:location' component={Text}></Route>
//<Redirect to='/qibinglian'></Redirect>
//<Route path='/erying' component={Erying}></Route>
//<Route path='/qibinglian' component={Qibinglian}></Route>
//<Route path='/:location' component={Text}></Route>