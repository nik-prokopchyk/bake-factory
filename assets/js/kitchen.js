const kitchen = {
  refreshKitchen: function() {
    document.getElementById('db-water').textContent = dataBase.water
    document.getElementById('db-pouder').textContent = dataBase.pouder
    document.getElementById('db-yeast').textContent = dataBase.yeast
    document.getElementById('db-salt').textContent = dataBase.salt
    document.getElementById('db-sugar').textContent = dataBase.sugar
    document.getElementById('db-oil').textContent = dataBase.oil
    document.getElementById('db-egg').textContent = dataBase.egg
  },
  calculateUsedIngredients: function() {
    let usedIngredients;
    let bread = bakery.getIngredients();
    const breadCounter =  document.getElementById('breadCounter').value;

    for (ingridient in bread) {
      bread[ingridient] *= breadCounter;
    }
    console.log('Количество ингридеентов для булок',bread);
    return bread;
  },
  cancel: function() {
    document.getElementsByClassName("modal")[0].style.display = 'none'
  },
  addIngridients: function() {
    console.dir(document.getElementsByClassName("modal"));
    document.getElementsByClassName("modal")[0].style.display = 'flex'
  }
}
