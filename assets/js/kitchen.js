function refreshKitchen() {
  document.getElementById('db-water').textContent = kitchen.water
  document.getElementById('db-pouder').textContent = kitchen.pouder
  document.getElementById('db-yeast').textContent = kitchen.yeast
  document.getElementById('db-salt').textContent = kitchen.salt
  document.getElementById('db-sugar').textContent = kitchen.sugar
  document.getElementById('db-oil').textContent = kitchen.oil
  document.getElementById('db-egg').textContent = kitchen.egg
}
function calculateUsedIngredients() {
  let usedIngredients;
  let bread = getIngredients();
  const breadCounter =  document.getElementById('breadCounter').value;

  for (ingridient in bread) {
    bread[ingridient] *= breadCounter;
  }
  console.log('Количество ингридеентов для булок',bread);
  return bread;
}
