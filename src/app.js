import * as bootstrap from 'bootstrap';
import crearInterfaz from './ui'
import crearEquipos from '../back/crearEquipo';


function main() {
    crearInterfaz('')
    crearEquipos()
}

main()

/*
const $botonGenerarEquipo = document.querySelector('#boton-crear-equipo');
$botonGenerarEquipo.onclick = () => {
  const equipoSeleccionado = crearEquipo();
  const equipoEnLocalStorage = JSON.parse(
    localStorage.getItem(equipoSeleccionado),
  );
  const $botonEquipo = document.querySelector('#boton-equipo');
  $botonEquipo.onclick = () => crearTablaJugadores(equipoEnLocalStorage);
};
*/