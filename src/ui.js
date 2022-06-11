import menuInicio from './pages/Inicio'

export default function cambiarBackground(){
    const $aplicacion = document.querySelector('#aplicacion')
    $aplicacion.innerHTML = menuInicio
}