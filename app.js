const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    const data = new Date();
    const hoje = data.getDay()
    let dia = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"] 
    
    res.render("list", {algumDia: dia[hoje]})
})


app.listen(3000, function(){
    console.log("Server ativo porta 3000...");    
})