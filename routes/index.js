var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encontre Prestadores de Serviços em São Joaquim da Barra - SP' });
});


router.get('/resultado', function(req, res, next) {
  res.render('resultado', { title: 'Resultado Busca',  trabalhadores : [ {nome: 'Diego Alves do Carmo'}, {nome: 'Thiago Alves do Carmo'}] });
});

module.exports = router;
