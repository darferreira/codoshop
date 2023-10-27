function validarFormulario() {
    // Obtenemos los valores
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('tel').value;
    var mail = document.getElementById('mail').value;
    var comentario = document.getElementById('coment').value;
    
    // initi las variables de error
    var errorNombre = '';
    var errorTelefono = '';
    var errorMail = '';
    var errorComentario = '';
    
    // Validamos cada campo
    if (nombre === '') {
        errorNombre = 'Por favor, escribe tu nombre';
    }
    
    if (telefono.length < 5) {
        errorTelefono = 'El teléfono debe tener al menos 5 dígitos.';
    }
    
    if (!validarEmail(mail)) {
        errorMail = 'Por favor, escribe un correo electrónico válido';
    }

    if(comentario === '') {
        errorComentario = 'Por favor, escribe tu mensaje.'
    }
    
    // Mostramos los errores
            document.getElementById('error-nombre').innerHTML = errorNombre;
            document.getElementById('error-telefono').innerHTML = errorTelefono;
            document.getElementById('error-mail').innerHTML = errorMail;
            document.getElementById('error-comentario').innerHTML = errorMail;
            
    // Si no hay errores, enviamos el formulario
    if (errorNombre === '' && errorTelefono === '' && errorMail === '' && errorComentario ==='') {
        document.getElementById('formulario').submit();
        document.getElementById('formulario').reset();
    }
}

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}