const express = require ('express')
const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs')
const cookieParser = require('cookie-parser'); 

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('principal', (req, res) => {
  res.render('principal', {login:req.body.username});
});

app.get('/', function (req,res) {
    res.render('principal')
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

