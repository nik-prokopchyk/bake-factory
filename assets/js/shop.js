// console.log('test');
const shop = {
  cancel: function() {
    document.getElementsByClassName("modal")[0].style.display = 'none'
  },
  addIngridients: function() {
    console.dir(document.getElementsByClassName("modal"));
    document.getElementsByClassName("modal")[0].style.display = 'flex'
  },
  
}
