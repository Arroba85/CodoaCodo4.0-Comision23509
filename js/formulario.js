function validarFormulario() {
    const nombre = document.getElementById("Nombre");
    const apellido = document.getElementById("Apellido");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    
    // Validación del campo de nombre
    if (!isNaN(nombre) || nombre !='') {
        console.log('32134');
        alert('El campo "NOMBRE" debe contener LETRAS y no estar vacio.')
        return false; // Detiene el envío del formulario si hay un error.
    }

    if (!isNaN(apellido) || apellido !='') {
        console.log('32134');
        alert('El campo "APELLIDO" debe contener LETRAS y no estar vacio.')
        return false; 
    }

    if (isNaN(telefono) || telefono !='') {
        console.log('32134');
        alert('El campo "TELEFONO" debe contener NÚMEROS y no estar vacio.')
        return false; 
    }

    return true;
}