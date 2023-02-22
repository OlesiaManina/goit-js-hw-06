const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('button.change-color');
const spanRef = document.querySelector('span.color');

buttonRef.addEventListener('click', changeBgColor)


function changeBgColor(event) {
  const result = bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = result;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
