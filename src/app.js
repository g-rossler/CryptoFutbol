import crearInterfaz from "./ui";
import { guardarDatosUsuarioLocalStorage } from "./localStorage";
import { crearCompraInicialToken } from "../back/transaccionesStellar";
import crearEquipos from "../back/crearEquipo";

export default function inicio() {
  crearInterfaz("login");
}

export async function crearJuego() {
  const datosFormulario = {
    nombreClub: document.querySelector("#input-nombre").value,
    keyPublica: document.querySelector("#key-publica").value,
    cantidadXLM: (
      Number(document.querySelector("#cantidad-XLM").value) - 20
    ).toString(),
  };
  guardarDatosUsuarioLocalStorage(datosFormulario);
  await crearCompraInicialToken();
  await crearEquipos(datosFormulario);

  crearInterfaz("menu de inicio");
}
