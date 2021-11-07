const express = require("express");
const router = new express.Router();
const players = require("../models/players");


router.get("/",(req,res)=>{
	res.send("Hello I am Rahul Gautam");
});

router.post("/player",async(req,res)=>{
	try{
		// console.log(`player data is`);
		// const playerData = await (req.body);
		// console.log(`player data is ${playerData}`);

		const createPlayer = new players(req.body);
		const insertData = await createPlayer.save();
		res.status(201).send(insertData);
	}catch(e){
		console.log(`error is ${e}`);
		res.status(400).send(e);
	}

});

router.get("/players",async(req,res)=>{
	try{
		const playersData = await players.find({}).sort({"ranking":1});
		res.status(201).send(playersData);
	}catch(e){
		console.log(`error is ${e}`);
		res.status(400).send(e);
	}

});

router.get("/player/:id",async(req,res)=>{
	try{
		const _id = req.params.id;
		const playerData = await players.find({_id:_id});
		res.status(201).send(playerData);
	}catch(e){
		console.log(`error is ${e}`);
		res.status(400).send(e);
	}

});

router.patch("/player/:id",async(req,res)=>{
	try{
		const _id = req.params.id;
		const updateData = await players.findByIdAndUpdate(_id,req.body,{
			new:true
		});
		res.status(201).send(updateData);
	}catch(e){
		console.log(`error is ${e}`);
		res.status(500).send(e);
	}

});

router.delete("/player/:id",async(req,res)=>{
	try{
		const _id = req.params.id;
		const deleteData = await players.findByIdAndDelete(_id);
		res.status(201).send(deleteData);
	}catch(e){
		console.log(`error is ${e}`);
		res.status(500).send(e);
	}

});

module.exports = router;