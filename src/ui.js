import htmlMenuInicio from "./pages/Inicio";
import htmlEquipo from "./pages/equipo";
import htmlClub from "./pages/club";
import htmlTorneo from "./pages/torneo";
import htmlTrasferencias from "./pages/transferencias";
import htmlLogIn from "./pages/login";
import htmlTorneoDetalle from "./pages/TorneoDetalle";
import htmlTransferenciaExitosa from "./pages/tranferenciaExitosa";
import htmlPremio from "./pages/premio";
import crearEquipos from "../back/crearEquipo";
import datosTorneo from "../back/torneo";
import datoJugadoresBrasil from "../back/datoEquipoBrasil";
import { comprarJugador, entregarPremio, crearToken } from "../back/transaccionesStellar";
import { crearJuego } from "./app";

function crearBotonCompra() {
  const $botonesCompra = document.querySelector(".boton-comprar-jugador");
  $botonesCompra.addEventListener("click", () => comprarJugador());
}

function crearTablaTorneo() {
  const $tabla = document.querySelector("#tabla");
  const $tbody = document.createElement("tbody");
  $tbody.id = 'tbody'
  for (let i = 0; i <= 9; i++) {
    const $tr = document.createElement("tr");
    const $th = document.createElement("th");
    $th.scope = "row";
    $th.innerText = datosTorneo[i].posicion;
    const $club = document.createElement("td");
    $club.innerText = datosTorneo[i].nombre;
    const $partidosJugados = document.createElement("td");
    $partidosJugados.innerText = datosTorneo[i].partidosJugados;
    const $partidosGanados = document.createElement("td");
    $partidosGanados.innerText = datosTorneo[i].partidosGanados;
    const $partidosPerdidos = document.createElement("td");
    $partidosPerdidos.innerText = datosTorneo[i].partidosPerdidos;
    const $partidosEmpatados = document.createElement("td");
    $partidosEmpatados.innerText = datosTorneo[i].partidosEmpatados;
    const $golesPositivos = document.createElement("td");
    $golesPositivos.innerText = datosTorneo[i].golesPositivos;
    const $golesNegativos = document.createElement("td");
    $golesNegativos.innerText = datosTorneo[i].golesNegativos;
    const $puntos = document.createElement("td");
    $puntos.innerText = datosTorneo[i].puntosTorneo;
    const $containerBoton = document.createElement("td");
    const $boton = document.createElement("button");
    $boton.innerText = "DETALLES";
    $boton.className = "button-81";
    $boton.id = datosTorneo[i].nombre;
    $boton.addEventListener("click", () =>
      crearInterfaz("detalle equipo torneo")
    );

    $containerBoton.appendChild($boton);
    $tr.appendChild($th);
    $tr.appendChild($club);
    $tr.appendChild($partidosJugados);
    $tr.appendChild($partidosGanados);
    $tr.appendChild($partidosPerdidos);
    $tr.appendChild($partidosEmpatados);
    $tr.appendChild($golesPositivos);
    $tr.appendChild($golesNegativos);
    $tr.appendChild($puntos);
    $tr.appendChild($containerBoton);
    $tbody.appendChild($tr);
  }
  $tabla.appendChild($tbody);
}

function crearJugadoresTitulares(baseDatos) {
  const $tabla = document.querySelector("#tabla-titulares");
  const $tbody = document.createElement("tbody");
  for (let i = 0; i <= 10; i++) {
    const $tr = document.createElement("tr");
    const $th = document.createElement("th");
    $th.scope = "row";
    $th.innerText = baseDatos.jugadores.titulares[i].posicion;
    const $nombre = document.createElement("td");
    $nombre.innerText = baseDatos.jugadores.titulares[i].nombre;
    const $atq = document.createElement("td");
    $atq.innerText =
    baseDatos.jugadores.titulares[i].habilidades.ataque;
    const $def = document.createElement("td");
    $def.innerText =
    baseDatos.jugadores.titulares[i].habilidades.defensa;
    const $res = document.createElement("td");
    $res.innerText =
    baseDatos.jugadores.titulares[i].habilidades.resistencia;

    $tr.appendChild($th);
    $tr.appendChild($nombre);
    $tr.appendChild($atq);
    $tr.appendChild($def);
    $tr.appendChild($res);
    $tbody.appendChild($tr);
  }
  $tabla.appendChild($tbody);
}

function crearJugadoresSuplentes(baseDatos) {
  const $tabla = document.querySelector("#tabla-suplentes");
  const $tbody = document.createElement("tbody");
  for (let i = 0; i <= 4; i++) {
    const $tr = document.createElement("tr");
    const $th = document.createElement("th");
    $th.scope = "row";
    $th.innerText = baseDatos.jugadores.suplentes[i].posicion;
    const $nombre = document.createElement("td");
    $nombre.innerText = baseDatos.jugadores.suplentes[i].nombre;
    const $atq = document.createElement("td");
    $atq.innerText =
    baseDatos.jugadores.suplentes[i].habilidades.ataque;
    const $def = document.createElement("td");
    $def.innerText =
    baseDatos.jugadores.suplentes[i].habilidades.defensa;
    const $res = document.createElement("td");
    $res.innerText =
    baseDatos.jugadores.suplentes[i].habilidades.resistencia;

    $tr.appendChild($th);
    $tr.appendChild($nombre);
    $tr.appendChild($atq);
    $tr.appendChild($def);
    $tr.appendChild($res);
    $tbody.appendChild($tr);
  }
  $tabla.appendChild($tbody);
}

function crearEquipoDetalle(baseDatos) {
  crearJugadoresTitulares(baseDatos);
  crearJugadoresSuplentes(baseDatos);
}

function verificarSaldo() {
  const datosUsuario = JSON.parse(localStorage.getItem("ClubUsuario"));
  document.querySelector('#ftok-saldo').innerText = `${datosUsuario.cantidadXLM} $FTOK` 
}

function crearBotones() {
  document.querySelector("#siguiente-fecha").onclick = () =>
  entregarPremio();
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

export function crearInterfaz(pantalla) {
  if (pantalla === "menu de inicio") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlMenuInicio;
    crearBotones();
    const datosUsuario = JSON.parse(localStorage.getItem("ClubUsuario"));
    document.querySelector(
      "#nombre-club"
    ).innerText = `BIENVENIDO ${datosUsuario.nombre}`;
    verificarSaldo()
  } else if (pantalla === "equipo") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlEquipo;
    crearBotones();
    const datosUsuario = JSON.parse(localStorage.getItem("ClubUsuario"))
    crearEquipoDetalle(datosUsuario)
    verificarSaldo()
  } else if (pantalla === "club") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlClub;
    crearBotones();
    document.querySelector('#club-nombre-club').innerText = `${datosUsuario.nombre}`
    document.querySelector('#club-id').innerText = `${datosUsuario.keyPublica}`
    verificarSaldo()
  } else if (pantalla === "premio") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlPremio;
    crearBotones();
    verificarSaldo()
  } else if (pantalla === "torneo") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlTorneo;
    crearBotones();
    crearTablaTorneo();
    verificarSaldo()
  } else if (pantalla === "detalle equipo torneo") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlTorneoDetalle;
    crearBotones();
    crearEquipoDetalle(datoJugadoresBrasil);
    verificarSaldo()
  } else if (pantalla === "transferencias") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlTrasferencias;
    crearBotones();
    crearBotonCompra();
    verificarSaldo()
  } else if (pantalla === "transferencia exitosa") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlTransferenciaExitosa;
    crearBotones();
    verificarSaldo()
  } else if (pantalla === "login") {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlLogIn;
    document.querySelector("#boton-siguiente").onclick = () => {
      crearJuego()
    };
  }
}

export default crearInterfaz;
