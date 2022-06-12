const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);
const urlArrow = new URL ("../imagenes/arrow.svg", import.meta.url);

const htmlTorneoDetalle =`<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
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


<div id="principal" class='d-flex flex-row'>

<div>
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

<div class='d-flex flex-column'>
    <div class='d-flex flex-row'>
        <div class='d-flex flex-column' id='promedio-ataque'>
          <p>60</p>
          <p>ATQ</p>
        </div>
        <div class='d-flex flex-column' id='promedio-defensa'>
          <p>55</p>
          <p>DEF</p>
        </div>
        <div class='d-flex flex-column' id='promedio-resistencia'>
          <p>53</p>
          <p>RES</p>
        </div>
    </div>
    <div>
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



<div id="menu-botones" class="container-fluid d-flex flex-row justify-content-center py-3">
  <button class="button-81 mx-2" role="button" id='boton-inicio'>INICIO</button>
  <button class="button-81 mx-2" role="button" id='boton-equipo'>EQUIPO</button>
  <button class="button-81 mx-2" role="button" id='boton-torneo'>TORNEO</button>
  <button class="button-81 mx-2" role="button" id='boton-club'>CLUB</button>
  <button class="button-81 mx-2" role="button" id='boton-transferencias'>TRANSFERENCIAS</button>
</div>
</div>`

export default htmlTorneoDetalle