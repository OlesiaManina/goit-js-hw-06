const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

spanRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", (e) => {
    console.log(e.currentTarget.value);
    spanRef.style.fontSize = `${e.currentTarget.value}px`;
})