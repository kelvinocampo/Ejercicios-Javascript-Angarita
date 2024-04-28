/* funcion encargada de validar los parametros */

export function validVariable(variable, type) {
    switch (type) {
        case 'string':
            if (typeof variable === 'string') {
                return true
            } else {
                return false
            }
        case 'number':
            if (typeof variable === 'number' && variable >= 0) {
                return true
            } else {
                return false
            }
        case 'numberGlobal':
            if (typeof variable === 'number') {
                return true
            } else {
                return false
            }
        default:
            break;
    }
}