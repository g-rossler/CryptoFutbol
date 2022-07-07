import crearInterfaz from "../src/ui";
import {
  consultarDatosUsuarioLocalStorage,
  guardarDatosUsuarioLocalStorage,
  guardarFTOKUsuarioLocalStorage,
  consultarFTOKUsuarioLocalStorage,
} from "../src/localStorage";
import { simpleSigner, simpleSignerPago } from "./simpleSigner";

const sdk = /** @type {import("stellar-sdk")} */ (window.StellarSdk);

const { Keypair, Asset, Server, TransactionBuilder, Operation } = sdk;
const server = new Server("https://horizon-testnet.stellar.org");


//                 ATTENTION
//
// IT WAS OK FOR THE HACKATHOLON, TO HAVE THE SECRET KEYS HERE,
// BUT WE KNOW THAT SECRET KEYS CAN'T BE IN THE CODE.

// GCCNYJEPZ4JU3O6IYWYCISFXNB6BLCGQBVHUIIMVKULXE6RZXTH4AOXG
const creadorKeyPair = sdk.Keypair.fromSecret(
  "SB24PI4ITCMVPJPOO57KD6CICPAYTB4FOB7XCXS2V27DISJPWKFA7GTM"
);

//GALSPY7E7FFMWWCUV7XCJ3LTNVG6TEZBQ6P265GJOFR3DX3ENRO7PQUS
const ditribuidorKeyPair = sdk.Keypair.fromSecret(
  "SCXJWFDJRQVYOBFDUIWFBW2KPN5WODZQRHDDKZX535OIWFP6TSPBNMIE"
);

export async function comprarJugador() {
  const datosUsuario = consultarDatosUsuarioLocalStorage();
  const datosXLM = consultarFTOKUsuarioLocalStorage();
  const txDistribuidorFirmado = await realizarPago(datosUsuario);
  await simpleSignerPago(txDistribuidorFirmado);
  const nuevoNumbericoValorFTOK = Number(datosXLM) - 10;
  const nuevoValorFTOK = nuevoNumbericoValorFTOK.toString();
  guardarFTOKUsuarioLocalStorage(nuevoValorFTOK);
  crearInterfaz("transferencia exitosa");
}

export async function entregarPremio() {
  const datosUsuario = consultarDatosUsuarioLocalStorage();
  const datosXLM = consultarFTOKUsuarioLocalStorage();
  await enviarPremio(datosUsuario);
  const nuevoNumbericoValorFTOK = Number(datosXLM) + 20;
  const nuevoValorFTOK = nuevoNumbericoValorFTOK.toString();
  guardarFTOKUsuarioLocalStorage(nuevoValorFTOK);
  crearInterfaz("premio");
}

async function realizarPago(datosUsuario) {
  const usuarioKeyPair = datosUsuario.keyPublica;
  const cuentaOrigen = await server.loadAccount(usuarioKeyPair);
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
  return tx.toXDR();
}

export async function enviarPremio(datosUsuario) {
  const usuarioKeyPair = datosUsuario.keyPublica;
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
        destination: usuarioKeyPair,
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
  const cantidadXLM = (Number(datosUsuario.cantidadXLM) + 20).toString();
  const cantidadFTOK = datosUsuario.cantidadXLM;
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
