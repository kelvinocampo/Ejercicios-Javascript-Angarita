/* funcion que lee los tres ángulos 
internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. */
import {validVariable} from './Validacion.js'
import {show} from './Mostrar.js'

export function validarAngulos(ang1, ang2, ang3) {
    if (validVariable(ang1, 'number') && validVariable(ang2, 'number') && validVariable(ang3, 'number')) {
        let suma = ang1 + ang2 + ang3
        if (suma == 180) {
            show((`Los tres angulos corresponden a un triangulo`))
        } else {
            show((`Los tres angulos no corresponden a un triangulo`))
        }
    } else {
        show(('Alguno de los angulos no cumple las condiciones'))
    }
}