const express = require('express');
const cursos = require('./cursos');

const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use('/cursos', cursos);

app.get('/', function (req, res) {
    res.render('index', {title: 'Winx'});
    //res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});