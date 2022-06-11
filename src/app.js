import cambiarBackground from './ui.js'


const imagen = new URL("./imagenes/escudos/escudo.svg", import.meta.url);
const text = `
    <div class='bg-secondary'>hola</div>
    <img src="${imagen}"/>
    `;
function cambiarBackground(){
    const $aplicacion = document.querySelector('#aplicacion')
    $aplicacion.innerHTML = text
}

cambiarBackground()