const express = require ('express')
const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs')
const cookieParser = require('cookie-parser'); 

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/principal', (req, res) => {
  const { username } = req.body;
  res.render('principal', { login: username }); // Passa o nome de usuário para a página principal
});

app.get('/', function (req,res) {
    res.render('login')
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

