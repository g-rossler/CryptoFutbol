import crearInterfaz from "../src/ui";

const sdk = /** @type {import("stellar-sdk")} */ (window.StellarSdk);

const { Keypair, Asset, Server, TransactionBuilder, Operation } = sdk;
const server = new Server("https://horizon-testnet.stellar.org");

const distributorKeyPair = sdk.Keypair.fromSecret(
  "SCMXWSZXDJKG7TXQOJZ5ZDJBQ5H7CYFMSQGJWPTLRACHPYMPLV3K2PWY"
);

function consultarDatosUsuario() {
  const datosUsuario = JSON.parse(localStorage.getItem("ClubUsuario"));
  console.log(datosUsuario.keyPublica);
  return datosUsuario
}

export default async function comprarJugador() {
  const datosUsuario = consultarDatosUsuario();
  await realizarPago(datosUsuario.keyPublica, datosUsuario.keySecreta);
  crearInterfaz('transferencia exitosa')
}

async function realizarPago(datosUsuario) {
    const userKeyPair = Keypair.fromSecret(datosUsuario.keySecreta);
    const sourceAccount = await server.loadAccount(userKeyPair.publicKey());

    const tx = new TransactionBuilder(sourceAccount, {
        fee: await server.fetchBaseFee(),
        networkPassphrase: "Test SDF Network ; September 2015",
    }).addOperation(Operation.payment({
        amount: "10",
        asset: Asset.native(),
        destination: distributorKeyPair.publicKey()
    }))
        .setTimeout(60 * 10)
        .build();

    console.log(tx.toXDR());

    tx.sign(userKeyPair);

    try {
        const txResult = await server.submitTransaction(tx);
        console.log(txResult);
    } catch (e) {
        console.error(e);
    }
}