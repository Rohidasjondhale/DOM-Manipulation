
const mainHeading = document.querySelector('#main-heading');
let fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';

const fruitItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}
document.querySelector("#basket-heading").style.color = "brown";

fruitItems.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
        item.style.backgroundColor = "brown";
        item.style.color = "white";
    }
})
