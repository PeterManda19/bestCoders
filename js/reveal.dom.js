// Get all DOM elements
const qrCountElement = document.getElementById("qrCount");
const qrCodeElement = document.getElementsByClassName("qrCode");
const qrCodeBtn = document.getElementById("button");


// Create an instance
const game = RevealGame();

// Update qr count on webpage
function updateQRCount (){
    qrCountElement.textContent = game.getScannedQRCodeCount();

}

// Handle QR count scan event
function handleScanEvent(qrCodeData){
    const isScanned = game.scanQRCode(qrCodeData);
    if (isScanned){
        scannerElement.textContent = qrCodeData;
    }else {
        scannerElement.textContent = "QR Code already scanned, please scan another one"
    }

    updateQRCount();
}

// Handle download button click event
function handleDownloadEvent(qrCodeData){
    const isScanned = game.scanQRCode(qrCodeData);
    if (isScanned){
        scannerElement.textContent = qrCodeData;
    }else {
        scannerElement.textContent = "QR Code already scanned, please scan another one";
    }

    updateQRCount();
} 

// add event listeners to download button
for(let i=0; i<qrCodeElement.length; i++){
    const downloadButton = qrCodeElement[i].querySelector(".downloadButton");
    const qrCodeData = qrCodeElement[i].querySelector(".img");
    downloadButton.addEventListener("click", handleDownloadEvent);
}


// Perform action for the scanner
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log(decodedText);
    // console.log(decodedResult);

    // Set  QR code based on the decoded text
    if (decodedText == "Pluto") {
        game.getScannedQRCodeCount;
        counterElem.innerText = counter.value();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    } 

    setTimeout(function() {
        html5QrcodeScanner.resume();
    }, 1000);
    // Pause the scanner again after resume
    // html5QrcodeScanner.pause();
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);
