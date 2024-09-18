// script.js

// Función para validar el formulario de contacto
function validarFormulario() {
    // Obtener los elementos del formulario
    var nombre = document.getElementById("nombre");
    var correo = document.getElementById("correo");
    var celular = document.getElementById("celular");
    var mensaje = document.getElementById("mensaje");
    var enviar = document.getElementById("enviar");

    // Crear una variable para almacenar los errores
    var errores = "";

    // Validar que los campos no estén vacíos
    if (nombre.value == "") {
        errores += "Debes ingresar tu nombre.\n";
    }
    if (correo.value == "") {
        errores += "Debes ingresar tu correo electrónico.\n";
    }
    if (celular.value == "") {
        errores += "Debes ingresar tu número de celular.\n";
    }
    if (mensaje.value == "") {
        errores += "Debes ingresar tu mensaje.\n";
    }

    // Validar que el correo tenga un formato válido
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexCorreo.test(correo.value)) {
        errores += "Debes ingresar un correo electrónico válido.\n";
    }

    // Validar que el celular tenga un formato válido
    var regexCelular = /^[0-9]{8}$/;
    if (!regexCelular.test(celular.value)) {
        errores += "Debes ingresar un número de celular válido.\n";
    }

    // Si hay errores, mostrar un mensaje de alerta y cancelar el envío del formulario
    if (errores != "") {
        alert("Por favor, corrige los siguientes errores:\n" + errores);
        return false;
    }

    // Si no hay errores, enviar el formulario y mostrar un mensaje de confirmación
    else {
        alert("Tu mensaje ha sido enviado con éxito. Gracias por contactarnos.");
        return true;
    }
}

// Asignar la función de validación al evento submit del formulario
var form = document.getElementById("form");
form.onsubmit = validarFormulario;
