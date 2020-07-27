var express = require('express');
var router = express.Router();

var db = require('../db');

/*
Rota de acesso principal da aplicação, em que serão
exibidas todas as músicas cadastradas, e as opções de alterar
e excluir
*/
router.get('/cria', (req, res, next) => {

    db("criador").then((criadores) => {

        res.render("index_criator.njk", { criadores: criadores });

        }, next); 

});

// Rota de formulário de inserção de músicas
router.get('/addcria', (req, res, next) => {

    res.render("add_criator.njk"); // renderiza a pagina add.njk

});


//Rota de cadastro de músicas, que recebe os dados do cadastro e insere no banco de dados
router.post('/cria', (req, res, next) => {

    db("criador").insert(req.body).then((ids) => {

        res.redirect('/cria');

        }, next);

});

//Rota de formulário de edição de uma música
router.get('/editcria/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("criador").where("id", id).first().then((criador) => {

        if (!criador) { return res.send(400); }

        res.render("edit_criator.njk", { criador: criador });

        }, next);

});

//Rota de alteração dos dados de uma música

router.put('/editcria/:id', (req, res, next) => {
    
    const {id} = req.params;

    db("criador").where('id', id).update(req.body).then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/cria');

        }, next);

});

//Rota de exclusão de uma músicas
router.delete('/deletecria/:id', (req, res, next) => {

    const {id} = req.params;

    db("criador").where('id', id).delete().then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/cria');

    }, next);

});

module.exports = router;