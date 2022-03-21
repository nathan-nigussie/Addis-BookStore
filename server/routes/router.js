const express = require("express");
const route = express.Router()
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var Booksdb = require("../model/model.js");
const services =require("../services/render.js");
const controller =require("../controller/controller.js");
const upload= require("../middleware/upload.js");
const fileStorageEngine= require("../middleware/upload.js");


/**
 * @description Root Route
 * @method GET/
 */
//route.get("/",services.homeRoutes);
/**
 * @description add newbook to stock
 * @method GET/add-newBook
 */
//route.get("/add-newBook",services.add_newBook);

//creating api
route.post("/api/books",upload.single('avatar'),controller.create)
route.get("/api/books",controller.find);
route.get("/api/books/:id",controller.find_By_Id);
//route.put("/api/users/:id",controller.update);
route.delete("/api/books/:id",controller.delete);


module.exports = route 
