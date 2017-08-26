const Book = require('../models/book');

const Book = {
  create: (req, res) => {
    const newBook = new Book();

    newBook.bookID = req.body.bookID;
    newBook.title = req.body.title;
    newBook.author = req.body,author;
    newBook.synopsis = req.body.synopsis;

    newBook.save(() => {
      if (err){
        return res.status(500).send(err);
      }
      return res.status(200).send({
        message: "Successfully created book",
      });
    });
  },

  read: (req, res) => {
    // const newBook = new Book();
    //
    // newBook.save(() => {
    //   if (err){
    //     return res.status(500).send(err);
    //   }
    //   return res.status(200).send({
    //     bookID: res.body.bookID,
    //     title: res.body.title,
    //     author: res.body.author,
    //     synopsis: res.body.synopsis,
    //     borrowed: res.body.borrowed,
    //     dateOut: res.body.dateOut,
    //     dateIn: res.body.dateIn,
    //   });
    // });
  },

  update: (req, res) => {
    // newBook.borrowed = req.body.borrowed;
    // newBook.dateOut = req.body.dateOut;
    // newBook.dateIn = req.body.dateIn;
    //
    // newBook.save(() => {
    //   if (err){
    //     return res.status(500).send(err);
    //   }
    //   return res.status(200).send({
    //     message: "Successfully updated book",
    //   });
    // });



  },

  delete: (req, res) => {


  },
};

module.exports = Book
