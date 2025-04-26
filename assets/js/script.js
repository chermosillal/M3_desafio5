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
    let html = "";// Generamos el HTML para mostrar las tareas
    for (let tarea of arregloTareas) {
        let check = tarea.check ? "checked" : ""; // Definimos si está marcada
        html += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" id="ck${tarea.id}" ${check}></td>
            <td><button onclick="borrar(${tarea.id})">Borrar</button></td>
        </tr>`;
    }
    tablaDeTareas.innerHTML = html; //Actualizamos el DOM
    //console.log(arregloTareas);
});
//---------------------------------FIN BOTON


//Funcion Borrar
function borrar(id) {
    // Encontramos el índice del elemento que queremos eliminar
    const indice = arregloTareas.findIndex(tarea => tarea.id === id);
    // Si se encuentra el índice (es diferente de -1), eliminamos el elemento con splice
    if (indice !== -1) { //comprobamos que relaqmente exista
        arregloTareas.splice(indice, 1); // Elimina 1 elemento en la posición del índice encontrado
    }

    // Generamos nuevamente el HTML después de eliminar la tarea
    let html = "";
    for (let tarea of arregloTareas) {
        let check = tarea.check ? "checked" : "";
        html += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" id="ck${tarea.id}" ${check}></td>
            <td><button onclick="borrar(${tarea.id})">Borrar</button></td>
        </tr>`;
    }
    tablaDeTareas.innerHTML = html;
    //console.log(arregloTareas);
}
//---------------------------------Fin Funcion Borrar
