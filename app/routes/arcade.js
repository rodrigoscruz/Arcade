var express = require('express');
var router = express.Router();



router.get('/home', (req, res, next) => {

    res.render("home.njk");

});

router.get('/login', (req, res, next) => {

    res.render("login.njk");

});
module.exports = router;