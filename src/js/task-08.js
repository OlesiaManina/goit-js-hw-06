const formRef = document.querySelector('form.login-form');
console.log(formRef);

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;

    console.log(email.name);
    console.log(email.value);
    console.log(password.name);
    console.log(password.value);
    

    if(email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!!!");
    } else {
        const keyEmail = email.name;
        const valueEmail = email.value;
        const keyPassword = password.name;
        const valuePassword = password.value;
        const result = {
            [keyEmail]: valueEmail,
            [keyPassword]: valuePassword,
        };
        console.log(result);
        return result;
        
    }
    
    event.currentTarget.reset();
}
// console.log(result);



