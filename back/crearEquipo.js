import { nanoid } from "nanoid";
import {
  nombresDeJugadores,
  apellidosJugadores,
  posiciones,
} from "./datos-jugadores";
import {
  consultarDatosUsuarioLocalStorage,
  guardarEquipoLocalStorage,
} from "../src/localStorage";
import habilidadesAleatorias from "../src/utilidades";

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
    jugadores,
    cantidadXLM
  ) {
    this.nombre = nombre;
    this.id = id;
    this.nacionalidad = nacionalidad;
    this.logo = logo;
    this.keyPublica = keyPublica;
    this.jugadores = {
      titulares: jugadores.titulares,
      suplentes: jugadores.suplentes,
      deshabilitados: jugadores.deshabilitados,
    };
    this.cantidadXLM = cantidadXLM;
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

export function crearTitulares(club) {
  const titulares = [];

  for (let i = 0; i < 11; i += 1) {
    titulares.push(
      new Jugador(
        nombresDeJugadores[i] + apellidosJugadores[i],
        nanoid(),
        {
          ataque: habilidadesAleatorias(),
          defensa: habilidadesAleatorias(),
          resistencia: habilidadesAleatorias(),
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
  for (let i = 11; i < 16; i += 1) {
    suplentes.push(
      new Jugador(
        nombresDeJugadores[i] + apellidosJugadores[i],
        nanoid(),
        {
          ataque: habilidadesAleatorias(),
          defensa: habilidadesAleatorias(),
          resistencia: habilidadesAleatorias(),
        },
        posiciones[i],
        club,
        `avataaars${i}.png`
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
    {
      titulares: crearTitulares(datosEquipo.nombreClub),
      suplentes: crearSuplentes(datosEquipo.nombreClub),
      deshabilitados: [],
    },
    datosEquipo.cantidadXLM
  );
  return equipoNuevo;
}

function crearEquipos() {
  const datosUsuario = consultarDatosUsuarioLocalStorage();
  const equipoUsuario = crearEquipo(datosUsuario);
  guardarEquipoLocalStorage(equipoUsuario);
}

export default crearEquipos;
