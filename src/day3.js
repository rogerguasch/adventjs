/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
 *
 * Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
 *
 * Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
 *
 * ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
 *
 * Ejemplos:
 *
 * "bici coche (balón) bici coche peluche" // -> ✅
 * "(muñeca) consola bici" // ✅
 *
 * "bici coche (balón bici coche" // -> ❌
 * "peluche (bici [coche) bici coche balón" // -> ❌
 * "(peluche {) bici" // -> ❌
 * "() bici" // ❌
 *
 * Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
 */

const letter = "bici coche (balón) bici coche peluche";
// const letter = "(muñeca) consola bici";
// const letter = "bici coche (balón bici coche";
// const letter = "peluche (bici [coche) bici coche balón";
// const letter = "(peluche {) bici";
// const letter = "() bici";

export default function isValid(letter) {
  if (letter.includes("{") || letter.includes("[")) {
    return false;
  }

  if (letter.includes("()")) {
    return false;
  }

  if (letter.includes("(") && !letter.includes(")")) {
    return false;
  }

  return true;
}

isValid(letter);
