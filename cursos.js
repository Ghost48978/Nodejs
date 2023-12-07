var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Lista de cursos.');
});

router.post('/', function(req, res) {
    res.send('Curso cadastrado.');
});

router.get('/docentes', function (req, res) {
    res.send('Lista de docentes.');
});

module.exports = router;