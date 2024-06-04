document.querySelector('#recover-form').addEventListener('submit', function (event) {
    
    event.preventDefault();

    var email = document.querySelector('#email').value;

    var storedEmail = localStorage.getItem('email');
    if (email === storedEmail) {

        Toastify({
            text: "Se ha enviado un correo de recuperación a tu dirección de correo electrónico.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: 'right',
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        Toastify({
            text: "No se encontró ninguna cuenta con ese correo electrónico.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: 'right',
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    }
});

document.querySelector('#back-button').addEventListener('click', function (event) {

    event.preventDefault();

    window.location.href = 'index.html';
});