const express = require('express');
const News = require('../models/news');
const router = express.Router();

// Jeśli sesja jest już nieważna (nastąpi wylogowanie i przekierowanie na stronę login). Sesja jest sprawdzana przy każdej próbie łączenia z serwerem.
router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('/login');
        return;
    }
    next()
});

//Wyświetlenie strony admin wraz z danymi z bazy danych po zalogowaniu
router.get('/', (req, res) => {
    console.log(req.session.admin);
    // Pobranie wszystkich danych z bazy i wyrenderowanie ich
    News.find({}, (err, data) => {
        res.render('admin/index', { title: 'Admin', data });
    });
});

// Wyświetlanie formularza do dodania artykułu
router.get('/news/add', (req, res) => {
    res.render('admin/news-form', { title: 'Dodaj news', body: {}, errors: {} });
});

// Dodawanie artykułu do bazy danych MongoDB cloud
router.post('/news/add', (req, res) => {
    const body = req.body;
    console.log(body);

    // Zapis do bazy danych, danych przesłanych w formularzu.
    const newsData = new News(body);
    // Walidacja formularza 
    const errors = newsData.validateSync();

    newsData.save((err) => {
        if (err) {
            res.render('admin/news-form', { title: 'Dodaj news', body, errors });
            return;
        } else {
            res.redirect('/admin');
        }
    })
});

// Usuwanie artykułów
router.get('/news/delete/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/admin');
    })
});

module.exports = router;