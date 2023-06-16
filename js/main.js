// Eventos

// Eventos del mouse

// Mostrar mensaje en una alerta -- funcion
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert("hola mundo");
}

// Mostrar mensaje en la consola -- escribir una funcion anonima
const consola = document.querySelector("#consola");
consola.addEventListener("mouseout", () => {
    console.log("Hola mundo");
})

// Agregar clase a un elemento -- switch color mode
const colorModeButton = document.querySelector("#color-mode");
const body = document.body;

colorModeButton.addEventListener("click", cambiarDeModoDeColor);

function cambiarDeModoDeColor() {
  body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")) {
    colorModeButton.innerText = "Cambiar a Light Mode";
  } else {
    colorModeButton.innerText = "Cambiar a Dark Mode";
  }
}

// Eventos de Fornularios

const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(alertaInput.value);
  alertaForm.reset();
});