const connectDB=require("./server/database/connection");
const express=require("express");
const app=express();
require("dotenv").config();
const books=require("./server/routes/books");

const services=require("./server/services/render.js");
var multer=require("multer");

var fs=require("fs");

const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require("path");

// log requests
app.use(morgan("tiny"));

app.use(express.static("myuploads"));

//load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));

app.use(bodyparser.urlencoded({extended: true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))
//if we have different path  than the main directory

//routes

app.get("/hello",(req,res) => {
  res.send("books");
});

//middleware
app.use(express.json());

//load routers
app.use("/",books);

app.use("/home-page",services.homeRoutes);
//app.use("/sells-page",services.sells_page);
app.use("/add-newBook",services.add_newBook);
app.use("/view-stock",services.view_stock);
/**
 * @description viewing the books in the stocks
 * @method GET/update-stock
 */
app.use("/update-stock",services.update_stock);

const port=process.env.PORT||3000;

const start=async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port,console.log(`Server is listening on port ${port}...`));
  } catch(error) {
    console.log(error);
  }
};

start();
