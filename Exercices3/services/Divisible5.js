/* funcion que lee un número y muestre 
si éste es divisible entre cinco o no. */
import {absolute} from './ValorAbsoluto.js'
import {validVariable} from './Validacion.js'
import {show} from './Mostrar.js'

export function divIn5(number) {
    let num = number >= 0 ? parseInt(number) : absolute(number)
    if (validVariable(num, 'number')) {
        if (num % 5 === 0) {
            show(`El numero ${num} es Divisible entre 5`);
        } else {
            show(`El numero ${num} no es Divisible entre 5`);
        }
    } else {
        show(('El argumento ingresado no cumple las condiciones'));
    }
}