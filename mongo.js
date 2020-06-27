
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:<password>@cluster0-terx7.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection
client.connect(err => {
  collection = client.db("bake-factory")
    .collection("stock")

    // perform actions on the collection object
  client.close();
  // collection.findOne({"test": "test"})
});
// console.log(collection);
setTimeout(
  async () => {
    const data = await collection.insertOne({"test1":"super test"})
    console.log(data);
  }

  , 4000
)
