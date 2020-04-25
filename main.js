const kitchen = {
  water: Infinity,
  pouder: 50000,
  yeast: 100,
  salt: 1000,
  sugar: 5000,
  oil: 1000,
  egg: 30,
}

const bread = {
  water: 300,
  pouder: 500,
  yeast: 10,
  salt: 7.5,
  sugar: 20,
  oil: 20,
}

function startBakeBread() {
  let water = 	document.getElementById('water').value;
  let pouder = 	document.getElementById('pouder').value;
  let yeast = 	document.getElementById('yeast').value;
  let salt = 	document.getElementById('salt').value;
  let sugar = 	document.getElementById('sugar').value;
  let oil = 	document.getElementById('oil').value;
 console.log(water, pouder, yeast, salt, sugar, oil)

  mixPouderAndYeast()
  mixSecondaryIngridients()
  mixAll()
  awaitDoughComing()
  createBreadForm()
  putBreadFormInOven()
  transportBakedBread()
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
