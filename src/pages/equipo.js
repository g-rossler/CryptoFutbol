const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);
const urlArrow = new URL ("../imagenes/arrow.svg", import.meta.url);

const htmlEquipo = `<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
<div class="container-fluid d-flex flex-row justify-content-between" id="navbar">
  <div class="d-flex flex-row align-items-center justify-content-center px-4 py-1 bor-der" id="logo">
    <img src="${urlLogo}" alt="" class="" />
    <p class="text-white text-center m-0 ps-3 fs-3 fw-bold">CryptoFutbol</p>
  </div>

  <div class="d-flex flex-row align-items-center justify-content-center px-4 py-1">
    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">
      CUENTA 4064646465
    </p>

    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold" id='ftok-saldo'>1000$FTOK</p>
  </div>

  <div class="d-flex flex-row align-items-center justify-content-between px-4 py-1" id="siguiente-fecha">
    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">SIGUIENTE PARTIDO</p>

    <div>
      <img src="${urlArrow}" alt="" class="ps-1" />
    </div>
  </div>
</div>

<div id="principal" class="d-flex flex-row">
  <div id="container-tabla-principal">
    <table class="table text-white text-center" id="tabla-titulares">
      <thead id="tabla-primera-fila">
        <tr>
          <th scope="col">POS</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">ATQ</th>
          <th scope="col">DEF</th>
          <th scope="col">RES</th>
        </tr>
      </thead>
    </table>
  </div>

  <div
    class="d-flex flex-column justify-content-start align-items-start"
    id="container-tabla-secundaria"
  >
    <div class="d-flex flex-column mb-2" id="container-tabla-derecha">
      <div
        class="d-flex flex-row justify-content-evenly align-items-center"
        id="container-tabla-habilidades"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          id="promedio-ataque"
        >
          <p class="fw-bold fs-1">60</p>
          <p class="fw-bold fs-2">ATQ</p>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          id="promedio-defensa"
        >
          <p class="fw-bold fs-1">55</p>
          <p class="fw-bold fs-2">DEF</p>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
          id="promedio-resistencia"
        >
          <p class="fw-bold fs-1">53</p>
          <p class="fw-bold fs-2">RES</p>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-center align-items-center"
        id="container-botones-habilidades"
      >
        <button class="button-26 mx-2">SUSTITUIR</button>
        <button class="button-26 mx-2">VENDER</button>
        <button class="button-26 mx-2">ELIMINAR</button>
      </div>
    </div>

    <div id="container-tabla-suplentes">
      <table class="table text-white text-center" id="tabla-suplentes">
        <thead id="tabla-primera-fila">
          <tr>
            <th scope="col">POS</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">ATQ</th>
            <th scope="col">DEF</th>
            <th scope="col">RES</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>

<div
  id="menu-botones"
  class="container-fluid d-flex flex-row justify-content-center py-3"
>
  <button class="button-81 mx-2" role="button" id="boton-inicio">
    INICIO
  </button>
  <button class="button-81 mx-2" role="button" id="boton-equipo">
    EQUIPO
  </button>
  <button class="button-81 mx-2" role="button" id="boton-torneo">
    TORNEO
  </button>
  <button class="button-81 mx-2" role="button" id="boton-club">
    CLUB
  </button>
  <button
    class="button-81 mx-2"
    role="button"
    id="boton-transferencias"
  >
    TRANSFERENCIAS
  </button>
</div>
</div>`;

export default htmlEquipo;
