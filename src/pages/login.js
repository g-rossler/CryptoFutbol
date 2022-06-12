const htmlLogIn = `
<div
        id="aplicacion"
        class="container-fluid d-flex flex-column justify-content-between align-items-center p-0"
      >
        <div id="principal" class="d-flex flex-column justify-content-start align-items-center m-3 p-3 bg-light">
          <div class="mb-3 d-flex flex-row justify-content-start align-items-start">
            <label for="nombre" class="me-2">Nombre del Club:</label>
            <input type="text" id="input-nombre" name="nombre" />
          </div>
          <div class="mb-3 d-flex flex-row justify-content-start align-items-start">
            <label for="key-publica" class="me-2">Key Publica:</label>
            <input type="text" id="key-publica" name="key-publica" />
          </div>
          <div class="mb-3 d-flex flex-row justify-content-start align-items-start">
            <label for="key-secreta" class="me-2">Key Secreta:</label>
            <input type="text" id="key-secreta" name="key-secreta" />
          </div>
          <div class="mb-3 d-flex flex-row justify-content-start align-items-start">
            <label for="cantidad-XLM" class="me-2">Cantidad de $XLM (1 $XLM = 1 $FTOK)- Minimo 20</label>
            <input type="number" id="cantidad-XLM" name="cantidad-XLM" min="20" placeholder='20'/>
          </div>
                   
        </div>
        <button role="button" id="boton-siguiente" class="button-81 mx-2">Siguiente</button>
      </div>`;

export default htmlLogIn;