const express = require("express");
const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
	ranking:{
		type:Number,
		required:true,
		unique:true
	},
	name:{
		type:String,
		// required:true,
		trim:true
	},
	dob:{
		type:Date,
		// required:true
	},
	country:{
		type:String,
		// required:true,
		trim:true
	},
	score:{
		type:Number,
		required:true
	},
	event:{
		type:String,
		default:"100m"
	}
});

//for creating collection 
const players = new mongoose.model("Player",playerSchema);
module.exports = players;