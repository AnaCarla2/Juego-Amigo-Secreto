//Capturar el valor del campo de entrada:
let amigos = [];
// Funcion para agregar amigos
function agregarAmigos() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Validar que no este vacio
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return
    }

    // Validar que el nombre no exista ya (sin distinguir mayúsculas/minúsculas)
    let nombreExiste = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
    if (nombreExiste) {
        alert("Ese nombre ya fue agregado. Por favor, ingresa uno diferente.");
        return;
    }

    //Actualizar el array de amigos:
    amigos.push(nombre);

    //Limpiar el campo de entrada:
    document.querySelector("#amigo").value = "";

    actualizarLista();
}

//función para actualizar la lista de amigos

function actualizarLista() {
    //Obtener el elemento de la lista:
    let lista = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    lista.innerHTML = "";
    //Iterar sobre el array amigos y crear <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//Función para sortear los amigos
function sortearAmigos() {
    //Validar que haya amigos disponibles: 
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }


    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado en un elemento HTML
    const resultado = document.getElementById("resultado-sorteo");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉`;
}

function reiniciarJuego() {
    // Vaciar el arreglo de amigos
    amigos = [];

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Limpiar la lista visual
    let lista = document.getElementById("listaAmigos");
    if (lista) lista.innerHTML = "";

    // Limpiar el resultado del sorteo (y ocultarlo si es pantalla completa)
    let resultado = document.getElementById("resultado-sorteo");
    if (resultado) {
        resultado.innerHTML = "";
        resultado.classList.remove();
    }


}



