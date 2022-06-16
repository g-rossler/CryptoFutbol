const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);
const urlArrow = new URL ("../imagenes/arrow.svg", import.meta.url);
const urlLogoUsuario = new URL ("../imagenes/escudos/logo9.jpg", import.meta.url);

const htmlClub = `<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
<div class="container-fluid d-flex flex-row justify-content-between" id="navbar">
  <div class="d-flex flex-row align-items-center justify-content-center px-4 py-1 bor-der" id="logo">
    <img src="${urlLogo}" alt="" class="" />
    <p class="text-white text-center m-0 ps-3 fs-3 fw-bold">CryptoFutbol</p>
  </div>

  <div class="d-flex flex-row align-items-center justify-content-center px-4 py-1">
    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">
      CUENTA 4064646465
    </p>

    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold"  id='ftok-saldo'>1000$FTOK</p>
  </div>

  <div class="d-flex flex-row align-items-center justify-content-between px-4 py-1" id="siguiente-fecha">
    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">SIGUIENTE PARTIDO</p>

    <div>
      <img src="${urlArrow}" alt="" class="ps-1" />
    </div>
  </div>
</div>


<div id="principal">
<div id="club" class="d-flex flex-row">
  <div
    class="d-flex justify-content-center align-items-center py-5"
    id="container-club-logo"
  >
    <img src="${urlLogoUsuario}" alt="" />
  </div>
  <div class="d-flex flex-column justify-content-center align-items-start py-5 ps-5" id="container-club-detalles">
    <h2 class="text-white text-center align-self-center mb-5" id="club-nombre-club fs-3">CLUB</h2>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">ATAQUE:</p>
      <p class="text-white text-center ps-2 fs-5">60</p>
    </div>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">DEFENSA:</p>
      <p class="text-white text-center ps-2 fs-5">55</p>
    </div>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">RESISTENCIA:</p>
      <p class="text-white text-center ps-2 fs-5">53</p>
    </div>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">NACIONALIDAD:</p>
      <p class="text-white text-center ps-2 fs-5">ARGENTINO</p>
    </div>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">POSICION TORNEO:</p>
      <p class="text-white text-center ps-2 fs-5">1</p>
    </div>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">ID:</p>
      <p class="text-white text-center ps-2 fs-5" id='club-id'>12345</p>
    </div>
    <div class="d-flex flex-row">
      <p class="text-white text-center fs-5">AÑO DE CREACION:</p>
      <p class="text-white text-center ps-2 fs-5">2022</p>
    </div>
    <button class="button-81 align-self-center" disabled>MEJORAR CLUB</button>
  </div>
</div>
</div>



<div id="menu-botones" class="container-fluid d-flex flex-row justify-content-center py-3">
  <button class="button-81 mx-2" role="button" id='boton-inicio'>INICIO</button>
  <button class="button-81 mx-2" role="button" id='boton-equipo'>EQUIPO</button>
  <button class="button-81 mx-2" role="button" id='boton-torneo'>TORNEO</button>
  <button class="button-81 mx-2" role="button" id='boton-club'>CLUB</button>
  <button class="button-81 mx-2" role="button" id='boton-transferencias'>TRANSFERENCIAS</button>
</div>
</div>`;

export default htmlClub;