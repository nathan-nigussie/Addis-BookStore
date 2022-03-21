const express = require("express");
const dotenv =require("dotenv");
const morgan = require("morgan");
const bodyparser =require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection.js");
const app=express();
dotenv.config({path:"config.env"});
const PORT=process.env.PORT||8080



// log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.esolve(__dirname,"views/ejs")) 
//if we have different path  than the main directory



//load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js", express.static(path.resolve(__dirname,"assets/js")))




app.get('/',(req,res)=>{
    res.render('index.ejs');
})



app.get('/add-newBook',(req,res)=>{
    res.render('add_newBook.ejs');
})


//load routers
app.use("/", require("./server/routes/router"))

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});
