// npm install <pacote>
// npm install ejs
// npm install nodemon

// Importa o módulo para o projeto
const express = require("express")
const path = require("path")

//Configura o express para ser usado
const App = express()
App.set("view engine","ejs")
App.set("views", path.join(__dirname, "mvc/views"))
App.use(express.static(path.join(__dirname, "public")))


//Endpoint
App.get("/", (req, res) => {
    res.render("index",{ 
        nome: "Sidney",
        texto:"Esta é uma demonstração"
    })
})


//Deixar disponível o serviço
App.listen(3000, () => console.log("Aplicação no ar") )
