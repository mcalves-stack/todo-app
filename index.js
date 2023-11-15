const express = require("express")
const exphbs = require("express-handlebars")

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send("Olá Mundo")
})

app.listen(3000, () => {
  console.log("Servidor está rodando na porta 3000!")
})