// Get all DOM elements
const qrCountElement = document.getElementById("qrCount");
const qrCodeElement = document.getElementsByClassName("qrCode");
const scannerElement = document.getElementById("scanner");
const counterElem = document.getElementById("counter");
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
// for(let i=0; i<qrCodeElement.length; i++){
//     const downloadButton = qrCodeElement[i].querySelector(".downloadButton");
//     //const qrCodeData = qrCodeElement[i].querySelector(".img");
//     downloadButton.addEventListener("click", handleDownloadEvent);
// }


// Perform action for the scanner
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log(decodedText);
    console.log(decodedResult);

    // Set  QR code based on the decoded text
    if (decodedText == "Why was the JavaScript reality show cancelled after only one episode? People thought it seemed scripted.") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    } 

    if (decodedText == "Why did the developer quit his job? He didn’t get arrays.") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    } 

    if (decodedText == "How do you comfort a JavaScript bug? You console it.") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    }
    if (decodedText == "Did you know Meghan Markle and Prince Harry are incredibly distant cousins?") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    }  
    if (decodedText == "Did you know 40 percent of human jobs could be replaced by AI in the future?") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    }  
    if (decodedText == "Did you know wind on Mars is audible?") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    } 
    if (decodedText == "You're tallest first thing in the morning.") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    } 
    if (decodedText == "Fake smiles can hurt you.") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);
    } 
    if (decodedText == "Sleeping in a cold room can help you slim down.") {
        game.scanQRCode(); // Scan the QR code
        qrCountElement.innerText = game.getScannedQRCodeCount();
        
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
