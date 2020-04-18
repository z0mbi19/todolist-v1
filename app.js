const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let items = ["Exercitar", "Estudar"]

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    const data = new Date();

    let options = {
        weekday: "long",
        day: "2-digit",
        month: "long"
    }

    let dia = data.toLocaleDateString("pt-BR", options);

    res.render("list", {
        algumDia: dia,
        novoItem: items
    })
})

app.post("/", function (req, res) {
    let item = req.body.coisas

    items.push(item)

    console.log(items);
    

    res.redirect("/")
})

app.listen(3000, function () {
    console.log("Server ativo porta 3000...");
})