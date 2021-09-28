//Initializing PoRT Library
portObj = new port.PoRT({
  trustedNodeAddress: "https://mainnet.koii.live",
  node: 5,
  connectionWait: false,
});
// COnnecting Finne Wallet
portObj.connectWallet().catch(console.log);

document.addEventListener("DOMContentLoaded", function (event) {
	//Getting image element
  image = document.getElementById("imageId");
	//extracting transactionId
  let trxId = image.src.split("/").slice(-1);
	//adding event listener on image 
  image.onload = function () {
		//sending PoRT to KOII Network
    portObj.propagatePoRT(trxId).then(console.log);
  };
});
