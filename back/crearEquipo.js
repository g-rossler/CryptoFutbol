import { nanoid } from "nanoid";
import {
  nombresDeJugadores,
  apellidosJugadores,
  posiciones,
} from "./datos-jugadores";

class Jugador {
  constructor(nombre, id, habilidades, posicion, club, imagenPerfil) {
    this.nombre = nombre;
    this.id = id;
    this.habilidades = {
      ataque: habilidades.ataque,
      defensa: habilidades.defensa,
      resistencia: habilidades.resistencia,
    };
    this.posicion = posicion;
    this.club = club;
    this.imagenPerfil = imagenPerfil;
  }

  puedeJugar = true;

  jugadorEnVenta = false;
}

class Equipo {
  constructor(
    nombre,
    id,
    nacionalidad,
    logo,
    keyPublica,
    keySecreta,
    jugadores,
    cantidadXLM
  ) {
    this.nombre = nombre;
    this.id = id;
    this.nacionalidad = nacionalidad;
    this.logo = logo;
    this.keyPublica = keyPublica;
    this.keySecreta = keySecreta;
    this.jugadores = {
      titulares: jugadores.titulares,
      suplentes: jugadores.suplentes,
      deshabilitados: jugadores.deshabilitados,
    };
    this.cantidadXLM = cantidadXLM
  }

  puntosTorneo = 0;

  partidosJugados = 0;

  partidosGanados = 0;

  partidosPerdidos = 0;

  partidosEmpatados = 0;

  golesPositivos = 0;

  golesNegativos = 0;

  posicionTorneo = "";

  anioCreacion = "2022";

  fixture = {};
}

function numeroAleatorio(min, max) {
  const num = Math.random() * (max - min);
  const resultado = Math.floor(num + min);
  return resultado;
}

function specsAleatorias() {
  const resultado = Math.ceil(Math.random() * 20) + 50;
  return resultado;
}
export function crearTitulares(club) {
  const titulares = [];

  for (let i = 0; i < 11; i += 1) {
    titulares.push(
      new Jugador(
        // eslint-disable-next-line operator-linebreak
        nombresDeJugadores[numeroAleatorio(0, nombresDeJugadores.length)] +
          apellidosJugadores[numeroAleatorio(0, apellidosJugadores.length)],
        nanoid(),
        {
          ataque: specsAleatorias(),
          defensa: specsAleatorias(),
          resistencia: specsAleatorias(),
        },
        posiciones[i],
        club,
        `avataaars${i}.png`
      )
    );
  }

  return titulares;
}

function crearSuplentes(club) {
  const suplentes = [];
  for (let i = 0; i < 5; i += 1) {
    suplentes.push(
      new Jugador(
        // eslint-disable-next-line operator-linebreak
        nombresDeJugadores[numeroAleatorio(0, nombresDeJugadores.length)] +
          apellidosJugadores[numeroAleatorio(0, apellidosJugadores.length)],
        nanoid(),
        {
          ataque: specsAleatorias(),
          defensa: specsAleatorias(),
          resistencia: specsAleatorias(),
        },
        posiciones[i],
        club,
        `avataaars${i + 11}.png`
      )
    );
  }

  return suplentes;
}

function crearEquipo(datosEquipo) {
  const equipoNuevo = new Equipo(
    datosEquipo.nombreClub,
    nanoid(),
    "Argentina",
    `logo9.jpg`,
    datosEquipo.keyPublica,
    datosEquipo.keySecreta,
    {
      titulares: crearTitulares(datosEquipo.nombreClub),
      suplentes: crearSuplentes(datosEquipo.nombreClub),
      deshabilitados: [],
    },
    datosEquipo.cantidadXLM
  );
  return equipoNuevo
}
const guardarEquipoEnLocalStorage = (objetoEquipo) => {
    const equipoAString = JSON.stringify(objetoEquipo);
    localStorage.setItem('ClubUsuario', equipoAString);
  };

function crearEquipos(datosEquipo) {
  const equipoUsuario = crearEquipo(datosEquipo);
  guardarEquipoEnLocalStorage(equipoUsuario);
}

export default crearEquipos;
