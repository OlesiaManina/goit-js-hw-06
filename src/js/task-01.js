const categoriesRef = document.querySelector('ul#categories');
const itemsRef = categoriesRef.querySelectorAll('li.item');
const titlesRef = categoriesRef.querySelectorAll('h2');

const itemsAmount = `Number of categories: ${itemsRef.length}`;
console.log(itemsAmount);

for (const item of itemsRef) {

const category = item.firstElementChild.textContent;
const catResult = `Category: ${category}`;
console.log(catResult);
const elements = item.lastElementChild;
const elementsAmount = elements.children.length;
const elResult = `Elements: ${elementsAmount}`;
console.log(elResult)
}

