/* funcion encargada de  mostrara el contenido */

export function show(content) {
    console.log(content);
    document.querySelector('.app').innerHTML += content + '<br>'
}