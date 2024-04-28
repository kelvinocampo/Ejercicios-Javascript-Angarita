/* funcion encargado a del valor absoluto / Alternativa Math.abs() */

export function absolute(input) {
    if (input < 0) {
        return -(input);
    }
    return input
}