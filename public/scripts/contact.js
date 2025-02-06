const form = document.getElementById('formContact');

form.onsubmit = (e) => {
    let status = document.getElementById('statusForm');
    e.preventDefault();
    status.textContent = "";
    status.classList.remove('statusOK');
    status.classList.remove('fadeIn');
    const isValid = validateForm();
    if(isValid) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://sendforms-production.up.railway.app/", true);
        status.classList.add('statusOK');
        status.classList.add('fadeIn');
        status.textContent = 'Mensaje enviado con exito!';
        let formData = new FormData(form);
        xhr.send(formData);
        form.reset();
        setTimeout(function() {
            status.classList.remove('fadeIn');
            status.classList.add('fadeOut');
        }, 2000);
    }
}

function validateForm() {
    let isValid = true;
    const email = document.getElementById('email');

    const fieldsRequired = ['name', 'subject', 'message'];

    fieldsRequired.forEach(elementId => {
        if(!validateFieldsRequired(elementId)) {
            isValid = false;
        }
    })

    if(!validateEmail(email)) {
        isValid = false;
    }

    function validateFieldsRequired(elementId) {
        const element = document.getElementById(elementId);
    
        if(element.value.trim() === '') {
            element.style.borderBottom = "2px solid red";
            element.style.setProperty('--placeholder-color', 'red');
            return false;
        }else {
            element.style.borderBottom = "2px solid whitesmoke";
            element.style.setProperty('--placeholder-color', 'whitesmoke');
            return true;
        }
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(regex.test(email.value.trim())) {
            email.style.borderBottom = "2px solid whitesmoke";
            email.style.setProperty('--placeholder-color', 'whitesmoke');
            return true;
        }else {
            email.style.borderBottom = "2px solid red";
            email.style.setProperty('--placeholder-color', 'red');
            return false;
        }
    }

    return isValid;
}