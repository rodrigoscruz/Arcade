var express = require('express');
var router = express.Router();

var db = require('../db');

/*
Rota de acesso principal da aplicação, em que serão
exibidas todas as músicas cadastradas, e as opções de alterar
e excluir
*/
router.get('/artigo', (req, res, next) => {

    db("artigo" || "criador").then((artigos) => {

        res.render("index_artigo.njk", { artigos: artigos });

        }, next); 

});

// Rota de formulário de inserção de músicas
router.get('/addartigo', (req, res, next) => {

    res.render("add_artigo.njk"); // renderiza a pagina add.njk

});


//Rota de cadastro de músicas, que recebe os dados do cadastro e insere no banco de dados
router.post('/artigo', (req, res, next) => {

    db("artigo" || "criador").insert(req.body).then((ids) => {

        res.redirect('/artigo');

        }, next);

});

//Rota de formulário de edição de uma música
router.get('/editartigo/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("artigo").where("id", id).first().then((artigo) => {

        if (!artigo) { return res.send(400); }

        res.render("edit_artigo.njk", { artigo: artigo });

        }, next);

});

//Rota de alteração dos dados de uma música

router.put('/editartigo/:id', (req, res, next) => {
    
    const {id} = req.params;

    db("artigo").where('id', id).update(req.body).then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/artigo');

        }, next);

});

//Rota de exclusão de uma músicas
router.delete('/deleteartigo/:id', (req, res, next) => {

    const {id} = req.params;

    db("artigo").where('id', id).delete().then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/artigo');

    }, next);

});

module.exports = router;