document.getElementById('loginForm').addEventListener('submit', function (event) {

    event.preventDefault();

    let email = document.querySelector('input[name="mail"]').value;
    let password = document.querySelector('input[name="password"]').value;

    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        Toastify({
            text: "Inicio de sesión exitoso. Serás redirigido a la página principal.",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: 'right', 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();

        setTimeout(function () {
            window.location.href = '/main.html';
        }, 3000);
    } else {
        Toastify({
            text: "Correo electrónico o contraseña incorrectos.",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: 'right', 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        return;
    }

    window.location.href = 'shopping/products.html';
});