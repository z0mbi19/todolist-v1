const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let items = ["Exercitar", "Estudar"]
let workItem = []

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get("/", function (req, res) {

    res.render("list", {
        algumCoisa: dia,
        novoItem: items
    })
})

app.post("/", function (req, res) {

    let item = req.body.novaTarefa    

    if(req.body.list === "Trabalhos"){
        workItem.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }

})

app.get("/work", function(req, res){
    res.render("list", {
        algumCoisa: "Trabalhos",
        novoItem: workItem
    })
})

app.post("/work", function(req, res){
    let item = req.body.novaTarefa
    workItem.push(item)
    res.redirect("/work")
})

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function () {
    console.log("Server ativo porta 3000...");
})