/* jshint esversion: 6 */ 
/*{
	let name = 'boyang';
}
console.log(name);*/

/*const name = 'boyang';
//name = 'zhangsan';
console.log(name);

let course ='React 开发 app';

console.log('hello' + name + '+course is ' + course);
console.log(`hello ${name}, course is ${course}`);
console.log('-------------------------------');

function hello(name){
	console.log(`hello ${name}`);
}

hello('boyang');

const hello1 = (name)=>{
	console.log(`hello ${name} !`);
};

hello1('boyang1');

setTimeout(()=>{
	console.log('xxxx');
},1000);

const double = x =>x*2;
console.log(double(5));

const hello2 = (name='boyangaaaaa')=>{
	console.log(`hello ${name}`);
};
hello2();

function hello3(name1,name2){
	console.log(name1,name2);
}
let arr =['boyang', 'fanyan'];
hello3(...arr);
console.log('----------------------------');
const obj = {name: 'imooc',course:'react 开发 app'};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const name2 ='imooc';
const obj3 = {
	name,
	[name2]:'hello',
	func1: function(){
	},
	hello2(){

	}
};
console.log(obj3);

const obj4 = {name:'imooc', course:'react'};
const obj5 ={type:'it',teacher:'woniu'};
console.log({...obj4,...obj5,date:'2018'});

//const arr2 = ['hello','mooc'];
const obj6 = {name7:'imooc',course7:'react'};
const {name7,course7} = obj6;

//let [arg1,arg2] = arr2;
console.log(name7,'|',course7);
console.log('*****************************************');

class Myapp{
	constructor(){
		this.name = "imooc";
	}
	sayHello(){
		console.log(`hello, ${this.name}`);
	}
}

const app = new Myapp();
app.sayHello();
*/
import {name} from './module1';
console.log(name);