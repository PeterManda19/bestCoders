// Define factory function
function RevealGame(){
   // initialise variables
   let scannedQRCodeCount = 0
   let scannedQRCodes = new Set();

   // Check if the QR Code is in the set, if it is then it can not be scanned
   function scanQRCode(qrCodeData){
    if(scannedQRCodes.has(qrCodeData)){
        return false; // QR Code already scanned
    }

    scannedQRCodes.add(qrCodeData);
    scannedQRCodeCount++;

    return true;
   }

   // Get the scanned QR code
   function getScannedQRCodeCount(){
    return scannedQRCodeCount;
   }

    return {
        scanQRCode,
        getScannedQRCodeCount
    }
}