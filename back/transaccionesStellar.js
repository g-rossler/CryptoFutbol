import crearInterfaz from "../src/ui";

const sdk = /** @type {import("stellar-sdk")} */ (window.StellarSdk);

const { Keypair, Asset, Server, TransactionBuilder, Operation } = sdk;
const server = new Server("https://horizon-testnet.stellar.org");

// GAO3272AFHFWZHNJAZEB7I52RJ3AGSKOHYGTCHDUEI23JHCIMV6M7Y6S
const creadorKeyPair= sdk.Keypair.fromSecret(
  "SBY53LRWRPF46OEKIEGKWUA22PACXJA5CJ7FDM3IBQP6HQDDXL6YKBFB"
);

//GCIRCLJWTXIGYUEVXFRMU3FHB6BSYFB2P4K2YWVORBRTSGZXXKNZMCN6
const ditribuidorKeyPair = sdk.Keypair.fromSecret(
  "SCB4PNWJL47ADSS4BWYZBW47HKU5H2O3SWIYWIJT7P74KQLJU4QCY55N"
);

function consultarDatosUsuario() {
  const datosUsuario = JSON.parse(localStorage.getItem("ClubUsuario"));
  return datosUsuario;
}

export async function comprarJugador() {
  const datosUsuario = consultarDatosUsuario();
  await realizarPago(datosUsuario);
  crearInterfaz("transferencia exitosa");
}

export async function entregarPremio() {
  console.log("3");
  const datosUsuario = consultarDatosUsuario();
  await enviarPremio(datosUsuario);
  console.log("4");
  crearInterfaz("premio");
}

async function realizarPago(datosUsuario) {
  const keySecretaUsuario = datosUsuario.keySecreta;
  const usuarioKeyPair = Keypair.fromSecret(keySecretaUsuario);
  const cuentaOrigen = await server.loadAccount(usuarioKeyPair.publicKey());

  const tx = new TransactionBuilder(cuentaOrigen, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: "Test SDF Network ; September 2015",
  })
    .addOperation(
      Operation.payment({
        amount: "10",
        asset: Asset.native(),
        destination: ditribuidorKeyPair.publicKey(),
      })
    )
    .setTimeout(60 * 10)
    .build();

  tx.sign(usuarioKeyPair);

  try {
    const txResultados = await server.submitTransaction(tx);
  } catch (e) {
    console.error(e);
  }
}

export async function enviarPremio(datosUsuario) {
  const keySecretaUsuario = datosUsuario.keySecreta;
  const usuarioKeyPair = Keypair.fromSecret(keySecretaUsuario);
  const cuentaOrigen = await server.loadAccount(ditribuidorKeyPair.publicKey());

  const tx = new TransactionBuilder(cuentaOrigen, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: "Test SDF Network ; September 2015",
  })
    .addOperation(
      Operation.payment({
        amount: "20",
        asset: Asset.native(),
        destination: usuarioKeyPair.publicKey(),
      })
    )
    .setTimeout(60 * 10)
    .build();

  tx.sign(ditribuidorKeyPair);

  try {
    const txResultados = await server.submitTransaction(tx);
  } catch (e) {
    console.error(e);
  }
}

export async function crearToken() {
  const datosUsuario = consultarDatosUsuario();
  const cantidadXLM = datosUsuario.cantidadXLM;
  const keySecretaUsuario = datosUsuario.keySecreta;
  const usuarioKeyPair = Keypair.fromSecret(keySecretaUsuario);
  const sourceAccount = await server.loadAccount(ditribuidorKeyPair.publicKey());
  const randomAsset = new Asset('FTOK12341234', creadorKeyPair.publicKey());

  console.log(randomAsset);

  const tx = new TransactionBuilder(sourceAccount, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: "Test SDF Network ; September 2015",
  })
  .addOperation(Operation.payment({
      amount: cantidadXLM,
      asset: Asset.native(),
      source: usuarioKeyPair.publicKey(),
      destination: ditribuidorKeyPair.publicKey()
  }))
  .addOperation(Operation.changeTrust({
      asset: randomAsset,
      source: usuarioKeyPair.publicKey()
  }))

  .addOperation(Operation.payment({
      amount: cantidadXLM,
      asset: randomAsset,
      destination: usuarioKeyPair.publicKey(),
      source: ditribuidorKeyPair.publicKey()
  }))
      .setTimeout(60 * 10) 
      .build();


  console.log(tx.toXDR());


  tx.sign(usuarioKeyPair);
  tx.sign(ditribuidorKeyPair);

  try {
      const txResult = await server.submitTransaction(tx);
      console.log(txResult);
  } catch (e) {
      console.error(e);
  }
}