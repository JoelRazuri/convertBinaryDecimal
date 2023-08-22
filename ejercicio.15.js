/* 
    Programa una función para convertir números de base binaria a decimal y viceversa, 
    pe. miFuncion(100,2) devolverá 4 base 10.
*/

const convertBinaryDecimal = (num = undefined, base = undefined) => {
    if (num === undefined) return console.warn("No ingresaste el número a convertir");
    if (typeof num !== "number") return console.error(`El valor num:'${num}' ingresado, NO es un número`);
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    if (typeof base !== "number") return console.error(`El valor base:'${base}' ingresado, NO es un número`);

    if (base === 2) {
        return console.info(`${num} base ${base} = ${parseInt(num, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${num} base ${base} = ${(num.toString(base))} base 2`);
    } else {
        return console.error("El tipo de base a convertir NO es válido");
    }
}

console.info("EJERCICIO 15");
convertBinaryDecimal();
convertBinaryDecimal(20);
convertBinaryDecimal("2");
convertBinaryDecimal(10, "2");
convertBinaryDecimal(100, 2);
convertBinaryDecimal(100, 10);

