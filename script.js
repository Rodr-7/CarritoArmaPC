
function calcularTotal() {
  let total = 0;

  // Obtener cada select por su id
  const selectPlaca = Number(document.getElementById("placa-madre").value);
  const selectProcesador = Number(document.getElementById("procesador").value);
  const selectRam = Number(document.getElementById("ram").value);
  const selectGrafica = Number(document.getElementById("grafica").value);

  // Suma el precio de la opción seleccionada en cada select
  total = selectPlaca + selectProcesador + selectRam + selectGrafica;

  document.getElementById("resultado").textContent = "Total: $" + total;
}

//------------- Calculo de precio ----------------------------------------
const selectPlaca = document.getElementById('placa-madre');
const selectProcesador = document.getElementById('procesador');
const selectRam = document.getElementById('ram');
const selectGrafica = document.getElementById('grafica');

// Agregar un evento 'change' a cada select para recalcular el total al cambiar la selección
const selects = document.querySelectorAll('.componente');// Todos los selects que tienen la clase "componente"


selectPlaca.addEventListener('change', function(event) {
  // Código a ejecutar cuando cambia la selección
  calcularTotal();
  console.log('Nuevo valor:', event.target.value);
});

selectProcesador.addEventListener('change', function(event) {
  // Código a ejecutar cuando cambia la selección
  calcularTotal();
  console.log('Nuevo valor:', event.target.value);
});

selectRam.addEventListener('change', function(event) {
  // Código a ejecutar cuando cambia la selección
  calcularTotal();
  console.log('Nuevo valor:', event.target.value);
});

selectGrafica.addEventListener('change', function(event) {
  // Código a ejecutar cuando cambia la selección
  calcularTotal();
  console.log('Nuevo valor:', event.target.value);
});

//-------------------------------------------------------------------------------------
//------------- Validaciones --------------------------------------------------
//------------- Validacion de nombre -----------------

function ValidaNombre(nombre) {
  const regex = /^(?=.*[a-zA-Z])[a-zA-Z\s]+$/;
  return regex.test(nombre);
/* Explicacion del regex: 
- El ^ indica el inicio de la cadena.
(?= ... ) verifica que lo que está dentro de los paréntesis ocurra en algún lugar de la cadena, pero no consume caracteres (no forma parte del resultado final, solo verifica).
.* significa "cualquier cantidad de caracteres" (incluyendo ninguno).
 caracteres permitidos:  
  - a-z son las letras minúsculas.
  - A-Z son las letras mayúsculas.
  - \s representa cualquier espacio en blanco.
- El signo + significa que debe haber al menos un carácter del conjunto anterior (pueden ser varios).
- El $ indica el final de la cadena.*/
}

//------------- Validacion de email -----------------
function ValidaEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*constante que almacena la expresión regular para validar el formato del correo electrónico*/
  return regex.test(email);
}

  // Código que se ejecuta cuando se envía el formulario
document.getElementById('Formulario').addEventListener('submit', function(event) { //El evento 'submit' ocurre cuando el usuario intenta enviar el formulario (por ejemplo, al hacer clic en un botón de tipo submit).

event.preventDefault(); // Evita que el formulario se envíe y recargue la página

const nombre = document.getElementById('nombre').value; // Obtiene el valor del campo nombre
const email = document.getElementById('email').value; // Obtiene el valor del campo email
const validNombre = document.getElementById('NombreValid');   // Obtiene el elemento donde se mostrará el mensaje
const validEmail = document.getElementById('EmailValid');   // Obtiene el elemento donde se mostrará el mensaje
const validDireccion = document.getElementById('DirecciónValid');   // Obtiene el elemento donde se mostrará el mensaje


if (ValidaEmail(email)) { // Si el email es válido
    validEmail.textContent = "Email válido";   // Muestra mensaje de éxito para email
    validEmail.style.color = "green";          // Cambia el color del mensaje a verde
} else { // Si el email no es válido
    validEmail.textContent = "Email inválido"; // Muestra mensaje de error para email
    validEmail.style.color = "red";            // Cambia el color del mensaje a rojo
}

if (ValidaNombre(nombre)) {
    validNombre.textContent = "Nombre válido";   // Muestra mensaje de éxito para nombre
    validNombre.style.color = "green";          // Cambia el color del mensaje a verde
} else { // Si el nombre no es válido
    validNombre.textContent = "Nombre inválido"; // Muestra mensaje de error para nombre
    validNombre.style.color = "red";            // Cambia el color del mensaje a rojo
}
});
