const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');
// console.log(inputRef);
// console.log(outputRef);

inputRef.addEventListener("input", (event) => {
    if(event.currentTarget.value === "") {
        outputRef.textContent = "Anonymous";
    } else {
        const result = outputRef.textContent = event.currentTarget.value;
        console.log(event.currentTarget.value);
    }
})