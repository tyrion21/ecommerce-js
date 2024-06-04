document.querySelector('.btn-primary').addEventListener('click', function (event) {
    
    event.preventDefault();

    let email = document.querySelector('input[name="mail"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let c_password = document.querySelector('input[name="c_password"]').value;

    
    let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailFormat.test(email)) {
        Toastify({
            text: "Por favor, introduce un correo electrónico válido.",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: 'right', 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        return;
    }

    
    let passwordFormat = /^[a-z0-9]+$/i;
    if (password.length > 10 || !passwordFormat.test(password)) {
        Toastify({
            text: "La contraseña debe tener un máximo de 10 caracteres y ser alfanumérica.",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: 'right', 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        return;
    }

    if (password !== c_password) {
        Toastify({
            text: "Las contraseñas no coinciden.",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: 'right', 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        return;
    }

    Toastify({
        text: "Registro exitoso. Serás redirigido a la página de inicio de sesión.",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: 'right', 
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setTimeout(function () {
        window.location.href = '/index.html';
    }, 2000);
});