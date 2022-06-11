import htmlMenuInicio from "./pages/Inicio";
import htmlEquipo from "./pages/equipo";
import htmlClub from "./pages/club";
import htmlTorneo from "./pages/torneo";
import htmlTrasferencias from "./pages/transferencias";
import htmlBinvenida from "./pages/bienvenida";
import htmlLogIn from "./pages/login";
import crearEquipos from "../back/crearEquipo";

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
      console.log(datosEquipo)
      crearEquipos(datosEquipo)
    };
  } else {
    const $aplicacion = document.querySelector("#main");
    $aplicacion.innerHTML = htmlBinvenida;
    document.querySelector("#boton-empezar").onclick = () =>
      crearInterfaz("login");
  }
}

export function mostrarEquipo(objetoEquipo) {
  const $botonEquipo = document.querySelector("#boton-equipo");
  $botonEquipo.classList.remove("oculto");
  $botonEquipo.classList.add("button-81");
  $botonEquipo.classList.add("mx-2");
  const $divTablaEquipo = document.querySelector("#tabla-equipo");
  const $h2NombreEquipo = document.querySelector("#nombre-equipo");
  const $logoEquipo = document.querySelector("#logo-equipo");
  const $logoEquipoChico = document.querySelector("#logo-equipo-chico");
  const $botonGenerarEquipo = document.querySelector("#boton-crear-equipo");

  $h2NombreEquipo.textContent = `Bienvenido ${objetoEquipo.nombre}`;
  $divTablaEquipo.classList.remove("oculto");
  $divTablaEquipo.classList.add("text-center");
  $divTablaEquipo.classList.add("d-flex");
  $divTablaEquipo.classList.add("flex-column");

  $logoEquipo.src = `./imagenes/imagenesEquipos/${objetoEquipo.logo}`;
  $logoEquipoChico.src = `./imagenes/imagenesEquipos/${objetoEquipo.logo}`;
  $botonGenerarEquipo.className = "oculto";
}

export function crearTablaJugadores(objetoEquipo) {
  const $divTablaEquipo = document.querySelector("#tabla-equipo");
  $divTablaEquipo.classList = "oculto";
  const $tablaSuplentes = document.querySelector("#tabla-suplentes");
  $tablaSuplentes.classList.remove("oculto");
  const $detallesEquipoSuplente = document.querySelector(
    "#detalles-equipo-suplente"
  );
  const $specsEnTablaSuplentes = document.querySelector(
    "#contenido-tabla-equipo-suplentes"
  );
  $specsEnTablaSuplentes.innerHTML = "";
  objetoEquipo.jugadores.suplentes.forEach((jugador) => {
    const nuevoJugador = document.createElement("tr");
    nuevoJugador.innerHTML = `
        <th scope="row">${`${jugador.nombre} ID: ${jugador.id}`}</th>
        <td>${jugador.habilidades.ataque}</td>
        <td>${jugador.habilidades.defensa}</td>
        <td>${jugador.habilidades.resistencia}</td>`;
    $detallesEquipoSuplente.append(nuevoJugador);
  });
}

export default crearInterfaz;
