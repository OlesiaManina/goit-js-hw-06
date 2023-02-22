const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('ul#ingredients');

let newItems = [];

ingredients.forEach((ingredient) => {

  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');
  newItems.push(itemRef);
})

listRef.append(...newItems);





