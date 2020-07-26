const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const api = require('./api')

app.use('/assets', express.static('assets'))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/index.html')))

app.get('/lol', (req, res) => {
  const data = new api.goods()
  console.log(req.json())
  res.send({'Nik': 'pro'})
})

app.post('/lol', (req, res) => {
  // const data = new api.goods()
  // console.log(req.json({requestBody: req.body}))
  console.log(req.body);
  res.send({'Nik': 'pro'})
})

app.get('/cek', (req, res) => {
  res.send('my name is Nik')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
