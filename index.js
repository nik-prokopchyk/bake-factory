const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const api = require("./api");
const fs = require("fs");

app.use("/assets", express.static("assets"));
app.use(express.json());

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname + "/index.html"))
);

app.get("/kitchen", (req, res) => {
  let data = new api.receipt();
  data.getKitchen().then((response) => {
    console.log(response);
    res.send(response);
  });
});

app.post("/buy", (req, res) => {
  const { id, from, to, goods } = req.body;
  let newObj = new api.receipt(id, from, to, goods);

  newObj.insert().then((b) => {
    console.log("index", b);
    res.send(b);
  });
});

app.post("/bake", (req, res) => {
  const { id, from, to, goods } = req.body;
  let newObj = new api.receipt(id, from, to, goods);
  newObj.insert().then((b) => {
    res.send(b);
  });
});

app.listen(port, () =>
  console.log(`Хлебопечка listening at http://localhost:${port}`)
);
