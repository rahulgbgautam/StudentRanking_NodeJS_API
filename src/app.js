const express = require("express");
const app = express();
const port = process.env.port||3000;
require("./db/conn");
const players = require("./models/players");
const router = require("./routers/routes");
app.use(express.json());
app.use(router);

app.listen(port,()=>{
	console.log(`project is running at port  ${port}`);
});