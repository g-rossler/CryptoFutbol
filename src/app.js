import crearInterfaz from "./ui";
import { guardarDatosUsuarioLocalStorage } from "./localStorage";
import { crearCompraInicialToken } from "../back/transaccionesStellar";

export default function inicio() {
  crearInterfaz("login");
}

export async function crearJuego() {
  const datosFormulario = {
    nombreClub: document.querySelector("#input-nombre").value,
    keyPublica: document.querySelector("#key-publica").value,
    cantidadXLM: document.querySelector("#cantidad-XLM").value,
  };
  guardarDatosUsuarioLocalStorage(datosFormulario);
  await crearCompraInicialToken();
  //await crearEquipos(datosEquipo);

  //crearInterfaz("menu de inicio");
}
