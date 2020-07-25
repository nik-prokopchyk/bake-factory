const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/index.html')))
app.get('/lol', (req, res) => {

  res.send({'Nik': 'pro'})
})
app.get('/cek', (req, res) => {
  res.send('my name is Nik')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
