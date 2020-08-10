var express = require('express');
var router = express.Router();

var db = require('../db');

/*
Rota de acesso principal da aplicação, em que serão
exibidas todas as músicas cadastradas, e as opções de alterar
e excluir
*/
router.get('/podcast', (req, res, next) => {

    db("podcast").then((podcasts) => {

        res.render("index_podcast.njk", { podcasts: podcasts });

        }, next); 

});

// Rota de formulário de inserção de músicas
router.get('/addpodcast', (req, res, next) => {

    res.render("add_podcast.njk"); // renderiza a pagina add.njk

});


//Rota de cadastro de músicas, que recebe os dados do cadastro e insere no banco de dados
router.post('/podcast', (req, res, next) => {

    db("podcast" ).insert(req.body).then((ids) => {

        res.redirect('/podcast');

        }, next);

});

//Rota de formulário de edição de uma música
router.get('/showpodcast/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("podcast").where("id", id).first().then((podcast) => {

        if (!podcast) { return res.send(400); }

        res.render("show_podcast.njk", { podcast: podcast });

        }, next);

});

router.get('/homepodcast', (req, res, next) => {

    db("podcast").then((podcasts) => {

        res.render("home_podcast.njk", { podcasts: podcasts });

        }, next); 

});

//Rota de formulário de edição de uma música
router.get('/editpodcast/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("podcast").where("id", id).first().then((podcast) => {

        if (!podcast) { return res.send(400); }

        res.render("edit_podcast.njk", { podcast: podcast });

        }, next);

});

//Rota de alteração dos dados de uma música

router.put('/editpodcast/:id', (req, res, next) => {
    
    const {id} = req.params;

    db("podcast").where('id', id).update(req.body).then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/podcast');

        }, next);

});

//Rota de exclusão de uma músicas
router.delete('/deletepodcast/:id', (req, res, next) => {

    const {id} = req.params;

    db("podcast").where('id', id).delete().then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/podcast');

    }, next);

});

module.exports = router;