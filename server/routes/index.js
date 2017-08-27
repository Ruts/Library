const user = require('../controllers/userControllers');
const book = require('../controllers/bookControllers');

const router = (app) => {
  app.post('/api/user/', user.create);
  app.post('/api/book/', book.create);
  app.get('/api/user/', user.read);
  app.get('/api/book/', book.read);
  app.put('/api/user/:id/', user.update);
  app.put('/api/book/:id/', book.update);
  app.delete('/api/user/:id/', user.delete);
  app.delete('/api/book/:id/', book.delete);
}

module.exports = router;
