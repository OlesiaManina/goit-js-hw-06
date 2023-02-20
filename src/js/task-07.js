const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');
console.log(inputRef);
console.log(spanRef.style.fontSize);

inputRef.addEventListener("input", (e) => {
    console.log(e.currentTarget.value);
    spanRef.style.fontSize = `${e.currentTarget.value}px`;
})