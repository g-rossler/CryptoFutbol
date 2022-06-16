const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);
const urlArrow = new URL ("../imagenes/arrow.svg", import.meta.url);

const htmlTorneo = `<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
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
          <table class="table text-white text-center" id="tabla">
            <thead id="tabla-primera-fila">
              <tr>
                <th scope="col">POS</th>
                <th scope="col">EQUIPO</th>
                <th scope="col">PAR</th>
                <th scope="col">GAN</th>
                <th scope="col">PER</th>
                <th scope="col">EMP</th>
                <th scope="col">GF</th>
                <th scope="col">GC</th>
                <th scope="col">PUNTOS</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
          </table>
        </div>



<div id="menu-botones" class="container-fluid d-flex flex-row justify-content-center py-3">
  <button class="button-81 mx-2" role="button" id='boton-inicio'>INICIO</button>
  <button class="button-81 mx-2" role="button" id='boton-equipo'>EQUIPO</button>
  <button class="button-81 mx-2" role="button" id='boton-torneo'>TORNEO</button>
  <button class="button-81 mx-2" role="button" id='boton-club'>CLUB</button>
  <button class="button-81 mx-2" role="button" id='boton-transferencias'>TRANSFERENCIAS</button>
</div>
</div>`;

export default htmlTorneo;
