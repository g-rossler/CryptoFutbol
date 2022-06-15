export default async function simpleSigner(xdrDistribuidorFirmado) {
  const simpleSignerURL = "https://sign-test.plutodao.finance";
  const sampleXdr = xdrDistribuidorFirmado
  let signWindow;
  let connectWindow;

  function openConnectWindow() {
    console.log("Opening connect window");
    connectWindow = window.open(
      `${simpleSignerURL}/connect`,
      "Connect_Window",
      "width=360, height=450"
    );
  }

  function openSignWindowUsingPostMessage() {
    console.log("Opening sign window without URL params");
    signWindow = window.open(
      `${simpleSignerURL}/sign`,
      "Sign_Window",
      "width=360, height=700"
    );
  }

  async function handleMessage(e) {
    if (e.origin !== `${simpleSignerURL}`) {
      return;
    }

    const eventMessage = e.data;

    console.log("Message from simple signer received: ", eventMessage);

    if (eventMessage.type === "onReady") {
      if (eventMessage.page === "connect") {
        console.log("The connect page is ready");
      }

      if (eventMessage.page === "sign") {
        console.log("The sign page is ready");

        if (signWindow) {
          console.log("Sending parameters via postMessage");
          signWindow.postMessage(
            {
              xdr: sampleXdr,
              description: "Comprar un equipo",
              operationGroups: [],
            },
            simpleSignerURL
          );
        }
      }
    }

    if (eventMessage.type === "onConnect") {
      const publicKey = eventMessage.message.publicKey;
      // validate the public key
      if (StellarSdk.Keypair.fromPublicKey(publicKey)) {
        console.log("User connected with public key", publicKey);
        openSignWindowUsingPostMessage()
      }
    }

    if (eventMessage.type === "onSign") {
      const signedXdr = eventMessage.message.signedXDR;
      // validate the transaction
      if (StellarSdk.xdr.TransactionEnvelope.validateXDR(signedXdr, "base64")) {
        console.log(
          "The user has signed the transaction, the result is",
          signedXdr
        );

        const server = new StellarSdk.Server(
          "https://horizon-testnet.stellar.org/"
        );

        // Construct the transaction from the signedXDR
        // see https://stellar.github.io/js-stellar-sdk/TransactionBuilder.html#.fromXDR
        const transaction = StellarSdk.TransactionBuilder.fromXDR(
          signedXdr,
          "Test SDF Network ; September 2015"
        );

        try {
          const transactionResult = await server.submitTransaction(transaction);
          console.log(transactionResult);
        } catch (err) {
          console.error("This is expected to fail.", err);
        }
      }
    }

    if (eventMessage.type === "onCancel") {
      if (eventMessage.page === "connect") {
        console.log("The user canceled the connect action");
      }

      if (eventMessage.page === "sign") {
        console.log("The user canceled the sign action");
      }
    }
  }
  window.addEventListener("message", handleMessage);
  openConnectWindow()
}
