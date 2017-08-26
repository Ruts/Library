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
    Book.find({}, (err, book) => {
      if (err){
        return res.status(404).send(err);
      }
      return res.status(200).send(book);
    });
  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  },
};

module.exports = bookControllers;
