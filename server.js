const express = require("express")
const app = express()
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const fs = require('fs')

const PORT = 3000

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.post('/saveFile', (req, res) => {
    fs.writeFile('gameSave.json', JSON.stringify(req.body.json, null, 2), 'utf8', function () {
        console.log('done save')
    })
    res.redirect('/')
})

app.post('/loadSave', (req, res) => {
    fs.readFile('gameSave.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(JSON.parse(data))
    })
})

app.get('/hex', (req, res) => {
    res.sendFile(__dirname + '/dist/hex.html')
})

app.listen(PORT, function () {
    console.log('Serwer port: ' + PORT)
})