const inputRef = document.querySelector("input#validation-input");

console.log(inputRef);

inputRef.addEventListener("blur", (event) => {
    console.log(event.currentTarget.value.length);
    console.log(inputRef.dataset)
    if(event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
})