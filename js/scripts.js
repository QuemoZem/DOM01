let numeroMagico;

function generarNumeroMagico() {
  return Math.floor(Math.random() * 100) + 1;
}

function comenzarJuego() {
  numeroMagico = generarNumeroMagico();
  console.log(numeroMagico);
  document.getElementById("botonComenzar").style.display = "none";
  document.getElementById("juegoArea").style.display = "block";
}

function verificarAdivinanza() {
  const verificarInput = document.getElementById("verificarInput");
  const verificador = parseInt(verificarInput.value);

  if (isNaN(verificador)) {
    alert("Por favor, ingresa un número válido.");
  } else {
    if (verificador === numeroMagico) {
      alert("¡Adivinaste el número!");
      reiniciarJuego();
    } else if (verificador < numeroMagico) {
      alert("El número que ingresaste es menor.");
    } else {
      alert("El número que ingresaste es mayor.");
    }
  }
}
