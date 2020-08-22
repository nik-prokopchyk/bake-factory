const dbMethods = require('./db-driver.js');
// console.log(dbMethods.insertPayment())

class Receipt {
  constructor(id, from, to, goods) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.goods = goods;
  }
  log = () => {
    console.log(this.id, this.from, this.to, this.goods);
  }
  insert = () => {
    // let a = await dbMethods.insertPayment(this.id, this.from, this.to, this.goods);
    return new Promise((resolve, reject) => {
      dbMethods.insertPayment(this.id, this.from, this.to, this.goods)
        .then(res => {
            resolve(res);
        })
    })
    // console.log('api', a)
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

class GoodsType {
  constructor() {

  }
}

module.exports = {
  'receipt': Receipt,
  'goods': Goods,
  'goodsType': GoodsType
}
