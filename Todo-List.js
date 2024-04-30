let tareasSecretaria = [
    { nombre: "Organizar reuniones", estado: "incompleto", activo: true },
    { nombre: "Redactar correos electrónicos", estado: "completado", activo: true},
    { nombre: "Actualizar agendas", estado: "incompleto", activo: true },
    { nombre: "Gestionar documentación", estado: "completado", activo: true },
    { nombre: "Atender llamadas telefónicas", estado: "incompleto", activo: true },
    { nombre: "Preparar informes", estado: "incompleto", activo: true },
    { nombre: "Archivar documentos", estado: "incompleto", activo: false },
    { nombre: "Recibir visitas", estado: "incompleto", activo: true },
    { nombre: "Coordinar viajes", estado: "completado", activo: true },
    { nombre: "Elaborar presentaciones", estado: "incompleto", activo: true },
    { nombre: "Actualizar bases de datos", estado: "incompleto", activo: true },
    { nombre: "Enviar recordatorios", estado: "completado", activo: false },
    { nombre: "Ordenar suministros de oficina", estado: "incompleto", activo: true },
    { nombre: "Hacer seguimiento de pedidos", estado: "incompleto", activo: true },
    { nombre: "Reservar salas de reuniones", estado: "incompleto", activo: true },
    { nombre: "Tramitar facturas", estado: "incompleto", activo: true },
    { nombre: "Realizar copias de seguridad", estado: "incompleto", activo: true },
    { nombre: "Coordinar servicios de mensajería", estado: "incompleto", activo: true },
    { nombre: "Elaborar informes financieros", estado: "completado", activo: true },
    { nombre: "Actualizar redes sociales", estado: "incompleto", activo: true }
  ];

//localStorage
function cargarLocalStorage() {
    const tareasGuardadas = localStorage.getItem('tareasSecretaria');
    if (tareasGuardadas) {
        tareasSecretaria = JSON.parse(tareasGuardadas);
    }
}

function guardarLocalStorage() {
    localStorage.setItem('tareasSecretaria', JSON.stringify(tareasSecretaria));
}


    
  // Función para mostrar las tareas
function mostrarTareas() {
    let tareas_activas = tareasSecretaria.filter(tarea => tarea.activo === true);
    let listaTareas = document.getElementById('lista-tareas');
    
    listaTareas.innerHTML = '';
  
    tareas_activas.forEach(tarea => {
        let col = document.createElement('div');
        col.classList.add('col-sm-4', 'col-md-4', 'col-lg-4', 'col-xl-4');
        
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        cardBody.textContent = tarea.nombre;

         // botón de eliminar
         let botonEliminar = document.createElement('button');
         botonEliminar.textContent = 'Eliminar';
         botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
 
         botonEliminar.addEventListener('click', function() {
             eliminarTarea(tarea.nombre);
         });
         cardBody.appendChild(botonEliminar);

        // checkbox 
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.estado === 'completado';
        checkbox.addEventListener('change', function() {
            tarea.estado = checkbox.checked ? 'completado' : 'incompleto';
        });
        //acomoda las tarjetas
        cardBody.appendChild(checkbox);
        card.appendChild(cardBody);
        col.appendChild(card);
        listaTareas.appendChild(col);
    });

}

// Función para agregar una nueva tarea
function agregarTarea(nombreTarea) {
    let nuevaTarea = {
        nombre: nombreTarea,
        estado: "incompleto", 
        activo: true 
    };
    tareasSecretaria.push(nuevaTarea);
    mostrarTareas();

 // Limpiar la caja de texto
    document.getElementById("tarea").value = "";
}

function ObtenerTarea() {
 let tarea = document.getElementById("tarea").value;
 agregarTarea(tarea);
}

document.addEventListener('DOMContentLoaded', function() {
    cargarLocalStorage(); //llama al localstorage !
    mostrarTareas();
 });
 

// Función para eliminar una tarea
function eliminarTarea(nombreTarea) {
    tareasSecretaria = tareasSecretaria.filter(tarea => tarea.nombre !== nombreTarea);
    guardarLocalStorage();
    mostrarTareas();
}







