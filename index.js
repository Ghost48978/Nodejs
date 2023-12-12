const express = require('express');
const cursos = require('./cursos');
const alunos = require('./alunos');


const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use('/cursos', cursos);
app.use('/alunos', alunos)

app.get('/', function (req, res) {
    res.render('index', {name: 'Teste'});
    //res.sendFile(__dirname + '/index.html');
});

app.get('/alunos', (req, res) => {
    const alunos = [
      { nome: 'Rafael', idade: 20},
      { nome: 'Juliana', idade: 18 },
      {nome: 'Tenilton', idade: 21}
    ];
  res.render('alunos', { alunos });
});
  

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});