function refreshKitchen() {
  document.getElementById('db-water').textContent = kitchen.water
  document.getElementById('db-pouder').textContent = kitchen.pouder
  document.getElementById('db-yeast').textContent = kitchen.yeast
  document.getElementById('db-salt').textContent = kitchen.salt
  document.getElementById('db-sugar').textContent = kitchen.sugar
  document.getElementById('db-oil').textContent = kitchen.oil
  document.getElementById('db-egg').textContent = kitchen.egg
}


function calculateAllowedBreads() {
  let minimum = [];
  let bread = getIngredients();

  for (ingridient in kitchen) {
    minimum.push(kitchen[ingridient]/bread[ingridient])
    //console.log(k/b);
  }
   console.log(minimum);
  document.getElementById('allowedBreads').textContent = Math.min(...minimum);
}
calculateAllowedBreads()
function getIngredients() {
  return {
    water: 	document.getElementById('water').value,
    pouder: 	document.getElementById('pouder').value,
    yeast: document.getElementById('yeast').value,
    salt: document.getElementById('salt').value,
    sugar: document.getElementById('sugar').value,
    oil: document.getElementById('oil').value,
  }
}
/*
Формула выпечки:
kitchen - breadCounter * bredIngredients

*/
