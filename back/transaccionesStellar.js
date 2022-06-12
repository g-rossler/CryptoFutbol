import crearInterfaz from "../src/ui";

const sdk = /** @type {import("stellar-sdk")} */ (window.StellarSdk);

const { Keypair, Asset, Server, TransactionBuilder, Operation } = sdk;
const server = new Server("https://horizon-testnet.stellar.org");

const ditribuidorKeyPair = sdk.Keypair.fromSecret(
  "SCMXWSZXDJKG7TXQOJZ5ZDJBQ5H7CYFMSQGJWPTLRACHPYMPLV3K2PWY"
);

function consultarDatosUsuario() {
  const datosUsuario = JSON.parse(localStorage.getItem("ClubUsuario"));
  return datosUsuario
}

export default async function comprarJugador() {
  const datosUsuario = consultarDatosUsuario();
  await realizarPago(datosUsuario);
  crearInterfaz('transferencia exitosa')
}

async function realizarPago(datosUsuario) {
    const keySecretaUsuario = datosUsuario.keySecreta
    const usuarioKeyPair = Keypair.fromSecret(keySecretaUsuario);
    const cuentaOrigen = await server.loadAccount(usuarioKeyPair.publicKey());

    const tx = new TransactionBuilder(cuentaOrigen, {
        fee: await server.fetchBaseFee(),
        networkPassphrase: "Test SDF Network ; September 2015",
    }).addOperation(Operation.payment({
        amount: "10",
        asset: Asset.native(),
        destination: ditribuidorKeyPair.publicKey()
    }))
        .setTimeout(60 * 10)
        .build();

    tx.sign(usuarioKeyPair);

    try {
        const txResult = await server.submitTransaction(tx);
    } catch (e) {
        console.error(e);
    }
}