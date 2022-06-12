const urlEscudo = new URL ("../imagenes/escudos/escudo.svg", import.meta.url);
const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);
const urlArrow = new URL ("../imagenes/arrow.svg", import.meta.url);

const htmlMenuInicio =`<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
<div class="container-fluid d-flex flex-row justify-content-between" id="navbar">
  <div class="d-flex flex-row align-items-center justify-content-center px-4 py-1 bor-der" id="logo">
    <img src="${urlLogo}" alt="" class="" />
    <p class="text-white text-center m-0 ps-3 fs-3 fw-bold">CryptoFutbol</p>
  </div>

  <div class="d-flex flex-row align-items-center justify-content-center px-4 py-1">
    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">
      CUENTA 4064646465
    </p>

    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">1000$FTOK</p>
  </div>

  <div class="d-flex flex-row align-items-center justify-content-between px-4 py-1" id="siguiente-fecha">
    <p class="text-white text-center m-0 ps-3 fs-6 fw-bold">FECHA 9</p>

    <div>
      <img src="${urlArrow}" alt="" class="ps-1" />
    </div>
  </div>
</div>


<div id="principal">
        <div class="text-center d-flex flex-column" style="height: 100%; border-bottom: 3px solid white">
          <div style="border-bottom: 3px solid white">
            <h2 class="text-white" id='nombre-club'></h2>
          </div>
          <div
            class="d-flex flex-row align-items-center"
            style="height: 100%"
          >
            <div
              class="d-flex flex-column align-items-center justify-content-center"
              style="border-right: 3px solid white; height: 100%; width: 50%;"
            >
              <h2 class="text-white">POSICIÓN EN EL TORNEO</h2>
              <h1 class="text-white" style="font-size: 300px">1</h1>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center"
              style="height: 100%; width: 50%;"
            >
              <h2 class="text-white">PRÓXIMO PARTIDO</h2>
              <img src="${urlEscudo}" alt="" class="my-5" />
              <h2 class="text-white">CANADA FC</h2>
            </div>
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
</div>`

export default htmlMenuInicio