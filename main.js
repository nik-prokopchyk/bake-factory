const kitchen = {
  water: 300,
  pouder: 500,
  yeast: 10,
  salt: 7.5,
  sugar: 20,
  oil: 20,
}

const bread = {
  water: 300,
  pouder: 500,
  yeast: 10,
  salt: 7.5,
  sugar: 20,
  oil: 20,
}

/*
Сухие дрожисмешали с мукой в большой миске
вода, соль, сахар, масло смешивается в маленькой миске
в большую миску добавили смесь маленькой
замес теста
тесто подходит
опускание теста
лепка формы
викладивание хлеба на противень
помещение заготовки в духовку
выпикание хлеба при температуре 300C в течении 20 минут
винуть хлеб
попробовать
*/

function mixPouderAndYeast(pouder, yeast) {
  return provision;
}
function mixSecondaryIngridients(water, salt, sugar, oil) {
  return mix;
}
function mixAll(provision, mix) {
  return dough;
}
function awaitDoughComing(dough) {
  return finishedDough;
}
function createBreadForm(finishedDough) {
  return breadForm;
}
function putBreadFormInOven(breadForm) {
  return bakedBread;
}
function transportBakedBread(bakedBread) {
  alert('Хлеб выпечен и успешно доставлен');
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
