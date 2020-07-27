var express = require('express');
var router = express.Router();

var db = require('../db');

/*
Rota de acesso principal da aplicação, em que serão
exibidas todas as músicas cadastradas, e as opções de alterar
e excluir
*/
router.get('/user', (req, res, next) => {

    db("usuario").then((usuarios) => {

        res.render("index_user.njk", { usuarios: usuarios });

        }, next); 

});

// Rota de formulário de inserção de músicas
router.get('/add', (req, res, next) => {

    res.render("add_user.njk"); // renderiza a pagina add.njk

});


//Rota de cadastro de músicas, que recebe os dados do cadastro e insere no banco de dados
router.post('/user', (req, res, next) => {

    db("usuario").insert(req.body).then((ids) => {

        res.redirect('/user');

        }, next);

});

//Rota de formulário de edição de uma música
router.get('/edit/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("usuario").where("id", id).first().then((usuario) => {

        if (!usuario) { return res.send(400); }

        res.render("edit_user.njk", { usuario: usuario });

        }, next);

});

//Rota de alteração dos dados de uma música

router.put('/edit/:id', (req, res, next) => {
    
    const {id} = req.params;

    db("usuario").where('id', id).update(req.body).then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/user');

        }, next);

});

//Rota de exclusão de uma músicas
router.delete('/delete/:id', (req, res, next) => {

    const {id} = req.params;

    db("usuario").where('id', id).delete().then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/user');

    }, next);

});

module.exports = router;