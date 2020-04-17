const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    const data = new Date();
    const hoje = data.getDay()

    if (hoje === 6 ||hoje === 0){
        res.write("<h1>Finalmente feriado krl!!!</h1>")
        res.write("<h2>Vou virar a noite jogando <3</h2>")
        res.send()
    } else {
        res.sendFile(__dirname + "/index.html")
    }
})


app.listen(3000, function(){
    console.log("Server ativo porta 3000...");    
})