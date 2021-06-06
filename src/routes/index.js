const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'Ejercitando Node.js'})
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact ejs'})
})
module.exports = router;