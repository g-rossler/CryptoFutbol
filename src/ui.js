import text from './pages/Inicio'

export default function cambiarBackground(){
    const $aplicacion = document.querySelector('#main')
    $aplicacion.innerHTML = text
}