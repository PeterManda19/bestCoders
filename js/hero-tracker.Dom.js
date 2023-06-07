// Create instance for HeroTracker
const hero = HeroTracker()

// Get all DOM elements
// const permissionBtn = document.querySelector(".html5-qrcode-element")


// Event listener for start button

// Peform action for the scanner
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log(decodedText);
    console.log(decodedResult);

    if (decodedText == "https://github.com/PeterManda19/bestCoders/tree/gh-pages/images") {
      
        
        
        html5QrcodeScanner.pause();

        setTimeout(function(){
            html5QrcodeScanner.resume();
        }, 1000);

    } 

}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);