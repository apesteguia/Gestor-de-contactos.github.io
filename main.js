function recogerDatos() {
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre == '' || apellido == '' || telefono == '') {
        alert("Contacto no valido, Faltan campos!!");
        return; 
    }

    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = nombre;
    p2.textContent = apellido;
    p3.textContent = telefono;
    div.appendChild(p1, p2, p3);

    const currentDiv = document.getElementById('contactos');
    document.body.insertBefore(div, currentDiv);
}


