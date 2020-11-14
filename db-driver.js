
const db = require('./creds.js');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${db.username}:${db.pass}@cluster0-terx7.mongodb.net/bake-factory?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${db.username}:${db.pass}@cluster0.lm9bo.mongodb.net/ha4apure?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

function insertPayment(id, from, to, goods) {
  console.log("inspect",id, from, to, goods);
  return new Promise((resolve, reject) => {
    client.connect(err => {
      // const collection = client.db("bake-factory").collection("stock")
      client.db("bake-factory")
        .collection("stock")
        .insertOne({
          id, from, to, goods
        }).then( res => {
          // console.log(res.result);
          resolve(res.result);
        })
    })
  })
}

function getKitchen() {
  return new Promise((resolve, reject) => {
    client.connect(error => {
      client.db('bake-factory')
        .collection('kitchen')
        .findOne({
          id: 'kitchen'
        })
        .then(res => {
          console.log(res);
          resolve(res)
        })
    })
  })
}

function updateKitchen(goods) {
  delete goods._id
  console.log(goods);
  return new Promise((resolve, reject) => {
    client.connect(error => {
      client.db('bake-factory')
      .collection('kitchen')
      .replaceOne(
        {},
        goods
        ).then(res => {
          
          console.log(res)
          resolve(res)
        })
    })
  })
}
// getKitchen()
/*
Итого
Сумма
Цена без ПДВ
Цена с  ПДВ
Количество
Вес
Название продукта
Кому
От кого
Номер накладной



*/
module.exports = {
  insertPayment: insertPayment,
  getKitchen: getKitchen,
  updateKitchen
}
