const express=require("express");
const router=express.Router();
const upload=require("../middleware/upload.js");

const {
  createBooks,
  getSingleBook,
  getAllBooks,
  updateBook,
  deleteBook,
}=require("../controller/controller");

router
  .route("/api/v1/books/")
  .get(getAllBooks)
  .post(upload.single("avatar"),createBooks);
router.route("/api/v1/books/:id").get(getSingleBook).delete(deleteBook);
router.route("/api/v1/books/:id").post(upload.single("new_avatar"),updateBook);

module.exports=router;
