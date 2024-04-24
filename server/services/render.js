const axios = require("axios");
var books = require("../model/model.js");
var moment = require("moment");

exports.homeRoutes = async (req, res) => {
  try {
    books.find().then((books) => {
      res.render("index.ejs", { books });
    });
  } catch (error) {
    res.status(500).send({
      message:
        err.message || "Error occurred while Creating a create Operation",
    });
  }
};

//make a get request to /api/users

exports.add_newBook = (req, res) => {
  res.render("add_newBook.ejs");
};

exports.view_stock = (req, res) => {
  books
    .find()
    .then((books) => {
      res.render("view_stock.ejs", { books, moment: moment });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occurred while Creating a create Operation",
      });
    });
};

exports.update_stock = (req, res) => {
  books
    .findById({ _id: req.query.id })
    .then((books) => {
      res.render("update_stock.ejs", { books, moment: moment });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Product Not Found!",
      });
    });
};
// exports.update_stock=(req,res) => {
//     console.log("query1"+req.query.id)
//     axios.get("http://localhost:3000/api/v1/books/",{params: {id: req.query.id}}).then(function(booksdata) {

//         res.render("update_stock.ejs",{books: booksdata.data,moment: moment});

//         })
//         .catch(err => {
//             res.send(err);
//         })
//     return;
// }
