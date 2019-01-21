// var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var config=require('./config');
var mongo=require('mongoose');
var app=require("express")();
 
/*
var db =mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response)
{
	if(err) console.log(err);
	else console.log('connected to' + db, '+', response );
});


var app=express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next)
{
	res.setHeader('access-control-allow-origin','http://localhost:4200');
	res.setHeader('access-control-allow-methods', 'GET, POST, OPTION, PUT, PATCH, DELETE');
	res.setHeader('access-control-allow-headers', 'X-Requested-With,content-type');
	res.setHeader('access-control-allow-cerdentials', true);
    next();
});
*/

var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017',function(err,db){
	if(err) console.log(err);
    console.log(db)
	var dbo=db.db("mydb");
	var obj={name:"greeting",message:"world"};
	// dbo.createCollection('hello',function(err, res){
	// 	if(err) console.log(err);
	// 	else console.log('hyhello');
	// 	db.close();
	// });
	
	dbo.collection("hello").findOne({},function(err,res)

	{
		if (err) console.log(err);
		app.get('/', function(req,resl){
			resl.send("hello " + res.message);
		});
		console.log(res.message);
		// db.close();
	});
app.listen(3000);

	// dbo.collection('hello').insertOne(obj,function(err, res)
	// {
	// 	if(err) console.log(err);
	// 	else console.log('hyhello');
	// 	db.close();

	// });
});
/*
var Schema = mongo.Schema;

var UsersSchema = new Schema ({
	name: { type: String },
}, {versionKey:false });

var model =mongo.model('users', UsersSchema, 'users');


app.post("/api/SaveUser", function(req, res){
	var mod = new model(req.body);
	if(req.body.mode == "save")
	{
		mod.save(function(err, data){
			if(err) res.send(err);
			else res.send({data:"record has been updated"});
		})
	} 
}) ;
*/

// app.get("/api/getUser", function(req, res){
// 	model.find({}, function(err,data){
// 		if(err) res.send(err);
// 		else res.send(data);
// 	});
// });

// app.listen(8080, function()
// {
// 	console.log('example app listening onport 8080')
// });

