const urlLogo = new URL ("../imagenes/logo.svg", import.meta.url);

const htmlLogIn = `
<div
        id="aplicacion"
        class="container-fluid d-flex flex-column justify-content-between align-items-center p-0"
      >
        <div
          class="d-flex flex-row justify-content-center align-items-center mb-2"
        >
          <img
            src='${urlLogo}'
            alt="CryptoFutbol logo"
            class="me-5"
            id="logo-pagina-bienvenida"
          />
          <h1 class="text-center text-white display-1">CryptoFutbol</h1>
        </div>
        <div
          id="formulario"
          class="d-flex flex-column justify-content-start align-items-start mb-3 p-2"
        >
          <form>
            <div
              class="d-flex flex-column justify-content-start align-items-start mb-3"
            >
              <label for="nombre" class="mb-1 fw-bold">Nombre del Club:</label>
              <input type="text" id="input-nombre" name="nombre" />
            </div>
            <div
              class="d-flex flex-column justify-content-start align-items-start mb-3"
            >
              <label for="key-publica" class="mb-1 fw-bold">Key Publica:</label>
              <input type="text" id="key-publica" name="key-publica" />
            </div>
            <div
              class="d-flex flex-column justify-content-start align-items-start mb-5"
            >
              <label for="cantidad-XLM" class="mb-1 fw-bold"
                >Cantidad de $XLM (1 $XLM = 1 $FTOK) - Minimo 50</label
              >
              <input
                type="number"
                id="cantidad-XLM"
                name="cantidad-XLM"
                min="50"
                placeholder="50"
              />
            </div>
            <div>
              <p class="fw-bold">Costo de crear un nuevo equipo: 10 $FTOK</p>
              <p class="fw-bold">Costo de inscribirse al torneo: 10 $FTOK</p>
            </div>
          </form>
        </div>
        <button role="button" id="boton-siguiente" class="button-81 mx-2">
          Inscribirse
        </button>
      </div>
    </div>`;

export default htmlLogIn;