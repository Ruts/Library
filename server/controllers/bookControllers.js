const Book = require('../models/book');

const bookControllers = {
  create: (req, res) => {
    const newBook = new Book();

    newBook.bookID = req.body.bookID;
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.synopsis = req.body.synopsis;
    newBook.borrowed = false;
    newBook.dateOut = '';
    newBook.dateIn = '';

    newBook.save((err) => {
      if (err){
        return res.status(500).send(err);
      }
      return res.status(200).send({
        message: "Successfully created book",
      });
    });
  },

  read: (req, res) => {
    console.log("Im here read");
    Book.find({}, (err, book) => {
      if (err){
        return res.status(404).send(err);
      }
      return res.status(200).send(book);
    });
  },

  update: (req, res) => {
    console.log("Im here update");
    Book.findOne({_id: req.params.id}, (err, book) => {
      if (err){
        return res.status(500).send(err);
      }

      console.log("book before is ", book);
      book.bookID = req.body.bookID;
      book.title = req.body.title;
      book.author = req.body.author;
      book.synopsis = req.body.synopsis;
      book.borrowed = req.body.borrowed;
      book.dateOut = req.body.dateOut;
      book.dateIn = req.body.dateIn;

      console.log("book after is ", book);
      book.save((err) => {
        if (err){
          return res.status(500).send(err);
        }
        return res.status(200).send({
          message: "Successfully Updated book",
          book,
          body: req.body,
        });
      });
    });
  },

  delete: (req, res) => {

  },
};

module.exports = bookControllers;
