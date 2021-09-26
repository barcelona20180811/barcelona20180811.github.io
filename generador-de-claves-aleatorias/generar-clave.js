/*Función principal | Generador de claves | Password Generator*/
function generarClave(long) {
  /*caracteres permitidos*/
  let caracteres =
      "Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$",
    clave = "",
    numero;

  /*creación de clave*/
  for (let i = 0; i < long; i++) {
    numero = getNumero(0, caracteres.length);
    clave += caracteres.substring(numero, numero + 1);
  }
  return clave;
}
