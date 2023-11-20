const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
})

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Veritas@16",
  database: "todoapp",
  port: 3306
})

conexao.connect((erro) => {
  if(erro) {
    return console.log(erro)
  }

  console.log("Estou conectado ao Mysql")

  app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000!")
  })  
})

