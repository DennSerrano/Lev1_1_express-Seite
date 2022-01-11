const express = require('express');

const app = express()
app.use(express.static('public'))
app.use((req, _, next) => {
    console.log("Neue Request:", req.url, ", Methode:", req.method)
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/home.html")
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/html/home.html")
})
app.get('/solutions', (req, res) => {
    res.sendFile(__dirname + "/html/solutions.html")
})
app.get('/community', (req, res) => {
    res.sendFile(__dirname + "/html/community.html")
})
app.get('/notfound', (req, res) => {
    res.sendFile(__dirname + "/html/notfound.html")
})

const PORT = 1818
app.listen(PORT, () => console.log("Listening on Port", PORT))