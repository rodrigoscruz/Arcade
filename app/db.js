var knex = require('knex');

var db = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password: "",
        database : 'arcade'
    }
});

module.exports = db;


/*
CREATE TABLE `artigo` (
`id` INT NOT NULL AUTO_INCREMENT ,
`nome_criador` VARCHAR(30) NOT NULL ,
`data` DATE NULL ,
`categoria` VARCHAR(30) NOT NULL ,
`titulo` VARCHAR(30) NOT NULL ,
`corpo` VARCHAR(1000) NOT NULL ,
`img_url` VARCHAR(90) NULL ,
PRIMARY KEY (`id`)
) ENGINE = InnoDB default charset = utf8;

CREATE TABLE `video` (
`id` INT NOT NULL AUTO_INCREMENT ,
`nome_criador` VARCHAR(30) NOT NULL ,
`data` DATE NULL ,
`categoria` VARCHAR(30) NOT NULL ,
`titulo` VARCHAR(30) NOT NULL ,
`texto` VARCHAR(1000) NOT NULL ,
`link` VARCHAR(50) NOT NULL ,
PRIMARY KEY (`id`)
) ENGINE = InnoDB default charset = utf8;

*/