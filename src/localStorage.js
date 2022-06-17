export function guardarEquipoLocalStorage(objetoEquipo) {
  const equipoAString = JSON.stringify(objetoEquipo);
  localStorage.setItem("ClubUsuario", equipoAString);
}

export function guardarDatosUsuarioLocalStorage(datos) {
  const datosUsuario = JSON.stringify(datos);
  localStorage.setItem("DatosUsuario", datosUsuario);
}

export function guardarFTOKUsuarioLocalStorage(datos) {
  const datosUsuario = JSON.stringify(datos);
  localStorage.setItem("FTOK", datosUsuario);
}

export function consultarDatosUsuarioLocalStorage() {
  const datosUsuario = JSON.parse(localStorage.getItem("DatosUsuario"));
  return datosUsuario;
}

export function consultarFTOKUsuarioLocalStorage() {
  const datosUsuario = JSON.parse(localStorage.getItem("FTOK"));
  return datosUsuario;
}
