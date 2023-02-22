const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

console.log(inputRef.value);


function createBoxes(amount) {
  let createdBoxes = [];
  for (let index = 0; index < amount; index++) {
  const newBox = document.createElement('div');
  const basicSize = 30;
  let size = basicSize + index * 10;
  newBox.style.width = `${size}px`;
  newBox.style.height = `${size}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  createdBoxes.push(newBox);
  }  
  boxesRef.append(...createdBoxes);
}

function getAmount() {
  let amount = Number(inputRef.value);
  createBoxes(amount);
}

createBtnRef.addEventListener('click', getAmount);

destroyBtnRef.addEventListener('click', (event) => {
  createBtnRef.removeEventListener('click', getAmount);
  boxesRef.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
