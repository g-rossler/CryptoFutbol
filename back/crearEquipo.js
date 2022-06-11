import { nanoid } from "nanoid";
import {
    nombresDeJugadores,
    apellidosJugadores,
    posiciones,
  } from './datos-jugadores';
import { nombresParaEquipos } from './datos-equipo'


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
    keyPrivada,
    jugadores
  ) {
    this.nombre = nombre;
    this.id = id;
    this.nacionalidad = nacionalidad;
    this.logo = logo;
    this.keyPublica = keyPublica;
    this.keyPrivada = keyPrivada;
    this.jugadores = {
      titulares: jugadores.titulares,
      suplentes: jugadores.suplentes,
      deshabilitados: jugadores.deshabilitados,
    };
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
export function crearTitulares() {
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
        "proximamente club",
        `avataaars${i}.png`
      )
    );
  }

  return titulares;
}

function crearSuplentes() {
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
        "proximamente club",
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
    `logo0.jpg`,
    datosEquipo.keyPublica,
    datosEquipo.keySecreta,
    {
      titulares: crearTitulares(),
      suplentes: crearSuplentes(),
      deshabilitados: [],
    }
  );

  return equipoNuevo.nombre;
}

function crearEquipos(datosEquipo) {
    crearEquipo(datosEquipo)
}

export default crearEquipos;
