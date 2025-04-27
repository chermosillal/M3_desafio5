//creamos las variables INICIALES
var numeroId = 0; // Variable para el incremental del ID
let arregloTareas = []; //Arreglo para almacenar tareas
const nuevaTarea = document.querySelector("#nuevaTarea"); // Texto del Input
const tablaDeTareas = document.querySelector("#tablaDeTareas"); // Tabla de tareas
const btnAgregar = document.querySelector("#agregaTarea"); // Botón para agregar tareas

/// BOTON DE AGREGAR TAREA
btnAgregar.addEventListener("click", () => {
    numeroId++;// Incrementamos el ID y lo usamos en la nueva tarea
    //creamos el nuevo elemento
    let tarea = { 
        id: numeroId, 
        nombre: nuevaTarea.value, 
        check: false 
    };
    arregloTareas.push(tarea);// Añadimos la tarea al arreglo
    nuevaTarea.value = ""; // Limpiamos el input para un nuevo ingreso
    actualizarTabla(); //funcion para actualizar tabla
});
//---------------------------------FIN BOTON


//FUNCION ACTUALIZAR TABLA DE TAREAS
function actualizarTabla() {
    let html = "";let sumaRealizadas = 0;
    for (let tarea of arregloTareas) {
        let check = tarea.check ? "checked" : "";
        html += `
        <tr>
            <td id="id${tarea.id}" class="${tarea.check ? "tachado" : ""}">${tarea.id}</td>
            <td id="tarea${tarea.id}" class="${tarea.check ? "tachado" : ""}">${tarea.nombre}</td>
            <td><input type="checkbox" id="ck${tarea.id}" ${check} onchange="marcarTarea(${tarea.id})"></td>
            <td><button onclick="borrar(${tarea.id})">Borrar</button></td>
        </tr>`;
        if (tarea.check==true){sumaRealizadas+=1 }//llevamos el conteo de las realizadas
    }
    tablaDeTareas.innerHTML = html;
    const tareasTotales = document.querySelector("#total");
    tareasTotales.textContent = arregloTareas.length;// actualizamos la cantidad de tareas
    const tareasRealizadas = document.querySelector("#realizadas"); 
    tareasRealizadas.textContent = sumaRealizadas;//hactualizamos las tareas hechas
}

//------------------------------------

//FUNCION MARCAR TAREA
function marcarTarea(id) {
    let tarea = arregloTareas.find(t => t.id === id);
    if (tarea) {
        tarea.check = !tarea.check; // Alternamos el estado "check"
        actualizarTabla(); // Regeneramos la tabla con el estado actualizado
    }
}
//------------------------------------

//FUNCION BORRAR
function borrar(id) {
    let indice = arregloTareas.findIndex(t => t.id === id);
    if (indice !== -1) {
        arregloTareas.splice(indice, 1); // Eliminamos la tarea del arreglo
        actualizarTabla(); // Regeneramos la tabla tras eliminar
    }
}