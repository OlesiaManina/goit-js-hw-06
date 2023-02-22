let counterValue = 0;

const decrBtnRef = document.querySelector('button[data-action="decrement"]');
const incrBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
console.log(incrBtnRef)

decrBtnRef.addEventListener("click", () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})

incrBtnRef.addEventListener("click", () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
})