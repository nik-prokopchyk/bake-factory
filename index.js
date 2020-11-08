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

app.get('/kitchen', (req, res) => {
  let data = new api.receipt()
  console.log(data);
  data.getKitchen().then(response => {
    res.send(response)
  })
})

app.post('/buy', (req, res) => {
  // const data = new api.goods()
  // console.log(req.json({requestBody: req.body}))
  // console.log(req.body);
  const {id, from, to, goods} = req.body;
  console.log(id, from, to, goods);
  let newObj = new api.receipt(id, from, to, goods);
  // console.log(Object.keys(api.receipt) )
  // console.log('enter localhost', id, from, to, goods);
  newObj.insert().then(b => {
      console.log('index', b)
      res.send(b)
  })
  // console.log(Object.keys(api.receipt));
})

app.get('/cek', (req, res) => {
  res.send('my name is Nik')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
