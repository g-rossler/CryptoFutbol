import htmlMenuInicio from "./pages/Inicio";
import htmlEquipo from "./pages/equipo";
import htmlClub from "./pages/club";
import htmlTorneo from "./pages/torneo";
import htmlTrasferencias from "./pages/transferencias";
import htmlBinvenida from "./pages/bienvenida";
import htmlLogIn from "./pages/login";
import crearEquipos from "../back/crearEquipo";
import datosTorneo from '../back/torneo'

function crearTablaTorneo() {
  const $tabla = document.querySelector('#tabla')
  const $tbody = document.createElement('tbody')
  for(let i = 0; i <= 9; i++){
    const $tr = document.createElement('tr')
    const $th = document.createElement('th')
    $th.scope = 'row'
    $th.innerText = datosTorneo[i].posicion
    const $club = document.createElement('td')
    $club.innerText = datosTorneo[i].nombre
    const $partidosJugados = document.createElement('td')
    $partidosJugados.innerText = datosTorneo[i].partidosJugados
    const $partidosGanados = document.createElement('td')
    $partidosGanados.innerText = datosTorneo[i].partidosGanados
    const $partidosPerdidos = document.createElement('td')
    $partidosPerdidos.innerText = datosTorneo[i].partidosPerdidos
    const $partidosEmpatados = document.createElement('td')
    $partidosEmpatados.innerText = datosTorneo[i].partidosEmpatados
    const $golesPositivos = document.createElement('td')
    $golesPositivos.innerText = datosTorneo[i].golesPositivos
    const $golesNegativos = document.createElement('td')
    $golesNegativos.innerText = datosTorneo[i].golesNegativos
    const $puntos = document.createElement('td')
    $puntos.innerText = datosTorneo[i].puntosTorneo
    const $boton = document.createElement('button')
    $boton.innerText = 'DETALLES'
    $boton.className = 'button-81'
    $boton.id = datosTorneo[i].nombre
    //$boton.addEventListener('click')

    $tr.appendChild($th)
    $tr.appendChild($club)
    $tr.appendChild($partidosJugados)
    $tr.appendChild($partidosGanados)
    $tr.appendChild($partidosPerdidos)
    $tr.appendChild($partidosEmpatados)
    $tr.appendChild($golesPositivos)
    $tr.appendChild($golesNegativos)
    $tr.appendChild($puntos)
    $tr.appendChild($boton)
    $tbody.appendChild($tr)
  }
  $tabla.appendChild($tbody)
}

function crearBotones() {
  document.querySelector("#boton-inicio").onclick = () =>
    crearInterfaz("menu de inicio");
  document.querySelector("#boton-equipo").onclick = () =>
    crearInterfaz("equipo");
  document.querySelector("#boton-club").onclick = () => crearInterfaz("club");
  document.querySelector("#boton-torneo").onclick = () =>
    crearInterfaz("torneo");
  document.querySelector("#boton-transferencias").onclick = () =>
    crearInterfaz("transferencias");
}

function crearInterfaz(pantalla) {
  if (pantalla === "menu de inicio") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlMenuInicio;
    crearBotones();
  } else if (pantalla === "equipo") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlEquipo;
    crearBotones();
  } else if (pantalla === "club") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlClub;
    crearBotones();
  } else if (pantalla === "torneo") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlTorneo;
    crearBotones();
    crearTablaTorneo()
  } else if (pantalla === "transferencias") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlTrasferencias;
    crearBotones();
  } else if (pantalla === "login") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlLogIn;
    document.querySelector("#boton-siguiente").onclick = () => {
      const datosEquipo = {
        nombreClub: document.querySelector("#input-nombre").value,
        keyPublica: document.querySelector("#key-publica").value,
        keySecreta: document.querySelector("#key-secreta").value,
        cantidadXLM: document.querySelector("#cantidad-XLM").value,
      };
      crearInterfaz("menu de inicio");
      crearEquipos(datosEquipo)
    };
  } else {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlBinvenida;
    document.querySelector("#boton-empezar").onclick = () =>
      crearInterfaz("login");
  }
}


export default crearInterfaz;
