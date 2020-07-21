var knex = require('knex');

var db = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password: "root",
        database : 'arcade'
    }
});

module.exports = db;


/*
CREATE TABLE `criador` (
`id` INT NOT NULL AUTO_INCREMENT ,
`nome` VARCHAR(30) NOT NULL ,
`nick` VARCHAR(30) NOT NULL ,
`email` VARCHAR(30) NOT NULL ,
`linkedin` VARCHAR(50) NOT NULL ,
`instagram` VARCHAR(30) NOT NULL ,
`twiter` VARCHAR(30) NOT NULL ,
`facebook` VARCHAR(30) NOT NULL ,
PRIMARY KEY (`id`)
) ENGINE = InnoDB default charset = utf8;


CREATE TABLE `artigo` (
`id` INT NOT NULL AUTO_INCREMENT ,
`id_criador` INT NOT NULL ,
`categoria` VARCHAR(30) NOT NULL ,
`titulo` VARCHAR(10) NOT NULL ,
`corpo` VARCHAR(30) NOT NULL ,
`img_url` VARCHAR(30) NOT NULL ,
PRIMARY KEY (`id`),
FOREIGN KEY (`id_criador`) references criador (`id`) 
) ENGINE = InnoDB default charset = utf8;

CREATE TABLE `video` (
`id` INT NOT NULL AUTO_INCREMENT ,
`id_criador` INT NOT NULL ,
`link` VARCHAR(30) NOT NULL ,
`texto` VARCHAR(10) NOT NULL ,
PRIMARY KEY (`id`),
FOREIGN KEY (`id_criador`) references criador (`id`) 
) ENGINE = InnoDB default charset = utf8;

CREATE TABLE `usuario` (
`id` INT NOT NULL AUTO_INCREMENT ,
`nome` VARCHAR(30) NOT NULL ,
`email` VARCHAR(30) NOT NULL ,
`senha` VARCHAR(10) NOT NULL ,
PRIMARY KEY (`id`)
) ENGINE = InnoDB default charset = utf8;

CREATE TABLE `comentario` (
`id` INT NOT NULL AUTO_INCREMENT ,
`id_usuario` INT NOT NULL ,
`id_artigo` INT ,
`id_video` INT ,
`texto` VARCHAR(10) NOT NULL ,
PRIMARY KEY (`id`),
FOREIGN KEY (`id_usuario`) references usuario (`id`),
FOREIGN KEY (`id_artigo`) references artigo (`id`),
FOREIGN KEY (`id_video`) references video (`id`)   
) ENGINE = InnoDB default charset = utf8;

*/