import menuInicio from './pages/Inicio'
import { text } from './pages/Inicio2'

export default function cambiarBackground(){
    const $aplicacion = document.querySelector('#aplicacion')
    $aplicacion.innerHTML = text
}