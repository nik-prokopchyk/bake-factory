const administration = {
  calculateAllowedBreads: function () {
    let minimum = [];
    let bread = bakery.getIngredients();
    let allowedBreads = document.getElementById("allowedBreads");

    for (ingridient in dataBase) {
      minimum.push(dataBase[ingridient] / bread[ingridient]);
    }
    allowedBreads.textContent = Math.min(...minimum);
  },
  bakeBread: function () {
    const wrapper = document.getElementById("wrapper");
    const breadCounter = document.getElementById("breadCounter").value;
    let toBeUsedIngridients = kitchen.calculateUsedIngredients();

    if (breadCounter <= 0) {
      alert("Введите корректное число для выпечки");
      return;
    }
    for (ingridient in dataBase) {
      if (dataBase[ingridient] - toBeUsedIngridients[ingridient] < 0) {
        alert(`Нету столько ${ingridient}`);
        return;
      }
      dataBase[ingridient] -= toBeUsedIngridients[ingridient];
    }
    this.calculateAllowedBreads();
    kitchen.refreshKitchen();
    fetch("http://localhost:3000/bake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'id': 'kitchen',
        'from': 'Procopchuk N.A.',
        'to': 'Mikhushkin E.A.',
        goods: {
          ...dataBase,
        },
      }),
    }).then((res) => {
      console.log(res);

    });

    for (var i = 0; i < breadCounter; i++) {
      wrapper.insertAdjacentHTML(
        "beforeend",
        '<img src="assets/images/bread.png">'
      );
    }
  },
};
