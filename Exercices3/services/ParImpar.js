/* funcion que lee un número y muestre si éste es par o impar. */
import {validVariable} from './Validacion.js'
import {show} from './Mostrar.js'

export function parImpar(number) {
    let num = parseInt(number)
    if (validVariable(num, 'numberGlobal')) {
        if (num % 2 === 0) {
            show(`El numero ${num} es Par`);
        } else {
            show(`El numero ${num} es Impar`);
        }
    } else {
        show(('El argumento ingresado no cumple las condiciones'))
    }
}