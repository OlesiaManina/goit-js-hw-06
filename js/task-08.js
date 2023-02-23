const formRef = document.querySelector('form.login-form');


formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;
    

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
        
    }     
    
    formRef.reset();
   
}






