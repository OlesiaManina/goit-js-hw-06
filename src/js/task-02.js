const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('ul#ingredients');

for (const ingredient of ingredients) {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');
  console.log(itemRef);
  listRef.append(itemRef);
}


