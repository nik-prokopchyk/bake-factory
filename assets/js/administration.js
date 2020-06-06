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
function startBakeBread() {
  bakeBread()
}
function bakeBread() {
  const wrapper = document.getElementById('wrapper')
  const breadCounter =  document.getElementById('breadCounter').value;
  // console.log(breadCounter);
  if (breadCounter <= 0) {
    alert('Введите корректное число для выпечки')
    return;
  }
  let toBeUsedIngridients =  calculateUsedIngredients()
  // console.log(toBeUsedIngridients);
  for (ingridient in kitchen) {
    // console.log(toBeUsedIngridients[ingridient]);
    if (kitchen[ingridient] - toBeUsedIngridients[ingridient] < 0 ) {
      alert(`Нету столько ${ingridient}`)
      return
    }
    kitchen[ingridient] -= toBeUsedIngridients[ingridient]
  }
  calculateAllowedBreads()
  refreshKitchen()
  for (var i = 0; i < breadCounter; i++) {
    // console.log(i);
    wrapper.insertAdjacentHTML('beforeend', '<img src="assets/images/bread.png">')
  }
}
