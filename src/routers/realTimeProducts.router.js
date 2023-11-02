const express = require('express');
const router = express.Router();
const products = require('../Products.json');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { title: 'eCommenrce', products })
});

module.exports = router;