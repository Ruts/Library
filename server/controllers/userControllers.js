const User = require('../models/user');

const userController = {
  create: (req, res) => {
    const newUser = new User();

    newUser.userID = req.body.userID;
    newUser.fullName = req.body.fullName;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.role = req.body.role;

    newUser.save((err) => {
      if (err){
        return res.status(500).send(err);
      }
      return res.status(200).send({
        message: 'Successfully created new user',
      });
    });
  },

  read: (req, res) => {

  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  },
}

module.exports = userController;
