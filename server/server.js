/*jshint esversion:6*/
const express = require('express');
const mongoose = require('mongoose');
//这个只是node.js的链接mongodb的接口,但是接口的具体数据配置,还需要我们认真的去写
const DB_URL = "mongodb://boya:admin123/green_project2";
//mongoose.connect('mongodb://boya:admin123/green_project1')
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('mongo connect success ');
});

const User = mongoose.model('user',new mongoose.Schema({
		user:{type:String,required:true},
		age:{type:Number,required:true}
}));

/*User.create({
	user:'xiaolan',
	age:19
},function(err,doc){
	if(!err){
		console.log(doc);
	}else{
		console.log(err);
	}
});*/

/*User.remove({age:15},function(err,doc){
	console.log(doc);
});*/

/*User.update({'user':'imooc'},{'$set':{age:28}},function(err,doc){
	console.log(doc);
});*/

var app = express();

app.get('/',function(req,res){
	res.send('<h1>Hello World</h1>');
});

app.get('/data',function(req,res){
	User.findOne({'user':'imooc'},function(err,doc){
		res.json(doc);
	});
	//res.json({name:'imooc',type:'IT'});
});

app.listen(9093,function(){
	console.log('Node app start at port 9093');
});