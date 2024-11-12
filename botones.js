document.querySelectorAll('.btn-redirect').forEach(function(button) {
    button.addEventListener('click', function() {
        // Obtiene la URL del atributo 'data-url' y redirige
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});

document.querySelectorAll('.pointer').forEach(function(button) {
    button.addEventListener('click', function() {
        if (this.id === 'registrarse') {
            window.location.href = 'register.html';
        } else if (this.id === 'iniciar') {
            window.location.href = 'sign_in.html';
        }
    });
});
