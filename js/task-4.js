const registerForm = document.querySelector('.login-form');
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault ();
    // console.log(event);
    const form = event.target;
    // console.log(form);
    // console.log(form.elements.email);
    const emailInput = form.elements.email;

    // console.log(emailInput.value);
    const email = emailInput.value.trim();
    const password = form.elements.password.value.trim();

    if (email === '' || password === '')  {
        alert ('All form fields must be filled in');
    } else {
        
        const formData = {
            email: email,
            password: password,
        };
        
        console.log(formData);
        
        form.reset();
    }
}



