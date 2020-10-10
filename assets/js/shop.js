// console.log('test');
const shop = {
  cancel: function() {
    document.getElementsByClassName("modal")[0].style.display = 'none'
  },
  addIngridients: function() {
    console.dir(document.getElementsByClassName("modal"));
    document.getElementsByClassName("modal")[0].style.display = 'flex'
  },
  buy: function() {
    const water = document.getElementById("modal-water").value
    const pouder = document.getElementById("modal-pouder").value
    const yeast = document.getElementById("modal-yeast").value
    const salt = document.getElementById("modal-salt").value
    const sugar = document.getElementById("modal-sugar").value
    const oil = document.getElementById("modal-oil").value

    fetch(`http://localhost:3000/buy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        'id': 'Nikita',
        'from': 'Procopchuk N.A.',
        'to': 'Mikhushkin E.A.',
        'goods': {
          water,
          pouder,
          yeast,
          salt,
          sugar,
          oil: oil
        }
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(dataBase.pouder);
        dataBase = {
          ...dataBase,
          "pouder": dataBase.pouder +  document.getElementById("modal-pouder").value
        }
        kitchen.refreshKitchen()
        this.cancel()
      })
  }
}
