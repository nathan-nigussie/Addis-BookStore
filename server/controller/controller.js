const Booksdb = require("../model/model.js");

const path = require("../middleware/upload.js");
const fs = require("fs");

//Creating new Book Data
const createBooks = async (req, res) => {
  try {
    const books = new Booksdb({
      Title: req.body.Title,
      Geners: req.body.Geners,
      PurchasePrice: req.body.PurchasePrice,
      SellingPrice: req.body.SellingPrice,
      Description: req.body.Description,
      ArrivalDate: req.body.ArrivalDate,
      status: req.body.status,
      avatar: req.file.filename,
    });
    await Booksdb.create(books);

    res.redirect("/view-stock");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//geting  all book data

const getAllBooks = async (req, res) => {
  try {
    const books = await Booksdb.find();
    // res.json({books: req.body.Title})
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//request for single book data with id
const getSingleBook = async (req, res) => {
  try {
    id = req.query.id;
    const books = await Booksdb.findOne(id).then((data) => {
      if (!data) {
        res.status(404).send({ message: "not found user with id" + id });
      } else {
        res.send(data);
        console.log(data);
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//deleting signle book data

const deleteBook = async (req, res) => {
  try {
    const { id: booksID } = req.params;
    const books = await Booksdb.findOneAndDelete({ _id: booksID });

    if (!books) {
      return res.status(404).json({ msg: `No book found with id:${booksID}` });
    }
    fs.unlinkSync("./myuploads/" + books.avatar);

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateBook = async (req, res) => {
  let id = req.params.id;
  console.log("id in update" + id);
  console.log(req.file);

  const book = await Booksdb.findById({ _id: id });
  let new_avatar = book.avatar;

  try {
    if (req.file) {
      fs.unlinkSync("./myuploads/" + book.avatar);
      new_avatar = req.file.filename;
    } else {
    }

    await Booksdb.findByIdAndUpdate(
      { _id: id },
      {
        Title: req.body.Title,
        Geners: req.body.Geners,
        PurchasePrice: req.body.PurchasePrice,
        SellingPrice: req.body.SellingPrice,
        Description: req.body.Description,
        ArrivalDate: req.body.ArrivalDate,
        status: req.body.status,
        avatar: new_avatar,
      }
    );
    res.status(204).redirect("/view-stock");
    // res.redirect("/view-stock");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createBooks,
  getAllBooks,
  updateBook,
  deleteBook,
  getSingleBook,
};
