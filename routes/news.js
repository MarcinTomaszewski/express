const express = require('express');
const router = express.Router();

/* GET news page. */
router.get('/', (req, res) => {
    res.render('news', { title: 'News' });
});

module.exports = router;