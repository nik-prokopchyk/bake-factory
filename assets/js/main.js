function startBakeBread() {
  calculateAllowedBreads()
  mixPouderAndYeast()
  mixSecondaryIngridients()
  mixAll()
  awaitDoughComing()
  createBreadForm()
  putBreadFormInOven()
  transportBakedBread()

  const wrapper = document.getElementById('wrapper')
  wrapper.insertAdjacentHTML('beforebegin', '<img src="assets/images/bread.png">')
}

function mixPouderAndYeast(pouder, yeast) {
  alert('Смешивается основа')
  // return provision;
}
function mixSecondaryIngridients(water, salt, sugar, oil) {
  alert('Смешиваются добавки')
  // return mix;
}
function mixAll(provision, mix) {
  alert('Смешиваются все ингридеенты')
  // console.log(provision)
  // return dough;
}
function awaitDoughComing(dough) {
  alert('Тесто подходит')
  // return finishedDough;-
}
function createBreadForm(finishedDough) {
  alert('Хлебу предается форма')
  // return breadForm;
}
function putBreadFormInOven(breadForm) {
  alert('Хлеб уложен на выпечку')
  // return bakedBread;
}
function transportBakedBread(bakedBread) {
  alert('ХЛЕБ ВЫПЕЧЕН!!!!!');
}
// function mixIngridients() {
//   let water = 	document.getElementById('water').checked;
//   let pouder = 	document.getElementById('pouder').checked;
//   let yeast = 	document.getElementById('yeast').checked;
//   let salt = 	document.getElementById('salt').checked;
//   let egg = 	document.getElementById('egg').checked;
//
//   if (water && pouder && yeast && salt && egg) {
//     alert('Тесто смешано ')
//     putDoughInOven('кирпич')
//   } else {
//     alert('Недостаточно ингредиентов')
//     return false;
//   }
// }
// function putDoughInOven(dough) {
//   if (dough) {
//     alert('Тесто в духовке')
//     setTimeout(takeBread, 3000)
//   } else {
//     alert('Тесто не отсутствовало')
//   }
// }
// function takeBread() {
//   alert('ВАШ ХЛЕБ ВЫПЕЧЕН!!!!')
// }
//
// function bakeBread() {
//   const totalBread = document.getElementById('total').value;
//   if (totalBread > 0) {
//
//     for (ingridient in kitchen) {
//       console.log(ingridient);
//     }
//
//     for (let i = 0;  i < totalBread; i++) {
//       console.log(i);
//       mixIngridients()
//     }
//   } else {
//     alert('Неправильное количество булок')
//   }
// }
