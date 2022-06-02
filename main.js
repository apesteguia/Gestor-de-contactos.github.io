const boton = document.getElementById('button');
const contactos = document.querySelector("contactos");
const ul = document.getElementById("datos_ul");
const div = document.getElementById("div");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let telefono = document.getElementById('telefono');
    if (nombre.value == '' || apellido.value == '' || telefono.value == '') {
        alert("Campos vacios o incorrectos!");
        return;
    }
    const datos = [nombre.value, apellido.value, telefono.value];
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = "    "+nombre.value+"    "+apellido.value+"  :    "+telefono.value;
    li.appendChild(añadirBoton());
    li.appendChild(p);
    ul.appendChild(li);
    div.appendChild(ul);
    
    nombre.value= "";
    apellido.value= "";
    telefono.value= "";
});

function añadirBoton() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn_delete";
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    })
    return deleteBtn;
}