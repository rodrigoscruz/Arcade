var express = require('express');
var router = express.Router();

var db = require('../db');

/*
Rota de acesso principal da aplicação, em que serão
exibidas todas as músicas cadastradas, e as opções de alterar
e excluir
*/
router.get('/video', (req, res, next) => {

    db("video" || "criador").then((videos) => {

        res.render("index_video.njk", { videos: videos });

        }, next); 

});

// Rota de formulário de inserção de músicas
router.get('/addvideo', (req, res, next) => {

    res.render("add_video.njk"); // renderiza a pagina add.njk

});


//Rota de cadastro de músicas, que recebe os dados do cadastro e insere no banco de dados
router.post('/video', (req, res, next) => {

    db("video" || "criador").insert(req.body).then((ids) => {

        res.redirect('/video');

        }, next);

});

//Rota de formulário de edição de uma música
router.get('/editvideo/:id', (req, res, next) => {

    const {id} = req.params;
    
    db("video").where("id", id).first().then((video) => {

        if (!video) { return res.send(400); }

        res.render("edit_video.njk", { video: video });

        }, next);

});

//Rota de alteração dos dados de uma música

router.put('/editvideo/:id', (req, res, next) => {
    
    const {id} = req.params;

    db("video").where('id', id).update(req.body).then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/video');

        }, next);

});

//Rota de exclusão de uma músicas
router.delete('/deletevideo/:id', (req, res, next) => {

    const {id} = req.params;

    db("video").where('id', id).delete().then((result) => {

        if (result === 0) { return res.send(400); }

        res.redirect('/video');

    }, next);

});

module.exports = router;