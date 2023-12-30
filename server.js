const express = require("express")
const app = express()
app.use(express.urlencoded({
    extended: true
}));

const fs = require('fs')

const PORT = 3000

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.post('/saveFile', (req, res) => {
    let json = req.body
    let jsonParsed = JSON.parse(json.json)
    fs.writeFile('gameSave.json', JSON.stringify(jsonParsed, null, 2), 'utf8', function () {
        console.log('done save')
    })
    res.redirect('/')
})

app.listen(PORT, function () {
    console.log('Serwer port: ' + PORT)
})