const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/olympic_players",{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
	console.log("connection successfull");
}).catch((e)=>{
	console.log(`connection failed due to ${e}`);
});