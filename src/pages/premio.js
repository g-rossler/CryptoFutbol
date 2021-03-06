const urlEscudo = new URL ("../imagenes/escudos/escudo.svg", import.meta.url);
const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);
const urlArrow = new URL ("../imagenes/arrow.svg", import.meta.url);

const htmlPremio =`<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
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


<div
        id="aplicacion"
        class="container-fluid d-flex flex-column justify-content-between p-0"
      >
        <div id="principal" style="height: 100vh;" class="d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-center text-white mb-5 display-1">Felicidades saliste primero en el torneo, ganaste 20 $FTOK!!!</h1>
        </div>
      </div>



<div id="menu-botones" class="container-fluid d-flex flex-row justify-content-center py-3">
  <button class="button-81 mx-2" role="button" id='boton-inicio'>INICIO</button>
  <button class="button-81 mx-2" role="button" id='boton-equipo'>EQUIPO</button>
  <button class="button-81 mx-2" role="button" id='boton-torneo'>TORNEO</button>
  <button class="button-81 mx-2" role="button" id='boton-club'>CLUB</button>
  <button class="button-81 mx-2" role="button" id='boton-transferencias'>TRANSFERENCIAS</button>
</div>
</div>`

export default htmlPremio