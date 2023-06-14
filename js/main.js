// Eventos

// Eventos del mouse

// Mostrar mensaje en una alerta -- funcion
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert("hola mundo");
}

// Mostrar mensaje en la consola
const consola = document.querySelector("#consola");
consola.addEventListener("click", () => {
    console.log("Hola mundo");
})