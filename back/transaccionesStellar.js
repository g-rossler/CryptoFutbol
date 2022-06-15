import crearInterfaz from "../src/ui";
import { consultarDatosUsuarioLocalStorage } from "../src/localStorage";
import simpleSigner from "./simpleSigner";

const sdk = /** @type {import("stellar-sdk")} */ (window.StellarSdk);

const { Keypair, Asset, Server, TransactionBuilder, Operation } = sdk;
const server = new Server("https://horizon-testnet.stellar.org");

// GAO3272AFHFWZHNJAZEB7I52RJ3AGSKOHYGTCHDUEI23JHCIMV6M7Y6S
const creadorKeyPair = sdk.Keypair.fromSecret(
  "SBY53LRWRPF46OEKIEGKWUA22PACXJA5CJ7FDM3IBQP6HQDDXL6YKBFB"
);

//GCIRCLJWTXIGYUEVXFRMU3FHB6BSYFB2P4K2YWVORBRTSGZXXKNZMCN6
const ditribuidorKeyPair = sdk.Keypair.fromSecret(
  "SCB4PNWJL47ADSS4BWYZBW47HKU5H2O3SWIYWIJT7P74KQLJU4QCY55N"
);

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
  const nuevoToken = new Asset("FTOK12341234", creadorKeyPair.publicKey());

  const tx = new TransactionBuilder(cuentaOrigen, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: "Test SDF Network ; September 2015",
  })
    .addOperation(
      Operation.payment({
        amount: "10",
        asset: nuevoToken,
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
  const nuevoToken = new Asset("FTOK12341234", creadorKeyPair.publicKey());

  const tx = new TransactionBuilder(cuentaOrigen, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: "Test SDF Network ; September 2015",
  })
    .addOperation(
      Operation.payment({
        amount: "20",
        asset: nuevoToken,
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

export async function crearToken(datosUsuario) {
  const cantidadXLM = datosUsuario.cantidadXLM;
  const cantidadFTOK = (Number(datosUsuario.cantidadXLM) - 20).toString()
  const usuarioKeyPair = datosUsuario.keyPublica;
  const cuentaOrigen = await server.loadAccount(ditribuidorKeyPair.publicKey());
  const nuevoToken = new Asset("FTOK12341234", creadorKeyPair.publicKey());

  const tx = new TransactionBuilder(cuentaOrigen, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: "Test SDF Network ; September 2015",
  })
    .addOperation(
      Operation.payment({
        amount: cantidadXLM,
        asset: Asset.native(),
        source: usuarioKeyPair,
        destination: ditribuidorKeyPair.publicKey(),
      })
    )
    .addOperation(
      Operation.changeTrust({
        asset: nuevoToken,
        source: usuarioKeyPair,
      })
    )

    .addOperation(
      Operation.payment({
        amount: cantidadFTOK,
        asset: nuevoToken,
        destination: usuarioKeyPair,
        source: ditribuidorKeyPair.publicKey(),
      })
    )
    .setTimeout(60 * 10)
    .build();

  tx.sign(ditribuidorKeyPair);

  return tx.toXDR();
}

export async function crearCompraInicialToken() {
  const datosUsuario = consultarDatosUsuarioLocalStorage();
  const txDistribuidorFirmado = await crearToken(datosUsuario);
  await simpleSigner(txDistribuidorFirmado);
  
}
