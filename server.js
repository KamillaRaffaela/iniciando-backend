const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function (req, res) {
    return res.render("index.html")
})

server.get("/aulas", function (req, res) {
    return res.render("aulas.html")
})

server.get("/cursos", function (req, res) {
    return res.render("cursos.html")
})



server.listen(5000, function() {
    console.log("server is running")
})
