const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/assets', express.static('assets'))
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/index.html')))
console.log(path.join(__dirname + '/assets/'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
