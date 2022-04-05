var Booksdb = require("../model/model.js");
const path = require("../middleware/upload.js");
const fs = require("fs")

//create and save new book information
exports.create = (req, res) => {

        //validate request
        if (!req.body) {
            res.status(400).send({ message: "Content can not be empty" });
            return;
        }
        //new book
        console.log(req.file);
        let books = new Booksdb({
            Title: req.body.Title,
            Geners: req.body.Geners,
            PurchasePrice: req.body.PurchasePrice,
            SellingPrice: req.body.SellingPrice,
            Description: req.body.Description,
            ArrivalDate: req.body.ArrivalDate,
            status: req.body.status,
            avatar: req.file.filename
        })
        if (req.file) {
            Booksdb.avatar = req.file.filename
        }
        books.save(books)
            .then(response => {
                res.status(201).json({
                    message: "created successfully",
                })
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error occurred while Creating a create Operation"
                });
            })
    }
    //retrieve and return all Books data
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Booksdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "not found user with id" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error in retriving user with id" + id })
            })
    } else
        Booksdb.find()
        .then(books => {
            res.send(books)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while Creating a create Operation" });
        })
}

//finding a a book with its Id 
exports.find_By_Id = (req, res) => {

        const id2 = req.params.id;
        Booksdb.findById(id2)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "not found user with id" + id2 })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error in retriving user with id" + id2 })
            })

    }
    //  Update a new identified Book by its id
exports.update = (req, res) => {
    let new_avatar = "";
    let id = req.params.id;

    if (req.file) {
        new_avatar = req.file.filename;
        try {
            fs.unlinkSync("../myuploads/" + req.file.filename)
        } catch (err) {
            console.log(err)
        }
    } else {
        new_avatar = req.body.avatar;
    }
    Booksdb.findByIdAndUpdate(id, {
        Title: req.body.Title,
        Geners: req.body.Geners,
        PurchasePrice: req.body.PurchasePrice,
        SellingPrice: req.body.SellingPrice,
        Description: req.body.Description,
        ArrivalDate: req.body.ArrivalDate,
        status: req.body.status,
        avatar: new_avatar
    }, (err, result) => {
        if (err) {
            console.log("error in updatding the book information");
        } else {
            console.log("successfully updated! ")
        }
    })
    res.redirect("/view-stock")
}

//Deleting a Book with its specified id 
exports.delete = (req, res) => {
    const id = req.params.id;
    Booksdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete a user with ${id}. May be user with this Id is not found` })
            } else {
                res.send(`${data} + successfully deleted!`)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error delete user information" })
        })
}