const express = require("express");
const route = express.Router()
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var Booksdb = require("../model/model.js");
const services = require("../services/render.js");
const controller = require("../controller/controller.js");
const upload = require("../middleware/upload.js");
const fileStorageEngine = require("../middleware/upload.js");

/**
 * @description Root Route
 * @method GET/
 */
route.get("/home-page", services.homeRoutes);
/**
 * @description add newbook to stock
 * @method GET/add-newBook
 */
route.get("/add-newBook", services.add_newBook);
/**
 * @description viewing the books in the stocks
 * @method GET/view-stock
 */
route.get("/view-stock", services.view_stock);
/**
 * @description viewing the books in the stocks
 * @method GET/update-stock
 */
route.get("/update-stock", services.update_stock);
/**
 * @description a page to order purchase of books 
 * @method GET/sells-page
 */
route.get("/sells-page", services.sells_page);

//creating api
route.post("/api/books", upload.single('avatar'), controller.create)
route.get("/api/books", controller.find);
route.get("/api/books/:id", controller.find_By_Id);
route.post("/api/books/:id", upload.single('new_avatar'), controller.update)
route.delete("/api/books/:id", controller.delete);


module.exports = route