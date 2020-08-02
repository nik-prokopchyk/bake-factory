
const db = require('./creds.js');
console.log(db);
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${db.username}:${db.pass}@cluster0-terx7.mongodb.net/bake-factory?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

try {
  client.connect(err => {
    const collection = client.db("bake-factory").collection("stock");
    // perform actions on the collection object
    collection.insertOne({
      waybill: 123456,
      from: 'coca-cola',
      to: 'me',
      total: 5647,
      goods: [
        {
          name: 'мука',
          weight: 500,
          amount: 3,
          price: 32.25,

        }
      ]
    }).then( res => {
      console.log(res.result.ok);
    })
    client.close();
  });
} catch(e) {
  console.log(e);
}

class Receipt {
  constructor(id, from, to, goods) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.goods = goods;
  }
  log = () => {
    console.log(  this.id, this.from, this.to, this.goods);
  }
}
class Goods {
  constructor(name, type, weight, amount, price) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.amount = amount;
    this.price = price;
  }
}

let a = new Receipt(123, 'Mihyhkina E.A.', 'Prokopchuka N.A.', 'goods');
a.log();

class GoodsType {
  constructor() {

  }
}
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
