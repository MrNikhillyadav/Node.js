const express = require("express");
const {logReqRes} = require('./middlewares'); 
const {connectMongoDb} = require('./connection');
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/node-app")
.then(() => console.log("Db connected"))
.catch((err) => console.log("Mongo error", err));


//Middleware -Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server listening at PORT : ${PORT}`));
