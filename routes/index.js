const express = require('express');
const router = express.Router();

// Dane do logowania
const admin = 'admin';
const password = '123';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Wyświetlanie formularza
router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

// Pseudo autoryzacja
router.post('/login', (req, res) => {
  const body = req.body;
  if (body.login === admin && body.password === password) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
