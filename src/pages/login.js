const htmlLogIn = `
<div id="aplicacion" class="container-fluid d-flex flex-column justify-content-between p-0">
    <div id="principal">
    <div>
        <label for="nombre">Nombre del Club:</label>
        <input type="text" id="input-nombre" name="nombre" />
        <button role='button' id='boton-siguiente'>Siguiente</button>
    </div>
    <div>
        <label for="key-publica">key-publica:</label>
        <input type="text" id="key-publica" name="key-publica" />
    </div>
    <div>
        <label for="key-secreta">key-secreta:</label>
        <input type="text" id="key-secreta" name="key-secreta" />
    </div>
    <div>
        <label for="cantidad-XLM">Cantidad de $XLM:</label>
        <input type="number" id="cantidad-XLM" name="cantidad-XLM" />
    </div>
    <div>
        <label for="cantidad-FTOK">Cantidad de $FTOK:</label>
        <input type="number" id="cantidad-FTOK" name="cantidad-FTOK" />
    </div>
    </div>
</div>`;

export default htmlLogIn;