/*Función para generar un número aleatorio*/
function getNumero(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
