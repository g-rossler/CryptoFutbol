export function guardarEquipoLocalStorage(objetoEquipo) {
  const equipoAString = JSON.stringify(objetoEquipo);
  localStorage.setItem("ClubUsuario", equipoAString);
}

export function guardarDatosUsuarioLocalStorage(datos) {
  const datosUsuario = JSON.stringify(datos);
  localStorage.setItem("DatosUsuario", datosUsuario);
}


export function consultarDatosUsuarioLocalStorage() {
  const datosUsuario = JSON.parse(localStorage.getItem("DatosUsuario"));
  return datosUsuario;
}
