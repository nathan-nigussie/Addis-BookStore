const axios = require("axios");
var Booksdb = require("../model/model.js");
var moment = require('moment');

exports.homeRoutes = (req, res) => {
    //make a get request to /api/users
    Booksdb.find()
        .then(books => {
            res.render("index.ejs", { books });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while Creating a create Operation" });
        })
}

exports.add_newBook = (req, res) => {

    res.render("add_newBook.ejs");
}
exports.view_stock = (req, res) => {
    Booksdb.find()
        .then(books => {
            res.render("view_stock.ejs", { books, moment: moment });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while Creating a create Operation" });
        })
}

exports.update_stock = (req, res) => {
    axios.get("http://localhost:3000/api/books", { params: { id: req.query.id } })
        .then(function(booksdata) {

            res.render("update_stock.ejs", { books: booksdata.data, moment: moment });

        })
        .catch(err => {
            res.send(err);
        })

}

exports.sells_page = (req, res) => {
    axios.get("http://localhost:3000/api/books", { params: { id: req.query.id } })

    .then(function(booksdata) {
            res.render("sells_page.ejs", { books: booksdata.data });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while Creating a create Operation" });
        })
}