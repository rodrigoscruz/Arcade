var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', (req, res, next) => {

    db("usuario").then((musicas) => {

        res.render('user', { musicas: musicas });

        }, next); 

});

// Rota de formulário de criação de usuário
router.get('/user', (req, res, next) => {

    res.render('user'); // renderiza a pagina user.njk

});

//Rota de cadastro de usuário, que recebe os dados do cadastro e insere no banco de dados
router.post('/', (req, res, next) => {

    db("usuario").insert(req.body).then((ids) => {

        res.redirect('/');

        }, next);

});

module.exports = router;