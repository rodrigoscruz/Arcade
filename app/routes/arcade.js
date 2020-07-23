var express = require('express');
var router = express.Router();

var db = require('../db');

/*
Rota de acesso principal da aplicação, em que serão
exibidas todas as músicas cadastradas, e as opções de alterar
e excluir
*/
router.get('/', (req, res, next) => {

    db("musics").then((musicas) => {

        res.render('index', { musicas: musicas });

        }, next); 

});

// Rota de formulário de inserção de músicas
router.get('/add', (req, res, next) => {

    res.render('add'); // renderiza a pagina add.njk

});

//Rota de cadastro de músicas, que recebe os dados do cadastro e insere no banco de dados
router.post('/', (req, res, next) => {

    db("musics").insert(req.body).then((ids) => {

        res.redirect('/');

        }, next);

});

//Rota de formulário de edição de uma música
router.get('/edit/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("musics").where("id", id).first().then((musica) => {

        if (!musica) { return res.send(400); }

        res.render("edit.njk", { musica: musica });

        }, next);

});

//Rota de alteração dos dados de uma música

router.put('/edit/:id', (req, res, next) => {
    
    const {id} = req.params;

    db("musics").where('id', id).update(req.body).then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/');

        }, next);

});

//Rota de exclusão de uma músicas
router.delete('/delete/:id', (req, res, next) => {

    const {id} = req.params;

    db("musics").where('id', id).delete().then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/');

    }, next);

});

module.exports = router;